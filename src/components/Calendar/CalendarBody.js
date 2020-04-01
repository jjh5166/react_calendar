import React from 'react';
import { connect } from 'react-redux';

import { withMomenter } from '../Momenter';

import {
  CalBodyContainer, WeekdayHeaderContainer, DatesFlex, DatesRow, WeekdaySlot,
  DaySlot, OffDaySlot, DaySpan, DayName, WeatherContainer, ShowTemp, DayAbbr
} from './styled';

const CalendarBody = (props) => {
  let { momenter, weather } = props
  let startBlanks = [];
  let endBlanks = [];
  let ldpm = momenter.lastDayPrevMonth();
  for (let i = 0; i < momenter.firstDayOfMonth(); i++) {
    startBlanks.push(<OffDaySlot key={"startBlank" + i} className="emptySlot">
      {ldpm - i}
    </OffDaySlot>)
  }
  for (let i = momenter.lastDayOfMonth(); i < 6; i++) {
    endBlanks.push(<OffDaySlot key={"endBlank" + i} className="emptySlot">
      {6-i}
    </OffDaySlot>)
  }

  let daysInMonth = [];
  let todayDate = momenter.todayDate();
  let conserveDate = momenter.conserveDate
  let currentDate = momenter.currentDate();
  let checkDate = momenter.dateContext.format('YYYY MM');
  let currentMonth = true ? (conserveDate === checkDate) : false
  let weatherList = currentMonth ? weather.list : null

  for (let d = 1; d <= momenter.daysInMonth(); d++) {
    let dIndex = d - todayDate
    daysInMonth.push(
      <DaySlot
        key={'Day' + d}
        onClick={(e) => { momenter.onSelectDay(e, d) }}
        selected={(d === currentDate)} today={((d === todayDate) && currentMonth)}
      >
        <DaySpan>{d}</DaySpan>
        {
          (0 <= (d - todayDate)) &&
          (dIndex <= 4) &&
          weatherList &&
          <WeatherReport daysWeather={weatherList[dIndex]} />
        }
      </DaySlot>
    )
  }

  let totalSlots = [...startBlanks.reverse(), ...daysInMonth, ...endBlanks.reverse()]
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
      <WeekdayHeader/>
      <DatesFlex>
        {calendarDates}
      </DatesFlex>
    </CalBodyContainer>
  );
}

const WeekdayHeaderBase = (props) => {
  let weekdays = props.momenter.weekdays.map((dayName) => {
    return (
      <WeekdaySlot key={dayName}>
        <DayName><DayAbbr title={dayName}>{`${dayName.slice(0, 3)}.`}</DayAbbr></DayName>
      </WeekdaySlot>
    )
  })
  return(
    <WeekdayHeaderContainer>
      {weekdays}
    </WeekdayHeaderContainer>
  )
}

const WeekdayHeader = withMomenter(WeekdayHeaderBase);

const WeatherReport = ({ daysWeather }) => {
  let iconType = daysWeather['weather'][0]['icon']
  return (
    <WeatherContainer>
      <img src={`http://openweathermap.org/img/w/${iconType}.png`} alt='Weather Icon' />
      <ShowTemp>{Math.round(daysWeather.main.temp)}°</ShowTemp>
    </WeatherContainer>
  )
}

const mapStateToProps = (state) => {
  const weather = state.weather;
  return {
    weather
  };
}

export default connect(mapStateToProps)(withMomenter(CalendarBody));