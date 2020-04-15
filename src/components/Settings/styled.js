import styled from 'styled-components';
import { device } from '../../constants';
import { lighten } from 'polished';

const SettingsVars = {
  height: {
    CLOSED: '40px',
    OPEN: '100px',
  },
  borderWidth: '2px',
  
}
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
  height: ${props => props.enlarged ? SettingsVars.height.OPEN : SettingsVars.height.CLOSED};
  width: ${props => props.enlarged ? SettingsVars.height.OPEN : SettingsVars.height.CLOSED};
  transition: all .5s;
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  background: ${props => props.theme.fourthColor};
  z-index: 3;
  &:hover{
    height: ${SettingsVars.height.OPEN};
    width: ${SettingsVars.height.OPEN};
  }
  ${CogContainer} {
    padding: ${props => props.enlarged ? '5px' : 'unset'};
  }
  &:hover ${CogContainer} {
    padding: 5px;
  }
  @media ${device.landscapeMobile} {
    top: 0;
    bottom: unset;
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
  @media ${device.laptop} {
    
  }
`
export const SettingsContainer = styled.div`
  z-index: 2;
`
export const SettingsDropdownContainer = styled.div`
  width: ${props => props.expanded ? `calc(100% - 2 * ${SettingsVars.borderWidth})` : '0'};
  min-height: ${props => props.expanded ? `calc(${SettingsVars.height.OPEN} - 2 * ${SettingsVars.borderWidth})` : '0'};
  height: ${props => props.subOpen == 'Location' ? '200px' : 'unset'};
  display: flex;
  flex-direction: column;
  transition: all .5s ease-out;
  position: absolute;
  background: ${props => props.theme.mainColor};
  ${props => props.expanded &&
  `border: ${SettingsVars.borderWidth} solid ${props.theme.secondColor}`
  }
  overflow: hidden;
  right:0;
  bottom:0;
  z-index: 2;
  @media ${device.landscapeMobile} {
    width: ${props => props.expanded ? '100%' : '0'};
    top: 0;
    bottom: unset;
  }
  ul{
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
  }
  li{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  li:hover,
  li:focus-within {
    background: ${props => lighten(0.2, props.theme.mainColor)};
    cursor: pointer;
  }
`
export const DropDownUList = styled.ul`
  flex: 1;
`
export const DDListItem = styled.li`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const DDEnum = styled.div`
  display: flex;
  flex: 4;
`