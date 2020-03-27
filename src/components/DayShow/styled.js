import styled from 'styled-components';
import { device } from '../../constants';

export const DayShowContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  order: 1;
  @media ${device.landscapeMobile} {
    order: 2;
    height: 90%;
    width: 90%;
    border-radius: 30px;
    border: solid black 2px;
    flex: none;
  }
  @media ${device.laptop} {
    height: 80%;
    width: 80%;
  }
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #abacb0;
    font-size: 240px;
    z-index: -1;
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