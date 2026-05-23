import { render, screen } from '@testing-library/react';
import HomePage from './components/pages/HomePage';

test('renders site name', () => {
  render(<HomePage />);
  expect(screen.getByRole('heading', { name: /Courtney L\. Greer/i })).toBeInTheDocument();
});
