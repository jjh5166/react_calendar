import { GET_ONTODAY, GET_ONTHATDAY, ONTHISDAY_RESULT, ONTHISDAY_ERROR } from '../actions/onThisDay';

const initialState = {
  onThisDay: {
    data: {},
    error: null
  }
}
const randomIndexes = (max) => {
  let randos = [];
  for (var i = 0; randos.length < 5; i++) {
    let ayn = Math.floor(Math.random() * (max + 1))
    if (!randos.includes(ayn)) {
      randos.push(ayn)
    }
  }
  return randos
}
const setOnThisDay = (events) => {
  let indexi = randomIndexes(events.length)
  let selectedEvents = []
  indexi.forEach(ev => selectedEvents.push(events[ev]))
  return selectedEvents
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ONTODAY:
      return {
        ...state,
      }
    case GET_ONTHATDAY:
      return {
        ...state,
      }
    case ONTHISDAY_RESULT:
      return {
        ...state,
        onThisDay: {
          data: setOnThisDay(action.response.data.data.Events)
        }
      }
    case ONTHISDAY_ERROR:
      return {
        ...state,
      }
    default:
      return state;
  }
}