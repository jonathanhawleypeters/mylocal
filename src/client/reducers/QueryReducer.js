import { SEARCH_TERMS } from '../actions/searchActions'

export default function(state = {}, action) {
    // update existing state
  console.log('Q1', action.type);
  switch(action.type){

    case SEARCH_TERMS:
      console.log('Q2', action.payload);
      return action.payload //object
  }
  return state;
}