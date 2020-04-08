import styled from 'styled-components';
import { device } from '../../constants';
import { lighten } from 'polished';

export const CogContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 1px 1px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
  transition: all .5s;
  @media ${device.landscapeMobile} {
    top: 0;
    padding: 1px 1px 0 0;
  }
  svg:hover, svg:active, svg:focus{
    cursor: pointer;
    fill: ${ props => lighten(0.2, props.theme.mainColor)}
  }
`
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
  &:hover ${CogContainer} {
    padding: 5px;
  }
  @media ${device.landscapeMobile} {
    top: 0;
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
  @media ${device.laptop} {
    
  }
`
