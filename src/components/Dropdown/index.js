import React, { useEffect, useState, useRef } from 'react';

import { DropdownContainer, DropdownMenu, DropdownItem } from './styled';

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

export default Dropdown;
