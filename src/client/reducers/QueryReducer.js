import { SEARCH_TERMS } from '../actions/searchActions'

export default function(state = {}, action) {
    // update existing state
  switch(action.type){

    case SEARCH_TERMS:
      return action.payload //object
  }
  return state;
}