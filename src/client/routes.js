import React from 'react';
import App from './components/App';
import Hero from './components/Hero';
import Location from './components/Location';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import Signin from './components/Signin';

export default (
  <Router path="/" component={App} >
    <IndexRoute component={Hero} />
    <Route path="/signin" component={Signin}/>
    <Route path ="/search" component={Location} />
  </Router>
);