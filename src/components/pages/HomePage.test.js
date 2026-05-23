import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders hero heading', () => {
  render(<HomePage />);
  expect(screen.getByRole('heading', { level: 1, name: /Courtney L\. Greer/i })).toBeInTheDocument();
});

test('renders hero tagline', () => {
  render(<HomePage />);
  expect(screen.getByText(/Founder\. Technologist\. Community builder\./)).toBeInTheDocument();
});

test('renders About section', () => {
  render(<HomePage />);
  expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument();
});

test('renders Building section with Voxxy', () => {
  render(<HomePage />);
  expect(screen.getByRole('heading', { name: /What I'm Building/i })).toBeInTheDocument();
  expect(screen.getByText('Voxxy')).toBeInTheDocument();
});

test('renders social links', () => {
  render(<HomePage />);
  const linkedin = screen.getByRole('link', { name: /LinkedIn/i });
  const github = screen.getByRole('link', { name: /GitHub/i });
  const email = screen.getByRole('link', { name: /Email/i });

  expect(linkedin).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
  expect(github).toHaveAttribute('href', expect.stringContaining('github.com'));
  expect(email).toHaveAttribute('href', 'mailto:courtneygreer@heyvoxxy.com');
});

test('sets document title', () => {
  render(<HomePage />);
  expect(document.title).toBe('Courtney L. Greer');
});
