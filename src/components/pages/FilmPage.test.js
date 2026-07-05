import { render, screen } from '@testing-library/react';
import FilmPage from './FilmPage';
import filmCredits from '../data/filmCredits';

test('sets document title', () => {
  render(<FilmPage />);
  expect(document.title).toBe('Film | Courtney L. Greer');
});

test('renders hero title line', () => {
  render(<FilmPage />);
  expect(
    screen.getByRole('heading', { level: 1, name: /Director\. Cinematographer\. Storyteller\./i })
  ).toBeInTheDocument();
});

test('renders director statement copy', () => {
  render(<FilmPage />);
  expect(screen.getByText(/I tell stories about people\./)).toBeInTheDocument();
  expect(
    screen.getByText(/Available for directing, cinematography, event film, and production\./)
  ).toBeInTheDocument();
});

test('renders all credits from filmCredits data', () => {
  render(<FilmPage />);
  filmCredits.forEach((credit) => {
    expect(screen.getByText(credit.title)).toBeInTheDocument();
    expect(screen.getAllByText(credit.roles).length).toBeGreaterThanOrEqual(1);
  });
});

test('renders in-production status badge on applicable credits', () => {
  render(<FilmPage />);
  const inProductionCredits = filmCredits.filter((c) => c.status);
  inProductionCredits.forEach((credit) => {
    expect(screen.getByText(credit.status)).toBeInTheDocument();
  });
});

test('renders reel placeholder', () => {
  render(<FilmPage />);
  expect(screen.getByText(/Reel coming soon/i)).toBeInTheDocument();
});

test('renders contact mailto link', () => {
  render(<FilmPage />);
  const link = screen.getByRole('link', { name: /courtneygreer@heyvoxxy\.com/i });
  expect(link).toHaveAttribute('href', 'mailto:courtneygreer@heyvoxxy.com');
});
