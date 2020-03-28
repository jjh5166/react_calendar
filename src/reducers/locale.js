import { GOT_COORDS, FIND_LOCALE, LOCALE_RESULT, LOCALE_ERROR } from '../actions/locale';

const initialState = {
  data: {},
  isLoading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_COORDS:
      return {
        ...state,
        coords: action.coords,
      }
    case FIND_LOCALE:
      return {
        ...state,
        isLoading: true,
      }
    case LOCALE_RESULT:
      return {
        ...state,
        data: action.response.data.address
      }
    case LOCALE_ERROR:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default reducer;