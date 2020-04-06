import { combineReducers } from 'redux';

import theme from './theme';
import weather from './weather';
import onThisDay from './onThisDay';
import locale from './locale';


export default combineReducers({
  theme,
  weather,
  onThisDay,
  locale
})