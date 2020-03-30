import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Momenter, { MomenterContext } from '../Momenter';
import { getOnThisDay } from '../../actions/onThisDay';
import { gotCoords } from '../../actions/locale';
import { getWeather } from '../../actions/weather';

import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import DayShow from '../DayShow';
import Locale from '../Locale'
import { CalendarContainer, OptionalWrapper, DayContainer } from './styled';

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
    this.props.dispatch(gotCoords(
      {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }
    ));
  }
  locFail = () => {
    this.props.dispatch(gotCoords(DEFAULT_COORDS));
  }
  updateDateContext = (dateContext) => {
    this.setState({ dateContext })
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.locSuccess, this.locFail);
    this.props.dispatch(getOnThisDay(this.state.dateContext.format('M[/]D')));
  }
  componentDidUpdate() {
    this.props.dispatch(getOnThisDay(this.state.dateContext.format('M[/]D')));
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
          <DayContainer>
            <Locale />
            <DayShow />
          </DayContainer>
          
        </CalendarContainer>
      </MomenterContext.Provider>
    );
  }
}

export default connect()(Calendar);