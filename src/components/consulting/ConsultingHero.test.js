import { render, screen } from '@testing-library/react';
import ConsultingHero from './ConsultingHero';

test('renders Wolf Development Studios heading', () => {
  render(<ConsultingHero />);
  expect(screen.getByRole('heading', { name: /Wolf Development Studios/i })).toBeInTheDocument();
});

test('renders tagline', () => {
  render(<ConsultingHero />);
  expect(screen.getByText(/AI implementation, software setup, and team training/i)).toBeInTheDocument();
});

test('renders email link', () => {
  render(<ConsultingHero />);
  const emailLink = screen.getByText('team@wolfdevelopmentstudio.com');
  expect(emailLink).toHaveAttribute('href', 'mailto:team@wolfdevelopmentstudio.com');
});

test('renders website link', () => {
  render(<ConsultingHero />);
  const siteLink = screen.getByText('wolfdevelopmentstudios.com');
  expect(siteLink).toHaveAttribute('href', 'https://www.wolfdevelopmentstudios.com');
  expect(siteLink).toHaveAttribute('target', '_blank');
});
