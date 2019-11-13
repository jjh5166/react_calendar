import React from 'react';
import { withMomenter } from '../Momenter';

function CalendarBody(props) {
  let weekdays = props.momenter.weekdaysShort.map((day) => {
    return (
        <td key={day} className='week-day'>{day}</td>
    )
  })
  let blanks = [];
  for (let i = 0; i < props.momenter.firstDayOfMonth(); i++) {
    blanks.push(<td key={i * 3120} className="emptySlot">
      {""}
    </td>)
  }

  let daysInMonth = [];
  for (let d = 1; d <= props.momenter.daysInMonth(); d++) {
    let className = (d === props.momenter.currentDate() ? "day current-day" : "day");
    daysInMonth.push(
      <td key={d * 100} className={className}>
        <span onClick={(e) => { this.onDayClick(e, d) }}>{d}</span>
      </td>
    )
  }

  var totalSlots = [...blanks, ...daysInMonth]
  let rows = [];
  let cells = [];

  totalSlots.forEach((slot, i) => {
    if ((i % 7) !== 0) {
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
      <tr key={i * 10000}>
        {d}
      </tr>
    )
  })

  return (
    <tbody>
      <tr>{weekdays}</tr>
      {calendarDates}
    </tbody>
  );
}

export default withMomenter(CalendarBody);