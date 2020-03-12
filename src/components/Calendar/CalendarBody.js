import React from 'react';
import axios from 'axios';
import { withMomenter } from '../Momenter';

import {
  CalBodyContainer, WeekdayHeader, DatesFlex, DatesRow, WeekdaySlot,
  DaySlot, DaySpan, DayName, WeatherContainer, ShowTemp
} from './styled';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const PATH_BASE = 'https://api.openweathermap.org/data/2.5/forecast';
const DEFAULT_COORDS = {
  lat: 51.5073,
  lon: -0.1277
}
const TEMP_TYPE = 'imperial'

class CalendarBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      coords: DEFAULT_COORDS,
      city: null,
      error: null
    };
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
    for(let i=0; i < list.length; i++){
      let time = list[i]["dt_txt"];
      if(i===0){
        gotWeather.push(time.match(dateEx)[0])
      }
      if (noonEx.test(time) && !gotWeather.includes(time.match(dateEx)[0])){
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
    let {
      momenter
    } = this.props;
    let weekdays = momenter.weekdays.map((dayName) => {
      return (
        <WeekdaySlot key={dayName}>
          <DayName>{dayName}</DayName>
        </WeekdaySlot>
      )
    })
    let startBlanks = [];
    let endBlanks = [];
    for (let i = 0; i < momenter.firstDayOfMonth(); i++) {
      startBlanks.push(<DaySlot key={"startBlank" + i} className="emptySlot">
        {""}
      </DaySlot>)
    }
    for (let i = momenter.lastDayOfMonth(); i < 6; i++) {
      endBlanks.push(<DaySlot key={"endBlank" + i} className="emptySlot">
        {""}
      </DaySlot>)
    }

    let daysInMonth = [];
    let currentDate = momenter.currentDate();
    let todayDate = momenter.todayDate();
    let { weather } = this.state;
    for (let d = 1; d <= momenter.daysInMonth(); d++) {
      let dIndex = d - todayDate
      daysInMonth.push(
        <DaySlot
          key={'Day' + d} selected={(d === currentDate)}
          onClick={(e) => { momenter.onSelectDay(e, d) }}
        >
          <DaySpan>{d}</DaySpan>
          {
            (0 <= (d - todayDate)) &&
            (dIndex <= 4) &&
            weather &&
            <WeatherReport daysWeather={weather[dIndex]} />
          }
        </DaySlot>
      )
    }

    let totalSlots = [...startBlanks, ...daysInMonth, ...endBlanks]
    let rows = [];
    let cells = [];

    totalSlots.forEach((slot, i) => {
      if (i === 0 || (i % 7) !== 0) {
        cells.push(slot);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(slot);
      }
      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow)
      }
    })

    let calendarDates = rows.map((d, i) => {
      return (
        <DatesRow key={'Row' + i}>
          {d}
        </DatesRow>
      )
    })
    return (
      <CalBodyContainer>
        <WeekdayHeader>{weekdays}</WeekdayHeader>
        <DatesFlex>
          {calendarDates}
        </DatesFlex>
      </CalBodyContainer>
    );
  }
}

const WeatherReport = ({ daysWeather }) => {
  let iconType = daysWeather['weather'][0]['icon']
  return (
    <WeatherContainer>
      <img src={`http://openweathermap.org/img/w/${iconType}.png`} alt='Weather Icon' />
      <ShowTemp>{Math.round(daysWeather.main.temp)}°</ShowTemp>
    </WeatherContainer>
  )
}
export default withMomenter(CalendarBody);