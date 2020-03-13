import styled from 'styled-components';
import { device } from '../../constants';

// CalendarHeader
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 3.6em;
  height: 60px;
  outline: solid black 1px;
  overflow: hidden;
  @media ${device.landscapeMobile} {
    height: unset;
  }
  @media ${device.laptop} {
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
  }
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
  @media ${device.landscapeMobile} {
    justify-content: space-around;
  }
  @media ${device.laptop} {
    justify-content: center;
  }
`
export const FlexSpacer = styled.div`
  @media ${device.laptop} {
    width: 35px;
  }
`
// CalendarBody
export const CalBodyContainer = styled.div`
  background-color: black;
  padding: 1px;
  height: 350px;
  max-width: 100%;
  display: grid;
  grid-template-rows: 24px 1fr;
  @media ${device.landscapeMobile} {
    height: unset;
  }
  @media ${device.laptop} {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
  }
`
export const CalRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7,1fr);
`
export const WeekdayHeader = styled(CalRow)`
  position: relative;
  height: 24px;
  outline: solid green 2px;
  outline-offset: -1px;
  z-index: 2;
`
export const DatesFlex = styled.div`
  display: flex;
  flex-direction: column;
`
export const DatesRow = styled(CalRow)`
  margin-bottom: 1px;
  grid-gap: 1px;
  flex: 1;
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
  @media ${device.laptop} {
    top: 0;
    right: 0;
    width: auto;
    bottom: unset;
  }
`
export const ShowTemp = styled.div`
  display: none;
  @media ${device.laptop} {
    display: block;
    text-align: center;
    margin-top: -7px;
  }
`
// Arrow
export const MonthArrow = styled.div`
  cursor: pointer;
  ${props => (props.state === 'left' ? `margin-left: 1%` : `margin-right: 1%`)};
  i{
    font-size: 60px;
    @media ${device.landscapeMobile} {
      font-size: 50px;
    }
    @media ${device.laptop} {

    }
  }
`
// Calendar 
export const CalendarContainer = styled.div`
  overflow: hidden;
  height:100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  @media ${device.landscapeMobile} {
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media ${device.laptop} {
  }
`
export const OptionalWrapper = styled.div`
  display: unset;
  @media ${device.landscapeMobile} {
    display: grid;
    grid-template-rows: 13% 1fr;
    width: 50%;
    height: 100%;
  }
  @media ${device.laptop} {
    width: 60%;
    grid-template-rows: 8% 1fr;
    grid-row-gap: 12px;
  }
`