import { render, screen } from '@testing-library/react';
import PricingGrid from './PricingGrid';

// Mock @vercel/analytics
jest.mock('@vercel/analytics', () => ({
  track: jest.fn(),
}));

test('renders Services heading', () => {
  render(<PricingGrid />);
  expect(screen.getByRole('heading', { name: /Services/i })).toBeInTheDocument();
});

test('renders all three service tiers', () => {
  render(<PricingGrid />);
  expect(screen.getByText('Discovery')).toBeInTheDocument();
  expect(screen.getByText('Setup')).toBeInTheDocument();
  expect(screen.getByText('Full Integration')).toBeInTheDocument();
});

test('does not render Custom tier', () => {
  render(<PricingGrid />);
  expect(screen.queryByText('Custom')).not.toBeInTheDocument();
});

test('displays hours and hourly rate for each tier', () => {
  const { container } = render(<PricingGrid />);
  const hourElements = container.querySelectorAll('.service-card__hours');
  expect(hourElements).toHaveLength(3);
  expect(screen.getAllByText(/\$150\/hr/).length).toBe(3);
});
