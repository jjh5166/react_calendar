import React from 'react';
import moment from 'moment';

import Momenter, { MomenterContext } from '../Momenter'
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import DayShow from '../DayShow';
import { CalendarContainer, OptionalWrapper } from './styled';

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
          <OptionalWrapper>
            <CalendarHeader />
            <CalendarBody />
          </OptionalWrapper>
          <DayShow />
        </CalendarContainer>
      </MomenterContext.Provider>
    );
  }
}