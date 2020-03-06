import styled from 'styled-components';

export const CalContainer = styled.div`
  background-color: black;
  padding-bottom: 1px;
`
export const CalRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7,1fr);
`
export const WeekdayHeader = styled(CalRow)`
  height: 24px;
  outline: solid green 2px;
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
  width: 20px;
  height: 20px;
  background-color: seagreen;
`