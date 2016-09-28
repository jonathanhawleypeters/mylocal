import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
<<<<<<< 1f0e1b2bb199d68bd3cdc43c2205cb9144ffdc01
import authReducer from './auth_reducer';

const rootReducer = combineReducers({

  form: form, // can just write as form - ES6
  auth: authReducer
=======
import EventbriteReducer from './EventbriteReducer';

const rootReducer = combineReducers({
  Eventbrite: EventbriteReducer,
  form // can just write as form - ES6
>>>>>>> Add Eventbrite searchbar, query, action and reducer
});

export default rootReducer;