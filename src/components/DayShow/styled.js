import styled from 'styled-components';
import { device } from '../../constants';
import { shade, transparentize } from 'polished';

export const DayShowContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  order: 1;
  background: ${props => props.theme.mainColor};
  border: solid ${props => props.theme.secondColor} 2px;
  border-radius: 30px;
  margin: 7px 0;
  width: 90%;
  @media ${device.landscapeMobile} {
    order: 2;
    height: 90%;
    flex: none;
    margin: 0;
  }
  @media ${device.laptop} {
    height: 80%;
    width: 80%;
  }
  &:before {
    font-family: 'Fjalla One', sans-serif;
    max-height: 100%;
    display:table-cell;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: lightgray;
    font-size: 210px;
    color: ${props => shade(.25, props.theme.secondColor)};
    content: '${props => props.date}';
    transition: 0.5s all ease-out;
    @media ${device.landscapeMobile} {
      font-size: 300px;
    }
    @media ${device.laptop} {
      font-size: 350px;
    }
  }
`
export const EventItem = styled.div`
  width: 80%;
  border-bottom: solid black 1px;
  min-height: 35px;
`
export const OtdContainer = styled.div`
  z-index: 1;
`
export const OtdContent = styled.div`
  border-radius: 30px;
  background: ${props => transparentize(0.5, props.theme.mainColor)};
  border: solid ${props => props.theme.fifthColor} 2px;
  margin: 0 6px;
  p{
    margin: 14px;
  }
`
export const OtdLoader = styled.div`
`