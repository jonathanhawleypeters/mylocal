import axios from 'axios';
import { browserHistory } from 'react-router';

const API_KEY = "4JELE3WKM2XRYPGWNE7Q";
const ROOT_URL = `https://www.eventbriteapi.com/v3/events/search/?token=${API_KEY}`;

export const SEARCH_EVENTBRITE = 'Search_Eventbrite';

export function searchEventbrite (query/*, location*/) {
  return function(dispatch) {

    dispatch({
      type: SEARCH_EVENTBRITE,
      payload: []
    });
    browserHistory.push('/eventSearch');
    const url = `${ROOT_URL}&q=${query}`;
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