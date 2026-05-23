import { render, screen } from '@testing-library/react';
import CardMedia from './CardMedia';

test('renders image when imageSrc is provided', () => {
  render(<CardMedia imageSrc="/test.jpg" imageAlt="Test image" />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', '/test.jpg');
  expect(img).toHaveAttribute('alt', 'Test image');
  expect(img).toHaveAttribute('loading', 'lazy');
});

test('renders nothing when imageSrc is missing', () => {
  const { container } = render(<CardMedia />);
  expect(container.innerHTML).toBe('');
});

test('defaults alt to empty string when not provided', () => {
  const { container } = render(<CardMedia imageSrc="/test.jpg" />);
  const img = container.querySelector('img');
  expect(img).toHaveAttribute('alt', '');
});
