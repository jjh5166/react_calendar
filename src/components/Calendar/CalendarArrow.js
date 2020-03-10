import React from 'react';

import { withMomenter } from '../Momenter';
import { MonthArrow } from './styled';

function CalendarArrow(props) {
  switch (props.state) {
    case 'left':
      return (
        <MonthArrow state={props.state} >
          <i className="fa fa-chevron-left" aria-hidden="true"
            onClick={(e) => { props.momenter.prevMonth() }}></i>
        </MonthArrow >
      )
    case 'right':
      return (
        <MonthArrow state={props.state} >
          <i className="fa fa-chevron-right" aria-hidden="true"
            onClick={(e) => props.momenter.nextMonth()}></i>
        </MonthArrow>
      )
    default:
      return null
  }
}

export default withMomenter(CalendarArrow);