import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

it('should display go to my cart when my cart button is clicked', () => {
  const mockCart = [ 'Limoncello', 'Arancello' ];
  render(<Navbar cart={ mockCart }/>);
  const cartList = screen.getByText('Limoncello');
  expect(cartList).toBeInTheDocument();
});