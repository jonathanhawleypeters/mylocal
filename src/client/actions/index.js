import axios                                  from 'axios';
import { browserHistory }                     from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from '../constants';
import { SEARCH_TERMS }                       from '../constants';
import { EVENTBRITE_RESULTS }                 from '../constants';
import { YELP_RESULTS }                       from '../constants';
import { RESTAURANT }                         from '../constants';
import { ADD_TASK_TOP, GET_TASKS }            from '../constants';

// action submits email, pw to the server
// if success, update state of app to authenticated
// save jwt token
// redirect
// async function
export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post('/signin', { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER, payload: response.data.firstName + ' ' + response.data.lastName });
      browserHistory.push('/');
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.firstName + ' ' + response.data.lastName);
      localStorage.setItem('location', JSON.stringify(response.data.location))
    })
    .catch(() => {
      dispatch(authError('Wrong login'));
    });
  };
};

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};

export function signoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('location')
  return { type: UNAUTH_USER };
};

export function signupUser(firstName, lastName, email, password, address, locObj, file) {
  console.log('acton',file)
  return function(dispatch) {
    console.log('actondispatch',file)
    axios.post('/signup', { email, password, firstName, lastName, address, locObj, file })
    .then(response =>{
      dispatch({ type: AUTH_USER, payload: firstName + ' ' + lastName});
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', firstName + ' ' + lastName);
      localStorage.setItem('location', JSON.stringify(locObj))
      browserHistory.push('/');
    })
    .catch(error => dispatch(authError(error.response.data.error)));
  };
};

export function submitQueryAndType (query, type) {
  return {
    type: SEARCH_TERMS,
    payload: {
      query: query,
      type: type
    }
  }
};

export function searchEventbrite (query, location) {
  const EVENTBRITE_API_KEY = "4JELE3WKM2XRYPGWNE7Q";
  const EVENTBRITE_URL = `https://www.eventbriteapi.com/v3/events/search/?token=${ EVENTBRITE_API_KEY }`;
  return function(dispatch) {
    const url = `${ EVENTBRITE_URL }&q=${ query }&sort_by=best&location.address=${ location }`;
    const request = axios.get(url)
    .then(response => {
      dispatch({
        type: EVENTBRITE_RESULTS,
        payload: response.data.events
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
};

export function searchYelp (location, query) {
  const YELP_URL = '/api/search/restaurants';
  return function(dispatch) {
    const url = `${ YELP_URL }?location=${ location }&term=${ query }`;
    const request = axios.get(url)
    .then(response => {
      dispatch({
        type: YELP_RESULTS,
        payload: response.data.businesses
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
};

export function fetchRestaurant(id) {
  return function(dispatch) {
    axios.get(`/fetchRestaurant/${ id }`)
    .then(response => {
      dispatch({
        type: RESTAURANT,
        payload: response.data
       })
    })
    .catch((error) => {
      console.log(error);
    });
  }
};

export function addTask({ title, description, category, hours, volunteer, dollarvalue, image = '' }, location) {
  return function(dispatch) {
    const header = {
      headers: {
        authorization: localStorage.getItem('token')
      }
    };
    const task = {
      title,
      description,
      category,
      hours,
      volunteer,
      dollarvalue,
      location,
      image
    };
    axios.post('/api/addTask', task, header)
    .then(response =>{
      console.log("inside actions: ", response.data);
      dispatch({ type: ADD_TASK_TOP, payload: response.data.task });
    })
    .catch(error => console.log(error));
  };
}

export function getTasks(query) {
  return function(dispatch) {
    axios.get('/api/getTasks')
    .then(response =>{
      console.log(response.data);
      dispatch({ type: GET_TASKS, payload: response.data.reverse() });
    })
    .catch(error => console.log(error));
  };
}







