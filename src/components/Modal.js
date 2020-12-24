import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonMain } from './Button';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if(!modalOpen) {
            return null;
          } else {
            return (
            <ModalContainer >
              <div className='container'>
                <div className='row'>
                  <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center p-5'>
                    <h5>adicionado à cesta</h5>
                    <img src={img} className='img-fluid' alt='product'/>
                    <h5>{title}</h5>
                    <h5 className='text-muted'>r$ {price}</h5>
                    <Link to='/products'>
                      <ButtonMain onClick={() => closeModal()}>
                        continuar compras
                      </ButtonMain>
                    </Link>
                    <Link to='/cart'>
                      <ButtonMain onClick={() => closeModal()}>
                        minha cesta
                      </ButtonMain>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }

`