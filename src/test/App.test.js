import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the full app', () => {
  render(<App />);
  const routeElement = screen.getByText(/products/i);
  expect(routeElement).toBeInTheDocument();
});

test('renders the products link', () => {
  render(<App />);
  const linkElement = screen.getByText(/products/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the my cart link', () => {
  render(<App />);
  const linkElement = screen.getByText(/my cart/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the logo with a link', () => {
  render(<App />);
  const logoElement = screen.getByRole( 'link', { name: 'lemon'} )
  expect(logoElement).toBeInTheDocument();
});
