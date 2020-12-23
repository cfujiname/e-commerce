import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Error from './components/Error';
import Sidebar from './Sidebar';
import FirstPage from './components/FirstPage';
import About from './components/About';



class App extends Component {
  render() {
    return (
    <Router>
      <React.Fragment>
        <div className="App" id="outer-container">
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

            <div id="page-wrap">
              <Navbar />
              <Switch>
                <Route exact path='/' component={ FirstPage } />
                <Route path='/products' component={ ProductList } />
                <Route path='/details' component={ Details } />
                <Route path='/cart' component={ Cart } />
                <Route path='/about' component={ About } />
                <Route component={ Error } />
              </Switch>
              
            </div>
        </div>
      </React.Fragment>
    </Router>
    );
  }
}

export default App;
