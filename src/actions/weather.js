export const GET_WEATHER = 'GET_WEATHER';
export const FETCH_ERROR = 'FETCH_ERROR';
export const GET_LOCATION = 'GET_LOCATION';

export const WEATHER_RESULT = 'WEATHER_RESULT';

export const getLocation = () => ({
  type: GET_LOCATION
});

export const getWeather = (coords) => ({
  type: GET_WEATHER,
  coords
});

export const fetchError = () => ({
  type: FETCH_ERROR
});
