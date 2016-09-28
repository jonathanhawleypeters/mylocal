import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';

import App from './components/App';
import Hero from './components/Hero';
import Location from './components/Location';
import Signin from './components/Signin';
import Signout from './components/Signout';
import Signup from './components/Signup';

export default (
  <Router path="/" component={App} >
    <IndexRoute component={Hero} />
    <Route path="/signin" component={Signin}/>
    <Route path="/search" component={Location} />
    <Route path="/signout" component={Signout} />
    <Route path="/signup" component={Signup} />
  </Router>
);