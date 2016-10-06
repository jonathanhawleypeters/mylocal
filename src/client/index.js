import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory }       from 'react-router';
import routes                           from './routes';
import reducers                         from './reducers';
import reduxThunk                       from 'redux-thunk';
import { AUTH_USER }                    from './constants';

// apply any middleware
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
if(token){
  store.dispatch({ 
    type: AUTH_USER,
    payload: user
  })
}


ReactDOM.render(
  <Provider store={ store }>
    <Router history={browserHistory} routes={routes}></Router>
  </Provider>
    , document.getElementById('app')
  );

// todo : automatically authenticate users