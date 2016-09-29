import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Location from './components/Location';
import YelpResults from './containers/YelpResults';
import Signin from './components/Signin';
import Signout from './components/Signout';
import Signup from './components/Signup';
import RequireAuth from './components/require_auth';
import EventbriteList from './containers/EventbriteList';

export default (
  <Router path="/" component={ App } >
    <IndexRoute component={ Home } />
      <Route path="/signin" component={ Signin }/>
      <Route path="/search" component={ Location } />
      <Route path="/search/restaurants" component={ YelpResults } />
      <Route path="/search/events" component={EventbriteList} />
      <Route path="/signout" component={ Signout } />
      <Route path="/signup" component={ Signup } />
  </Router>
);
