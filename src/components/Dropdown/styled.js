import styled from 'styled-components';
import { lighten } from 'polished';

export const DropdownContainer = styled.div`
  cursor: pointer;
  width: fit-content;
  display: flex;
  span{
    display: inline-flex;
    align-items: center;
    align-self: stretch;
    &:hover{
      color: ${props => lighten(.2, props.theme.fourthColor)};
    }
  }
`
export const DropdownMenu = styled.ul`
  z-index: 2;
  position: absolute;
  background: ${props => props.theme.mainColor};
  border: 2px solid ${props => props.theme.secondColor};
  border-radius: 25px;
  overflow:scroll;
  height: 300px;
`
export const DropdownItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  &:hover {
    background-color: ${props => lighten(0.2, props.theme.mainColor)};
  };
`