import axios from 'axios';
import { browserHistory } from 'react-router';

const API_KEY = "4JELE3WKM2XRYPGWNE7Q";
const ROOT_URL = `https://www.eventbriteapi.com/v3/events/search/?token=${API_KEY}`;

export const SEARCH_EVENTBRITE = 'Search_Eventbrite';

export function searchEventbrite (query, location) {
  return function(dispatch) {
console.log('im in eventbrite action!!!', location);
    dispatch({
      type: SEARCH_EVENTBRITE,
      payload: []
    });
    browserHistory.push('/search/events');
    const url = `${ROOT_URL}&q=${query}&location.address=${location}`;
    const request = axios.get(url)
    .then(response =>{
      console.log('im in action', response);
      dispatch({
        type: SEARCH_EVENTBRITE,
        payload: response.data.events
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}
    // return {
    //   type: SEARCH_EVENTBRITE,
    //   payload: request
    // };