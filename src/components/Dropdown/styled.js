import styled from 'styled-components';

export const DropdownContainer = styled.div`
  cursor: pointer;
  width: fit-content;
  z-index: 5;
  display: flex;
  span{
    align-self: stretch;
  }
`
export const DropdownMenu = styled.ul`
  position: absolute;
  background: white;
  border: 2px solid black;
  border-radius: 25px;
  overflow:scroll;
  height: 300px;
`
export const DropdownItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  &:hover {
    background-color: lightblue;
  };
`