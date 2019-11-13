import React from "react";
import { withMomenter } from '../Momenter';

function CalendarArrow(props) {
  switch (props.state) {
    case 'left':
      return (
        < td className="nav-month" >
          <i className="fa fa-chevron-left" aria-hidden="true"
            onClick={(e) => {props.momenter.prevMonth()}}></i>
        </td >
      )
    case 'right':
      return (
        <td className="nav-month">
          <i className="fa fa-chevron-right" aria-hidden="true"
            onClick={(e) =>  props.momenter.nextMonth()}></i>
        </td>
      )
    default:
      return null
  }
}

export default withMomenter(CalendarArrow);