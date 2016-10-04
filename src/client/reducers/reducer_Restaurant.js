import { RESTAURANT } from '../constants';

export default function(state = {}, action) {
  switch(action.type) {
    case RESTAURANT:
      return action.payload;
  }
  return state;
}