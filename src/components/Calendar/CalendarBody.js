import React from 'react';
import { withMomenter } from '../Momenter';

import {
  CalBodyContainer, WeekdayHeader, DatesFlex, DatesRow, WeekdaySlot,
  DaySlot, DaySpan, DayName, WeatherContainer, ShowTemp
} from './styled';

const CalendarBody = ({ momenter, weather }) => {

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
  let todayDate = momenter.todayDate();
  let conserveDate = momenter.conserveDate
  let checkDate = momenter.dateContext.format('YYYY MM');
  let currentMonth = true ? (conserveDate === checkDate) : false
  for (let d = 1; d <= momenter.daysInMonth(); d++) {
    let dIndex = d - todayDate
    daysInMonth.push(
      <DaySlot
        key={'Day' + d}
        onClick={(e) => { momenter.onSelectDay(e, d) }}
        selected={(d === todayDate)} today={((d === todayDate) && currentMonth)}
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