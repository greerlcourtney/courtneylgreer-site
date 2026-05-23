import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LeadCaptureForm from './LeadCaptureForm';

// Mock @vercel/analytics
jest.mock('@vercel/analytics', () => ({
  track: jest.fn(),
}));

const { track } = require('@vercel/analytics');

beforeEach(() => {
  track.mockClear();
  delete process.env.REACT_APP_FORMSPREE_ENDPOINT;
});

test('renders all form fields', () => {
  render(<LeadCaptureForm utm={{}} />);
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Business/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Service Interest/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
});

test('renders service options without Custom', () => {
  render(<LeadCaptureForm utm={{}} />);
  const select = screen.getByLabelText(/Service Interest/i);
  expect(select).toBeInTheDocument();
  const options = select.querySelectorAll('option');
  const optionTexts = Array.from(options).map((o) => o.textContent);
  expect(optionTexts).toContain('Discovery (5 hrs)');
  expect(optionTexts).toContain('Setup (15 hrs)');
  expect(optionTexts).toContain('Full Integration (40 hrs)');
  expect(optionTexts).not.toContain('Custom');
});

test('tracks form_start on first field focus', () => {
  render(<LeadCaptureForm utm={{}} />);
  fireEvent.focus(screen.getByLabelText(/Name/i));
  expect(track).toHaveBeenCalledWith('form_start', { source: 'consulting' });
});

test('tracks form_field_focus on each field', () => {
  render(<LeadCaptureForm utm={{}} />);
  fireEvent.focus(screen.getByLabelText(/Email/i));
  expect(track).toHaveBeenCalledWith('form_field_focus', { field: 'email' });
});

test('does not track form_start twice', () => {
  render(<LeadCaptureForm utm={{}} />);
  fireEvent.focus(screen.getByLabelText(/Name/i));
  fireEvent.focus(screen.getByLabelText(/Email/i));
  const startCalls = track.mock.calls.filter(([event]) => event === 'form_start');
  expect(startCalls.length).toBe(1);
});

test('shows error when no Formspree endpoint is configured', async () => {
  render(<LeadCaptureForm utm={{}} />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Test', name: 'name' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@test.com', name: 'email' } });
  fireEvent.click(screen.getByRole('button', { name: /Send/i }));

  await waitFor(() => {
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });
  expect(track).toHaveBeenCalledWith('form_submit_error', expect.objectContaining({ reason: 'no_endpoint' }));
});

test('shows success message on successful submission', async () => {
  process.env.REACT_APP_FORMSPREE_ENDPOINT = 'https://formspree.io/f/test';
  global.fetch = jest.fn(() => Promise.resolve({ ok: true }));

  render(<LeadCaptureForm utm={{ source: 'google' }} />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Test User', name: 'name' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@test.com', name: 'email' } });
  fireEvent.click(screen.getByRole('button', { name: /Send/i }));

  await waitFor(() => {
    expect(screen.getByText(/We'll be in touch soon/i)).toBeInTheDocument();
  });
  expect(track).toHaveBeenCalledWith('form_submit_success', expect.any(Object));

  global.fetch.mockRestore();
});

test('shows error on failed submission', async () => {
  process.env.REACT_APP_FORMSPREE_ENDPOINT = 'https://formspree.io/f/test';
  global.fetch = jest.fn(() => Promise.resolve({ ok: false }));

  render(<LeadCaptureForm utm={{}} />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Test', name: 'name' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@test.com', name: 'email' } });
  fireEvent.click(screen.getByRole('button', { name: /Send/i }));

  await waitFor(() => {
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });
  expect(track).toHaveBeenCalledWith('form_submit_error', expect.any(Object));

  global.fetch.mockRestore();
});

test('disables submit button while submitting', async () => {
  process.env.REACT_APP_FORMSPREE_ENDPOINT = 'https://formspree.io/f/test';
  let resolvePromise;
  global.fetch = jest.fn(() => new Promise((resolve) => { resolvePromise = resolve; }));

  render(<LeadCaptureForm utm={{}} />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Test', name: 'name' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@test.com', name: 'email' } });
  fireEvent.click(screen.getByRole('button', { name: /Send/i }));

  expect(screen.getByRole('button')).toBeDisabled();
  expect(screen.getByRole('button')).toHaveTextContent('Sending');

  resolvePromise({ ok: true });
  await waitFor(() => {
    expect(screen.getByText(/We'll be in touch soon/i)).toBeInTheDocument();
  });

  global.fetch.mockRestore();
});
