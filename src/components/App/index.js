import React, { Component } from 'react';
import Div100vh from 'react-div-100vh';
import { geolocated } from 'react-geolocated';

import Calendar from '../Calendar'
import { GeoContext } from '../GeoLoc'

class App extends Component {
  render() {
    return (
      <GeoContext.Provider value={this.props.coords}>
        <Div100vh>
          <Calendar />
        </Div100vh>
      </GeoContext.Provider>
    )
  }
}
const AppWithGeoloc = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);

export default AppWithGeoloc;
