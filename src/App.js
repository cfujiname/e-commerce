import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Error from './components/Error';


class App extends Component {
  render() {
    return (
    <Router>
      <React.Fragment>
        <Navbar />
          <Switch>
            <Route exact path='/' component={ ProductList } />
            <Route path='/details' component={ Details } />
            <Route path='/cart' component={ Cart } />
            <Route component={ Error } />
          </Switch>
      </React.Fragment>
    </Router>
    );
  }
}

export default App;
