import React from 'react';
import { Provider } from 'react-redux';
import Div100vh from 'react-div-100vh';
import { geolocated } from 'react-geolocated';

import Calendar from '../Calendar'
import { GeoContext } from '../GeoLoc'
import store from '../../config/store';

const App = (props) => {
  return (
    <Provider store={store} >
      <GeoContext.Provider value={props.coords}>
        <Div100vh>
          <Calendar />
        </Div100vh>
      </GeoContext.Provider>
    </Provider>
  )
}
const AppWithGeoloc = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);

export default AppWithGeoloc;
