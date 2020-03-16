import { FETCH_WEATHER, FETCH_ERROR, WEATHER_RESULT } from '../actions/weather';

const initialState = {
  weather: {},
}
const setWeather = (state, action) => {
  let weather = {
    isFetching: true,
    city: {},
    list: []
  };
  return {
    ...state.weather
  }
}
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_WEATHER:
      return {
        ...state,
        weather: setWeather(state, action)
      }
    case WEATHER_RESULT:
      return {
        ...state,
        weather: {
          ...action.result,
        }
      }
    case FETCH_ERROR:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default reducer;