import { render, screen } from '@testing-library/react';
import ExternalOrPlaceholderLink from './ExternalOrPlaceholderLink';

test('renders anchor when href is provided', () => {
  render(<ExternalOrPlaceholderLink href="https://example.com" className="test">Click me</ExternalOrPlaceholderLink>);
  const link = screen.getByText('Click me');
  expect(link.tagName).toBe('A');
  expect(link).toHaveAttribute('href', 'https://example.com');
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});

test('renders span placeholder when href is missing', () => {
  render(<ExternalOrPlaceholderLink className="test">Coming soon</ExternalOrPlaceholderLink>);
  const el = screen.getByText('Coming soon');
  expect(el.tagName).toBe('SPAN');
  expect(el).toHaveClass('is-placeholder-link');
  expect(el).toHaveAttribute('title', 'Link coming soon');
});

test('renders span placeholder when href is #', () => {
  render(<ExternalOrPlaceholderLink href="#" className="test">No link</ExternalOrPlaceholderLink>);
  const el = screen.getByText('No link');
  expect(el.tagName).toBe('SPAN');
  expect(el).toHaveClass('is-placeholder-link');
});
