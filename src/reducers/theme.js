import { CHANGE_THEME } from '../actions/theme';
import { themes } from '../constants';

const initialState = {
  ...themes.$CheerUp
}
const setTheme = theme => {
  return { ...themes[theme]}
}
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...setTheme(action.theme),
      }
    default:
      return state;
  }
}