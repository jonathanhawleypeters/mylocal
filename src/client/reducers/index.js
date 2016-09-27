import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({

  form // can just write as form - ES6
});

export default rootReducer;