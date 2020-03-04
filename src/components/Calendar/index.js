import React from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import Momenter, { MomenterContext } from '../Momenter'
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const PATH_BASE = 'https://api.openweathermap.org/data/2.5/forecast';
const DEFAULT_COORDS = {
  lat: 51.5073,
  lon: -0.1277
}
const TEMP_TYPE = 'imperial'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
      weather: null,
      coords: DEFAULT_COORDS,
      error: null
    };
  }

  updateDateContext = (dateContext) => {
    this.setState({ dateContext })
  }
  setWeather(weather) {
    this.setState({ weather });
  }
  componentDidMount() {
    const { coords } = this.state;
    axios.get(`${PATH_BASE}?lat=${coords.lat}&lon=${coords.lon}&units=${TEMP_TYPE}&appid=${WEATHER_API_KEY}`)
      .then(result => { this.setWeather(result) })
      .catch((error) => { this.setState({ error }) })
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