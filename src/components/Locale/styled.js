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
export const GeoAutoContainer = styled.div`
  height: 165px;
  width: 100%;
  display: grid;
  overflow:scroll;
  grid-template-rows: 14% 1fr;
  ul{
    overflow: scroll;
  }
`
export const GeoInput = styled.input`
  width: 60%;
  background: transparent;
  padding: 7px 0;
  border: 0;
  outline: 0;
  border-bottom: 2px solid ${props => props.theme.fifthColor};
  color: ${props => props.theme.fifthColor};
  font-size: 1.3rem;
  margin-left: 5px;
`
export const SuggestionUL = styled.ul`
  display:flex;
  flex-direction: column;
  margin-top: 5px;
  li{
    margin-bottom: 2px;
    span{
      margin-left: 5px;
    }
  }
`