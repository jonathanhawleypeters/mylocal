import { Search_Eventbrite } from '../actions/EventbriteSearchAction'

export default function(state = [], action) {
  switch(action.type) {
    case Search_Eventbrite:
      return [ action.payload.data ];
  }
  return state;
}