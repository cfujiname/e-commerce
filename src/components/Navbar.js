import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainWord from '../MainWord.jpg';
import cart from '../cart.svg';
import styled from 'styled-components';
import { ButtonContainer, ButtonMain } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-lg px-sm-5'>
        {/* <ul className='align-items-center'> */}
          {/* <li className='nav-item ml-5'> */}
           
          <Link to='/' className='m-auto' >
            <ButtonMain>
                <img src={ MainWord } alt='carrinho' width='200px' />
            </ButtonMain>
          </Link>
          {/* </li> */}
        {/* </ul>           */}
          <Link to='/cart' className='ml-auto'>
            <ButtonContainer>
              <span className='mr-0'>
                <img src={ cart } alt='carrinho' width='50px' />
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
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    float: none;
    margin-top: 0.8rem;
  }
`
