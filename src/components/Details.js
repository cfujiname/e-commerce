import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { ButtonProducts, ButtonCart } from './Button';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        { value => {
          const {
            id, title, sku, img, info, price, inCart
          } = value.detailProduct;
          return (
            <div className='container py-5'>
              {/* title */}
              <div className='row'>
                <div className='col-10 mx-auto text-center'>
                  <h1>{title}</h1>
                </div>
              </div>
              {/* product info */}
              <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <img src={img} className='img-fluid' alt='product'/>
                </div>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <h2>{title}</h2>
                  <h4 className='text-title mt-3 mb-2'>
                    sku <span>{sku}</span>
                  </h4>
                  <h4>
                    preço <span>r$ </span>{price}
                  </h4>
                  <p className='mt-3 mb-0'>
                    product info details
                  </p>
                  <p className='lead'>
                    {info}
                  </p>
                  <div>
                    <Link to='/products'>
                      <ButtonProducts>
                        voltar
                      </ButtonProducts>
                    </Link>
                    <ButtonCart 
                      disabled={inCart ? true : false}
                      onClick={() => {
                      value.addToCart(id)
                    }}
                    >
                      {inCart ? 'já está na cesta' : 'adicionar à cesta'}
                    </ButtonCart>
                  </div>

                </div>
              </div>
            </div>
          )

        }}

      </ProductConsumer>
    )
  }
}
