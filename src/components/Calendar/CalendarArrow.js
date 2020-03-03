import React from "react";
import styled from 'styled-components';
import { withMomenter } from '../Momenter';

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
const MonthArrow = styled.div`
  cursor: pointer;
  ${props => (props.state === 'left' ? `margin-left: 1%` : `margin-right: 1%`)};
`
export default withMomenter(CalendarArrow);