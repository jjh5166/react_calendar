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
        < MonthNav />
        {" "}
        < YearNav />
      </MonthYearContainer>
      
      <CalendarArrow state="right" />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed skyblue;
  font-size: 3.6em;
  `
const MonthYearContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 27%;
  `

export default CalendarHeader;