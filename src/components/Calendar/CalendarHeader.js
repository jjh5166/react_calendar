import React from "react";
import MonthNav from '../MonthNav'
import CalendarArrow from './CalendarArrow'
import YearNav from "../YearNav";

function CalendarHeader() {
  return (
    <thead>
      <tr className="calendar-header">
        <CalendarArrow state="left" />
        <td colSpan="5">
          < MonthNav />
          {" "}
          < YearNav />
        </td>
          <CalendarArrow state="right" />
      </tr>
    </thead>
  )
}

export default CalendarHeader;