import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Let\'s talk heading', () => {
  render(<Footer />);
  expect(screen.getByText("Let's talk")).toBeInTheDocument();
});

test('renders email link', () => {
  render(<Footer />);
  const emailLink = screen.getByText('courtneygreer@heyvoxxy.com');
  expect(emailLink).toHaveAttribute('href', 'mailto:courtneygreer@heyvoxxy.com');
});

test('renders social navigation', () => {
  render(<Footer />);
  expect(screen.getByRole('navigation', { name: /Social and web/i })).toBeInTheDocument();
  expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  expect(screen.getByText('GitHub')).toBeInTheDocument();
  expect(screen.getByText('heyvoxxy.com')).toBeInTheDocument();
});

test('has correct accessibility attributes', () => {
  const { container } = render(<Footer />);
  const section = container.querySelector('[aria-labelledby="contact-heading"]');
  expect(section).toBeInTheDocument();
  expect(section.querySelector('#contact-heading')).toBeInTheDocument();
});
