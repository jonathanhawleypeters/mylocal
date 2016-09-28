import { SEARCH_EVENTBRITE } from '../actions/EventbriteSearchAction'

export default function(state = [], action) {

  switch(action.type) {

    case SEARCH_EVENTBRITE:
    console.log('im in reducer', action);
      return [ action.payload ];
  }

  return state;
}