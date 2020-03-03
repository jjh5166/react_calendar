import React from "react";
import styled from 'styled-components';
import MonthNav from '../MonthNav'
import CalendarArrow from './CalendarArrow'
import YearNav from "../YearNav";

function CalendarHeader() {
  return (
    <HeaderContainer>
      <CalendarArrow state="left" />
      <MonthYearContainer>
        <FlexCenter>
          <MonthNav />
          <FlexSpacer/>
          <YearNav />
        </FlexCenter>
      </MonthYearContainer>
      <CalendarArrow state="right" />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 3.6em;
  height: 60px;
  `
const MonthYearContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 27%;
  flex-grow: 1;
  justify-content: center;
  `
const FlexCenter = styled.div`
  width:90%;
  display: inline-flex;
  justify-content: space-between;
  @media only screen and (min-width: 580px) and (orientation: landscape){
    justify-content: space-around;
  }
  @media only screen and (min-width: 824px) and (orientation: landscape){
    justify-content: center;
  }
`
const FlexSpacer = styled.div`
  @media only screen and (min-width: 824px) and (orientation: landscape){
    width: 35px;
  }
`

export default CalendarHeader;