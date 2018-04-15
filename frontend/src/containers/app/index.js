import React from 'react';
import { Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Login from '../Login';
import Products from '../Products';
import ProductDetail from '../ProductDetail';
import Transactions from '../Transactions';
import TranHistory from '../Timeline';
import Chat from '../Chat';

import './style.css';

const App = () => (
  <MuiThemeProvider>
    <div className="app">
      {/* <header>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
      </header> */}
      <main>
        <Route exact path="/" component={Login} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product-detail" component={ProductDetail} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/history" component={TranHistory} />
        <Route exact path="/chat" component={Chat} />
      </main>
    </div>
  </MuiThemeProvider>
);

export default App;
