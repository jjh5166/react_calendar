import styled from 'styled-components';
import { device } from '../../constants';

export const LocaleContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-size: min(max(14px, 5vw), 20px);
  order: 2;
  @media ${device.landscapeMobile} {
    justify-content: space-around;
    width: 90%;
    order: 1;
  }
  @media ${device.laptop} {
    width: 80%;
  }
`