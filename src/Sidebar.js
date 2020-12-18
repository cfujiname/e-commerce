import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu styles={ styles }>
      <a className="menu-item" href="/">
        página inicial
      </a>
      <a className="menu-item" href="/products">
        produtos
      </a>
      <a className="menu-item" href="/cart">
        minha cesta
      </a>
      <a className="menu-item" href="/about">
        quem somos
      </a>
    </Menu>
  );
};

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47',
    height: '10%',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    color: 'var(--darkGrey)',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },

  bmItem: {
    color: 'var(--mainGrey)',
    marginTop: '10px'
  },

  bmItemList: {
    color: '#444444',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}