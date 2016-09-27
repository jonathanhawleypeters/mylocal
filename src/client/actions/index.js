import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from '../constants/types';

const ROOT_URL = 'http://localhost:3000';

// action submits email, pw to the server
// action creator > action > Dispatch > sent to all reducers
// we are using redux thunk, because it gives you access to Dispatch
// we are not using redux promise

// if success, update state of app to authenticated
// save jwt token
// redirect
// async function

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email, password})
    .then(response =>{
      //update state - dispatch action by redux-thunk
      dispatch({ type: AUTH_USER});
      // send user to / and update the history stack
      browserHistory.push('/');
    })
    .catch(() => {
    });
  };
}