import { combineReducers } from 'redux';

import weather from './weather';
import onThisDay from './onThisDay';
import locale from './locale';

export default combineReducers({
  weather,
  onThisDay,
  locale
})