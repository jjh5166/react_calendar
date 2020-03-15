import React from 'react';
import Div100vh from 'react-div-100vh';
import { geolocated } from 'react-geolocated';

import Calendar from '../Calendar'
import { GeoContext } from '../GeoLoc'

const App = (props) => {
  return (
    <GeoContext.Provider value={props.coords}>
      <Div100vh>
        <Calendar />
      </Div100vh>
    </GeoContext.Provider>
  )
}
const AppWithGeoloc = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);

export default AppWithGeoloc;
