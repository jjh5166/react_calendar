export const GET_WEATHER = 'GET_WEATHER';
export const WEATHER_RESULT = 'WEATHER_RESULT';
export const WEATHER_ERROR = 'WEATHER_ERROR';

export const getWeather = (coords) => ({
  type: GET_WEATHER,
  coords
});

export const weatherError = () => ({
  type: WEATHER_ERROR
});
