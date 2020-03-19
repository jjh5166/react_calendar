import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Momenter, { MomenterContext } from '../Momenter';
import { getWeather } from '../../actions/weather';
import { getOnToday } from '../../actions/onThisDay'

import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import DayShow from '../DayShow';
import { CalendarContainer, OptionalWrapper } from './styled';

const DEFAULT_COORDS = {
  lat: 51.5073,
  lon: -0.1277
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
    };
  }
  locSuccess = (position) => {
    this.props.dispatch(getWeather(
      {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }
    ));
  }
  locFail = () => {
    this.props.dispatch(getWeather(DEFAULT_COORDS));
  }
  updateDateContext = (dateContext) => {
    this.setState({ dateContext })
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.locSuccess, this.locFail);
    this.props.dispatch(getOnToday());
  }
  render() {
    return (
      <MomenterContext.Provider
        value={new Momenter(this.state.dateContext,
          this.updateDateContext)}
      >
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

export default connect()(Calendar);