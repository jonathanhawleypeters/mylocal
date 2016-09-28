import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import EventbriteReducer from './EventbriteReducer';

const rootReducer = combineReducers({

  Eventbrite: EventbriteReducer,
  form: form, // can just write as form - ES6
  auth: authReducer
});

export default rootReducer;