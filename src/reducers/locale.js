import { FIND_LOCALE, LOCALE_RESULT, LOCALE_ERROR } from '../actions/locale';

const initialState = {
  data: {},
  isLoading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_LOCALE:
      return {
        ...state,
        isFetching: true,
      }
    case LOCALE_RESULT:
      return {
        ...state,
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