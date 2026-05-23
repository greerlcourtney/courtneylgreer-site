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

test('renders all five service tiers', () => {
  render(<PricingGrid />);
  expect(screen.getByText('Team Training')).toBeInTheDocument();
  expect(screen.getByText('Discovery')).toBeInTheDocument();
  expect(screen.getByText('Setup')).toBeInTheDocument();
  expect(screen.getByText('Full Integration')).toBeInTheDocument();
  expect(screen.getByText('Ongoing Support')).toBeInTheDocument();
});

test('displays flat prices', () => {
  render(<PricingGrid />);
  expect(screen.getByText('$500')).toBeInTheDocument();
  expect(screen.getByText('$750/month')).toBeInTheDocument();
  expect(screen.getByText('$6,000')).toBeInTheDocument();
});
