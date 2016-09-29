import { SEARCH_TERM } from '../actions/searchActions'

export default function(state = {}, action) {
    // update existing state
  switch(action.type){

    case SEARCH_TERM:
      return action.payload //object
  }
  return state;
}