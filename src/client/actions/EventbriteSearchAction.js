import axios from 'axios';

const API_KEY = "NC2JZXIIIFTJNADNE6X6";
const ROOT_URL = `https://www.eventbriteapi.com/v3/events/search/?token=${API_KEY}`;

export const Search_Eventbrite = 'Search_Eventbrite';

export function searchEventbrite (query/*, location*/) {
  const url = `${ROOT_URL}&q=${query}`;
  const request = axios.get(url);

  console.log('Request: ', request);

  return {
    type: Search_Eventbrite,
    payload: request
  };
}