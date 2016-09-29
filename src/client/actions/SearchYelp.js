import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = '/search/restaurants';

export const SEARCH_YELP = 'SEARCH_YELP';

export function searchYelp (location) {
  return function(dispatch) {

    dispatch({
      type: SEARCH_YELP,
      payload: []
    });
    browserHistory.push('/search/restaurants');
    const url = `${ROOT_URL}?location=${location}&term=restaurant`;
    const request = axios.get(url)
    .then(response =>{
      dispatch({
        type: SEARCH_YELP,
        payload: response.data.businesses
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}