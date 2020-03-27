import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios'
import { GET_WEATHER, FETCH_ERROR, WEATHER_RESULT } from '../actions/weather';
import { GET_ONTHISDAY, ONTHISDAY_RESULT } from '../actions/onThisDay';
import { FIND_LOCALE, LOCALE_RESULT, LOCALE_ERROR } from '../actions/locale';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const PATH_BASE = 'https://api.openweathermap.org/data/2.5/forecast';
const TEMP_TYPE = 'imperial'

const getWeather = (coords) => fetch(`${PATH_BASE}?lat=${coords.lat}&lon=${coords.lon}&units=${TEMP_TYPE}&appid=${WEATHER_API_KEY}`)
const getOnThisDay = (date) => axios.get(`${process.env.REACT_APP_CORS_PROXY}http://history.muffinlabs.com/date/${date}`) //http://history.muffinlabs.com/date/2/14
const getLocale = (coords) => axios.get(`https://us1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_KEY}&lat=${coords.lat}&lon=${coords.lon}&format=json`)

function* fetchWeather(action) {
  try {
    const response = yield call(getWeather,action.coords);
    const result = yield response.json();
    if (result.error) {
      yield put({ type: FETCH_ERROR, error: result.error })
    } else {
      yield put({ type: WEATHER_RESULT, result })
    }
  } catch (e) {
    yield put({ type: FETCH_ERROR, error: e.message })
  }
}
function* fetchOnThisToday(action) {
  try{
    const response = yield call(getOnThisDay, action.date);
    yield put({ type: ONTHISDAY_RESULT, date: action.date, response })
  }catch(e){
    yield put({ type: FETCH_ERROR, error: e.message })
  }
}
function* fetchLocale(action) {
  try{
    const response = yield call(getLocale, action.coords);
    yield put({ type: LOCALE_RESULT, response })
  }catch(e){
    yield put({ type: LOCALE_ERROR, error: e.message })
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_WEATHER, fetchWeather);
  yield takeEvery(FIND_LOCALE, fetchLocale);
  yield takeEvery(GET_ONTHISDAY, fetchOnThisToday);
}