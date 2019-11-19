import React, { Component } from 'react';
import styled from 'styled-components';
import Calendar from '../Calendar'

class App extends Component {
  render() {
    return (
      <AppDiv>
        <Calendar />
      </AppDiv>
    )
    }
}

const AppDiv = styled.div`
  height:100%;
  width:100%;
  `
export default App;
