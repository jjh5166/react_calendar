import React from 'react';
import axios from 'axios';
import moment from 'moment';

import Momenter, { MomenterContext } from '../Momenter';
import { withGeo } from '../GeoLoc'
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import DayShow from '../DayShow';
import { CalendarContainer, OptionalWrapper } from './styled';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const PATH_BASE = 'https://api.openweathermap.org/data/2.5/forecast';
const DEFAULT_COORDS = {
  lat: 51.5073,
  lon: -0.1277
}
const TEMP_TYPE = 'imperial'

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
      weather: null,
      coords: DEFAULT_COORDS,
      city: null,
      error: null
    };
  }
  updateDateContext = (dateContext) => {
    this.setState({ dateContext })
  }
  handleWeatherResult(result) {
    this.setState({
      city: result['data']['city'],
      weather: this.parseWeather(result['data']['list'])
    });
  }
  parseWeather(list) {
    const dateEx = /\d{1,2}(?=[ ])/
    const noonEx = /12:/
    let parsedWeather = [list[0]]
    let gotWeather = []
    for (let i = 0; i < list.length; i++) {
      let time = list[i]["dt_txt"];
      if (i === 0) {
        gotWeather.push(time.match(dateEx)[0])
      }
      if (noonEx.test(time) && !gotWeather.includes(time.match(dateEx)[0])) {
        parsedWeather.push(list[i])
      }
    }
    return parsedWeather
  }
  componentDidMount() {
    const { coords } = this.state;
    axios.get(`${PATH_BASE}?lat=${coords.lat}&lon=${coords.lon}&units=${TEMP_TYPE}&appid=${WEATHER_API_KEY}`)
      .then(result => { this.handleWeatherResult(result) })
      .catch((error) => { this.setState({ error }) })
  }
  render() {
    return (
      <MomenterContext.Provider value={new Momenter(this.state.dateContext, this.updateDateContext)}>
        <CalendarContainer>
          <OptionalWrapper>
            <CalendarHeader />
            <CalendarBody weather={this.state.weather}/>
          </OptionalWrapper>
          <DayShow />
        </CalendarContainer>
      </MomenterContext.Provider>
    );
  }
}

export default withGeo(Calendar);