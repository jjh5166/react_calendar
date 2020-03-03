import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';

const Dropdown = ({ value, options, placeholder = "Select", onChange }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  const handleChange = selectedValue => {
    onChange(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <DropdownContainer ref={node}>
      <span onClick={e => setOpen(!open)}>
        {value || placeholder}
      </span>
      {open && (
        <DropdownMenu>
          {options.map(opt => (
            <DropdownItem key={opt} onClick={e => handleChange(opt)}>
              {opt}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};
const DropdownContainer = styled.div`
  cursor: pointer;
  width: fit-content;
  span{
    line-height: 100%;
  }
`
const DropdownMenu = styled.ul`
  position: absolute;
  background: white;
  border: 2px solid black;
  border-radius: 25px;
  overflow:scroll;
  height: 300px;
`
const DropdownItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  &:hover {
    background-color: lightblue;
  };
`
export default Dropdown;
