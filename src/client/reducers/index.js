import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import EventbriteReducer from './EventbriteReducer';
import SearchYelp from './SearchYelp'
import SearchTerms from './QueryReducer'

const rootReducer = combineReducers({

  Eventbrite: EventbriteReducer,
  YelpResults: SearchYelp,
  form: form, // can just write as form - ES6
  auth: authReducer,
  SearchTerms: SearchTerms
});

export default rootReducer;