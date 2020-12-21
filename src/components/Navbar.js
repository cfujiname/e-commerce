import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../logo.JPG';
import cart from '../cart.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        <div class="container">
          <div class="row justify-content-start"></div>
              <ul className='align-items-center'>
                <li className='nav-item ml-5'>
           
                  {/* <div class='col'></div> */}
                    <div class='col'>
                      <Link to='/' className='nav-link'>
                       limoncello
                      </Link>
                    </div>
                </li>
              </ul>
          </div>
          
       
        <div class='col'>
          <Link to='/cart' className='ml-auto'>
            <ButtonContainer>
              <span className='mr-2'>
                <img src={ cart } alt='carrinho' width='50px' />
              </span>
            </ButtonContainer>
          </Link>
        </div>
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
