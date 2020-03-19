import { combineReducers } from 'redux';

import weather from './weather';
import onThisDay from './onThisDay';

export default combineReducers({
  weather,
  onThisDay
})