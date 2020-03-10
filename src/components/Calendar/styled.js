import styled from 'styled-components';

// CalendarHeader
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 3.6em;
  height: 60px;
  `
export const MonthYearContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 27%;
  flex-grow: 1;
  justify-content: center;
  `
export const FlexCenter = styled.div`
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
export const FlexSpacer = styled.div`
  @media only screen and (min-width: 824px) and (orientation: landscape){
    width: 35px;
  }
`
// CalendarBody
export const CalContainer = styled.div`
  background-color: black;
  padding-bottom: 1px;
`
export const CalRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7,1fr);
`
export const WeekdayHeader = styled(CalRow)`
  position: relative;
  height: 24px;
  outline: solid green 2px;
  z-index: 2;
`
export const DatesRow = styled(CalRow)`
  height: 60px;
  margin-bottom: 1px;
  grid-gap: 1px;
  @media only screen and (min-width: 824px) and (orientation: landscape){
    height: 90px;
  }
`
export const CalSlot = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  background-clip: border-box;
`
export const WeekdaySlot = styled(CalSlot)`
  text-align: center;
`
export const DaySlot = styled(CalSlot)`
  position: relative;
  cursor: pointer;
  background-color: ${props => props.selected ? "grey" : "white"};
`
export const DaySpan = styled.span`
  margin-left: 5%;
  font-family: 'Raleway', sans-serif;
`
export const DayName = styled.span`
  height: 100%;
  display: inline-flex;
  align-items: center;
`
export const WeatherContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  img{
    display: block;
    max-width: 70px;
    max-height: 38px;
    width: auto;
    height: auto;
    margin: 0 auto;
  }
  @media only screen and (min-width: 660px) and (orientation: landscape){
      
  }
  @media only screen and (min-width: 824px) and (orientation: landscape){
    top: 0;
    right: 0;
    width: auto;
    bottom: unset;
  }
`
export const ShowTemp = styled.div`
  display: none;
  @media only screen and (min-width: 824px) and (orientation: landscape){
    display: block;
    text-align: center;
    margin-top: -7px;
  }
`