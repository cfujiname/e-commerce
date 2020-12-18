import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../logo.JPG';
// import cart from '../cart.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        {/* <Link to='/'>
          <img src={ logo } alt='lemon' className='navbar-brand' width='100px' />
        </Link> */}
        <ul className='navbar-bar align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              limoncello
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              {/* <img src={ cart } alt='carrinho' width='50px' /> */}
              minha cesta
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: transparent ;
  .nav-link {
    color: var(--darkGrey) !important;
    font-size: 2rem;
    margin: auto;
  }
`
