import { GET_ONTHISDAY, ONTHISDAY_RESULT, ONTHISDAY_ERROR } from '../actions/onThisDay';

const initialState = {
  data: {},
  error: null
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
const parseEvents = (events) => {
  let indexi = randomIndexes(events.length - 1)
  let selectedEvents = []
  indexi.forEach(ev => selectedEvents.push(events[ev]))
  return selectedEvents
}
const setOnThisDay = (state, action) => {
  let dateData = {
    isFetching: true,
    events: []
  };
  return {
    ...state.data,
    [`${action.date}`]: dateData
  }
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ONTHISDAY:
      return {
        ...state,
        data: setOnThisDay(state, action)
      }
    case ONTHISDAY_RESULT:
      return {
        ...state,
        data: {
          ...state.data,
          [`${action.date}`]: {
            isFetching: false,
            events: parseEvents(action.response.data.data.Events)
          }
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