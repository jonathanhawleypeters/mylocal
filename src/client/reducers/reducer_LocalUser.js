import { LOCAL_USER } from '../constants';

export default function(state = {}, action) {
  switch(action.type) {
    case LOCAL_USER:
      return action.payload;
  }

  return state;
}