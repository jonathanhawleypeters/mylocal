import React from 'react';
import App from './components/App';
import Hero from './components/Hero';
import Location from './components/Location';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Hero} />
    <Route path ="/search" component={Location} />
  </Route>
);