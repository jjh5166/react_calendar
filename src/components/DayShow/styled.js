import styled from 'styled-components';
import { device } from '../../constants';

export const DayShowContainer = styled.div`
  position: relative;
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
export const ShowDate = styled.div`
  width: 100%;
  text-align: center;
`
export const EventList = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 80%;
  width: 80%;
  @media ${device.laptop} {
    border-radius: 30px;
    border: solid black 2px;
  }
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '${props => props.date}'
  }
`