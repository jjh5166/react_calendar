import React, { Component } from 'react';
import Div100vh from 'react-div-100vh';
import styled from 'styled-components';
import Calendar from '../Calendar'

class App extends Component {
  render() {
    return (
      <Div100vh>
        <Calendar />
      </Div100vh>
    )
  }
}

export default App;
