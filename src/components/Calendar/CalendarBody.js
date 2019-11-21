import React from 'react';
import styled from 'styled-components';
import { withMomenter } from '../Momenter';

function CalendarBody(props) {
  let weekdays = props.momenter.weekdays.map((dayName) => {
    return (
        <WeekdaySlot key={dayName}>
        <DayName>{dayName}</DayName>
        </WeekdaySlot>
    )
  })
  let startBlanks = [];
  let endBlanks = [];
  for (let i = 0; i < props.momenter.firstDayOfMonth(); i++) {
    startBlanks.push(<DaySlot key={"startBlank"+i} className="emptySlot">
      {""}
    </DaySlot>)
  }
  for (let i = props.momenter.lastDayOfMonth(); i < 6; i++) {
    endBlanks.push(<DaySlot key={"endBlank"+i} className="emptySlot">
      {""}
    </DaySlot>)
  }

  let daysInMonth = [];
  for (let d = 1; d <= props.momenter.daysInMonth(); d++) {
    let className = (d === props.momenter.currentDate() ? "day current-day" : "day");
    daysInMonth.push(
      <DaySlot key={'Day' + d} className={className}>
        <DaySpan onClick={(e) => { this.onDayClick(e, d) }}>{d}</DaySpan>
      </DaySlot>
    )
  }

  var totalSlots = [...startBlanks, ...daysInMonth, ...endBlanks]
  let rows = [];
  let cells = [];

  totalSlots.forEach((slot, i) => {
    if ( i === 0 || (i % 7) !== 0) {
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
      <DatesRow key={'Row'+i}>
        {d}
      </DatesRow>
    )
  })

  return (
    <CalContainer>
    <WeekdayHeader>{weekdays}</WeekdayHeader>
    {calendarDates}
    </CalContainer>
  );
}

const CalContainer = styled.div`
background-color: black;
padding-bottom: 1px;
`
const CalRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7,1fr);
  
`
const WeekdayHeader = styled(CalRow)`
  height: 24px;
  outline: solid green 2px;
`
const DatesRow = styled(CalRow)`
  height: 90px;
  margin-bottom: 1px;
  grid-gap: 1px;
`
const CalSlot = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  background-clip: border-box;
`
const WeekdaySlot = styled(CalSlot)`
  text-align: center;
`
const DaySlot = styled(CalSlot)`
`
const DaySpan = styled.span`
margin-left: 5%;
`
const DayName = styled.span`
  height: 100%;
  display: inline-flex;
  align-items: center;
`
export default withMomenter(CalendarBody);