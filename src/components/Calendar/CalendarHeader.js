import React from 'react'

import MonthNav from '../MonthNav'
import CalendarArrow from './CalendarArrow'
import YearNav from '../YearNav'

import {
  HeaderContainer,
  MonthYearContainer,
  FlexCenter,
  FlexSpacer,
} from './styled'

function CalendarHeader() {
  return (
    <HeaderContainer>
      <CalendarArrow direction='left' />
      <MonthYearContainer>
        <FlexCenter>
          <MonthNav />
          <FlexSpacer />
          <YearNav />
        </FlexCenter>
      </MonthYearContainer>
      <CalendarArrow direction='right' />
    </HeaderContainer>
  )
}

export default CalendarHeader
