import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Error from './components/Error';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ProductList />
      <Details />
      <Cart />
      <Error />
    </React.Fragment>

  );
}

export default App;
