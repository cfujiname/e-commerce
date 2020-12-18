import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { ProductConsumer } from '../context';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
        <div className='card'>
          <div className='img-container p-5' onClick={ () => console.log('you clicked') } >
            
            <Link to='/details'>
              <img src={ img } alt='product' className='card-img-top' />
            </Link>

            <button className='cart-btn' 
              disabled={ inCart ? true : false } 
              onClick={ () => {console.log('added to cart')}} >
              { inCart ? (<p className='text-capitalize mb-0' disabled>Já está no carrinho!</p>) : 
                (<i className='fas fa-cart-plus' />) }
            </button>

          </div>

          {/* card-footer */}

          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>
              { title }
            </p>
            <h2 className='text-grey mb-0'>
              <span className='mr-1'>R$</span>
              { price }
            </h2>
          </div>

        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent; 
    background: transparent;
    transition: all 0.3s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.3s linear;
  }

  &:hover {
    .card {
      border: 0.1rem solid rgba(0,0,0,0.2);
    }
    
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.3s linear;
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: transparent;
    border: none;
    transform: translate(100%, 100%);
    transition: all 0.3s linear;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0)
  }

  .img-container:hover .card-img-top {
    transform: scale(1.25);
  }

  .cart-btn:hover {
    color: var(--darkGrey);
    cursor: pointer;
  }

`