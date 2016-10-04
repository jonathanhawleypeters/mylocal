import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory }       from 'react-router';
import routes                           from './routes';
import reducers                         from './reducers';
import reduxThunk                       from 'redux-thunk';

// apply any middleware
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}></Router>
  </Provider>
    , document.getElementById('app')
  );

// todo : automatically authenticate users