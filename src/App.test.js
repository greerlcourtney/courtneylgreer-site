import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site name', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Courtney L\. Greer/i })).toBeInTheDocument();
});
