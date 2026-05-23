import { render, screen } from '@testing-library/react';
import CardMore from './CardMore';

test('renders details element with string content', () => {
  render(<CardMore more="Some extra info" />);
  expect(screen.getByText('More')).toBeInTheDocument();
  expect(screen.getByText('Some extra info')).toBeInTheDocument();
});

test('renders multiple paragraphs from array', () => {
  render(<CardMore more={['First paragraph', 'Second paragraph']} />);
  expect(screen.getByText('First paragraph')).toBeInTheDocument();
  expect(screen.getByText('Second paragraph')).toBeInTheDocument();
});

test('renders nothing when more is null', () => {
  const { container } = render(<CardMore more={null} />);
  expect(container.innerHTML).toBe('');
});

test('renders nothing when more is empty string', () => {
  const { container } = render(<CardMore more="" />);
  expect(container.innerHTML).toBe('');
});
