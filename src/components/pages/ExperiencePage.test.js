import { render, screen } from '@testing-library/react';
import ExperiencePage from './ExperiencePage';

test('renders Experience heading', () => {
  render(<ExperiencePage />);
  expect(screen.getByRole('heading', { name: /^Experience$/i })).toBeInTheDocument();
});

test('renders all experience cards', () => {
  render(<ExperiencePage />);
  expect(screen.getByText(/CEO & Co-Founder, Voxxy/)).toBeInTheDocument();
  expect(screen.getByText(/Senior Technical Program Manager, Microsoft/)).toBeInTheDocument();
  expect(screen.getByText(/Partner Development Manager, Microsoft/)).toBeInTheDocument();
});

test('renders Speaking & Press section', () => {
  render(<ExperiencePage />);
  expect(screen.getByRole('heading', { name: /Speaking & Press/i })).toBeInTheDocument();
  expect(screen.getByText(/Guest Presenter/)).toBeInTheDocument();
});

test('renders Judging & Advising section', () => {
  render(<ExperiencePage />);
  expect(screen.getByRole('heading', { name: /Judging & Advising/i })).toBeInTheDocument();
  expect(screen.getByText(/RocketHacks/)).toBeInTheDocument();
});

test('renders external links with correct attributes', () => {
  render(<ExperiencePage />);
  const links = screen.getAllByText(/View Post →|View Presentation →|Read the Recap →|Read article →/);
  links.forEach((link) => {
    expect(link.closest('a')).toHaveAttribute('target', '_blank');
    expect(link.closest('a')).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

test('sets document title', () => {
  render(<ExperiencePage />);
  expect(document.title).toBe('Experience | Courtney L. Greer');
});
