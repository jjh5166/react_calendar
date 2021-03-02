import React from 'react'

import { withMomenter } from '../Momenter'
import { MonthArrow } from './styled'

const CalendarArrow = (props) => {
  const { direction, momenter } = props
  return (
    <MonthArrow
      direction={direction}
      onClick={(e) => {
        direction === 'left' ? momenter.prevMonth() : momenter.nextMonth()
      }}
    >
      <i className={`fa fa-chevron-${direction}`} aria-hidden='true'></i>
    </MonthArrow>
  )
}
export default withMomenter(CalendarArrow)
