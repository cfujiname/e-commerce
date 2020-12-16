import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the full app', () => {
  render(<App />);
  const routeElement = screen.getByText(/products/i);
  expect(routeElement).toBeInTheDocument();
});

