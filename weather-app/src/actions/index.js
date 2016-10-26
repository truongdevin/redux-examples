import axios from 'axios';

const API_KEY = 'ede1d53d519853160e3890255f2e85c0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // redux-promise makes the return statement wait until the request is ready,
  // then it replaces the payload with the unwrapped promise before sending to reducer.
  return {
    type: FETCH_WEATHER,
    payload: request
  };

}
