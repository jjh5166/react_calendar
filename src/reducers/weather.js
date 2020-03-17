import { GET_WEATHER, FETCH_ERROR, WEATHER_RESULT } from '../actions/weather';

const initialState = {
  weather: {},
}
const setWeather = (result) => {
  let parsed = {
    city: result['city'],
    list: parseWeather(result['list']),
  }
  return parsed
}
const parseWeather= (list) => {
  const dateEx = /\d{1,2}(?=[ ])/
  const noonEx = /12:/
  let parsedWeather = [list[0]]
  let gotWeather = []
  for (let i = 0; i < list.length; i++) {
    let time = list[i]["dt_txt"];
    if (i === 0) {
      gotWeather.push(time.match(dateEx)[0])
    }
    if (noonEx.test(time) && !gotWeather.includes(time.match(dateEx)[0])) {
      parsedWeather.push(list[i])
    }
  }
  return parsedWeather
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        coords: action.coords,
      }
    case WEATHER_RESULT:
      return {
        ...state,
        weather: setWeather(action.result),
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