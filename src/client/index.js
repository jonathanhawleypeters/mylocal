import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import rootReducer from './reducers';


// apply any middleware
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
  <Router history={browserHistory} routes={routes}></Router>
  </Provider>
    , document.getElementById('app')
  );

// todo : automatically authenticate users