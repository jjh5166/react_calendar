export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_ERROR = 'FETCH_ERROR';
export const GET_LOCATION = 'GET_LOCATION';

export const WEATHER_RESULT = 'WEATHER_RESULT';

export const getLocation = () => ({
  type: GET_LOCATION
})
export const fetchWeather = () => ({
  type: FETCH_WEATHER
});

export const fetchError = () => ({
  type: FETCH_ERROR
});
