import React from 'react';
import { Provider } from 'react-redux';
import Div100vh from 'react-div-100vh';

import Calendar from '../Calendar'
import store from '../../config/store';

export default () => (
  <Provider store={store} >
    <Div100vh>
      <Calendar />
    </Div100vh>
  </Provider>
)
