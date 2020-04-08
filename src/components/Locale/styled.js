import styled from 'styled-components';
import { device } from '../../constants';

export const LocaleContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  font-size: min(max(14px, 5vw), 20px);
  align-items: center;
  height: 100%;
  @media ${device.landscapeMobile} {
    justify-content: space-around;
  }
`