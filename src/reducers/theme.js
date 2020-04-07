import { CHANGE_THEME } from '../actions/theme';
import { cheerUpTheme } from '../components/Themes';

const initialState = {
  ...cheerUpTheme
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
      }
    default:
      return state;
  }
}