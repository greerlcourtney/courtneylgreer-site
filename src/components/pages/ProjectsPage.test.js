import { render, screen } from '@testing-library/react';
import ProjectsPage from './ProjectsPage';

test('renders Projects heading', () => {
  render(<ProjectsPage />);
  expect(screen.getByRole('heading', { name: /^Projects$/i })).toBeInTheDocument();
});

test('renders all project cards', () => {
  render(<ProjectsPage />);
  expect(screen.getByText('Voxxy')).toBeInTheDocument();
  expect(screen.getByText('Fash-a-thon')).toBeInTheDocument();
  expect(screen.getByText('Black Tech News')).toBeInTheDocument();
  expect(screen.getByText('Spin The Globe')).toBeInTheDocument();
  expect(screen.getByText('Kudos')).toBeInTheDocument();
});

test('renders tech tags', () => {
  render(<ProjectsPage />);
  expect(screen.getAllByText('React').length).toBeGreaterThan(0);
});

test('renders Community & Teaching section', () => {
  render(<ProjectsPage />);
  expect(screen.getByRole('heading', { name: /Community & Teaching/i })).toBeInTheDocument();
  expect(screen.getByText(/Chair, Juneteenth Hackathon/)).toBeInTheDocument();
});

test('renders project links', () => {
  render(<ProjectsPage />);
  const viewLinks = screen.getAllByText(/View Project →|View Recap →/);
  expect(viewLinks.length).toBeGreaterThan(0);
});

test('sets document title', () => {
  render(<ProjectsPage />);
  expect(document.title).toBe('Projects | Courtney L. Greer');
});

test('renders Film section heading', () => {
  render(<ProjectsPage />);
  expect(screen.getByRole('heading', { name: /^Film$/i })).toBeInTheDocument();
});

test('renders film credit cards', () => {
  render(<ProjectsPage />);
  expect(screen.getByText('8 Women 8 Lives 8 Stories')).toBeInTheDocument();
  expect(screen.getByText('Painting Lounge Free Paint Night')).toBeInTheDocument();
});

test('renders link to film page', () => {
  render(<ProjectsPage />);
  const link = screen.getByRole('link', { name: /View full film page/i });
  expect(link).toHaveAttribute('href', '/film');
});
