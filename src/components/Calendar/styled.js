import styled from 'styled-components';
import { device } from '../../constants';
import { lighten, shade } from 'polished';

// CalendarHeader
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  -webkit-text-stroke: 1px black;
  @media ${device.landscapeMobile} {
    height: unset;
  }
  @media ${device.laptop} {
    width: 90%;
    margin: 0 auto;
    margin-top: 5px;
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
  font-size: 43px;
  @media ${device.landscapeMobile} {
    justify-content: space-around;
    font-size: 33px;
  }
  @media ${device.laptop} {
    justify-content: center;
    font-size: 60px;
  }
`
export const FlexSpacer = styled.div`
  @media ${device.laptop} {
    width: 35px;
  }
`
// CalendarBody
export const CalBodyContainer = styled.div`
  background-color: ${props => props.theme.secondColor};
  padding: 1px;
  height: 40vh;
  max-width: 100%;
  display: grid;
  grid-template-rows: 24px 1fr;
  grid-gap: 1px;
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
  grid-gap: 1px;
`
export const WeekdayHeaderContainer = styled(CalRow)`
  position: relative;
  height: 24px;
  outline-offset: -1px;
`
export const DayAbbr = styled.abbr`
  border-bottom: none !important;
  cursor: inherit !important;
  text-decoration: none !important;
  @media ${device.laptop} {
    font-size: 0;
      &:before {
      font-size: 1rem;
      content: attr(title);
    }
  }
`
export const DatesFlex = styled.div`
  display: flex;
  flex-direction: column;
`
export const DatesRow = styled(CalRow)`
  margin-bottom: 1px;
  flex: 1;
  height: 2px;
`
export const CalSlot = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  background-clip: border-box;
  background: ${props => shade(.5, props.theme.secondColor)};
`
export const WeekdaySlot = styled(CalSlot)`
  text-align: center;
  -webkit-text-stroke: .15px black;
`
export const DaySlot = styled(CalSlot)`
  position: relative;
  cursor: pointer;
  background: ${props => props.selected ? lighten(0.3, props.theme.mainColor) : props.theme.mainColor};
  color: ${props => props.theme.thirdColor};
  ${props => props.today && 'text-decoration: underline; font-weight: bold;'};
  &:hover{
    background-color: ${props => lighten(0.2, props.theme.mainColor)};
  }
`
export const OffDaySlot = styled(DaySlot)`
  color: ${props => shade(.25, props.theme.thirdColor)};
  background: ${props => shade(0.25, props.theme.mainColor)};;
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
  right: 0;
  display: flex;
  align-items: flex-end;
  color: ${props => props.theme.fourthColor};
  @media ${device.laptop} {
    top: 0;
    height: 32%;
    width: auto;
    bottom: unset;
    flex-direction: column;
    justify-content: space-between;
    margin: 5px;
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
  font-size: min(max(42px, 5vw), 50px);
  cursor: pointer;
  display: flex;
  align-items: center;
  ${props => (props.state === 'left' ? `margin-left: 1%` : `margin-right: 1%`)};
  &:hover{
      color: ${props => lighten(.2, props.theme.fourthColor)};
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
  background-color: ${props => shade(0.75, props.theme.mainColor)};
  color: ${props => props.theme.fourthColor};
  @media ${device.landscapeMobile} {
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media ${device.laptop} {
  }
  a {
    color: inherit;
    text-decoration: none;
    text-decoration: underline;
  }
  a:hover {
    color: ${props => lighten(.75, props.theme.fourthColor)};
  }
  a:active {
    color: ${props => lighten(.5, props.theme.fourthColor)};
  }
  a:visited {
    color: ${props => shade(.5, props.theme.fourthColor)};
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
export const DayContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  flex: 1;
  @media ${device.landscapeMobile} {
    width: 50%;
  }
  @media ${device.laptop} {
    width: 40%;
  }
`
export const LocaleSettingsWrapper = styled.div`
  width: 100%;
  order: 2;
  @media ${device.landscapeMobile} {
    height: 13%;
    order: 1;
  }
`