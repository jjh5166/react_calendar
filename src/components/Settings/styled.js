import styled from 'styled-components';
import { device } from '../../constants';
import { shade } from 'polished';

export const SettingsTag = styled.div`
  z-index: 2;
  position: absolute;
  float: right;
  bottom: 0;
  right:0;
  height: 40px;
  width: 40px;
  transition: all .5s;
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  background: ${props => props.theme.fourthColor};
  &:hover{
    height: 100px;
    width: 100px;
  }
  @media ${device.landscapeMobile} {
    top: 0;
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
  @media ${device.laptop} {
    
  }
`

export const CogContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
  i{
    color: ${props => shade(0.75, props.theme.mainColor)};
  }
  @media ${device.landscapeMobile} {
    top: 0;
  }
`