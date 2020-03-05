import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Momenter, { MomenterContext } from '../Momenter'
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
    };
  }

  updateDateContext = (dateContext) => {
    this.setState({ dateContext })
  }

  render() {
    return (
      <MomenterContext.Provider value={new Momenter(this.state.dateContext, this.updateDateContext)}>
        <CalendarContainer>
          <CalendarHeader />
          <CalendarBody />
        </CalendarContainer>
      </MomenterContext.Provider>
    );
  }
}

const CalendarContainer = styled.div`
  height:100%;
  width: 100%;`