import React, { useEffect, useState } from 'react';

import { SettingsDropdownContainer, DDListItem } from './styled';

const dropDownOptions = ['Themes', 'Location', 'Events']

const SettingsDropdown = ({ expanded }) => {
  const [selectedItem, setSelected] = useState(null);

  const handleClick = selectedValue => {
    setSelected(selectedValue);
  };

  useEffect(() => {
    if (expanded) {
      setSelected(null);
    }
  }, [expanded]);

  return (
    <SettingsDropdownContainer expanded={expanded} >
      <DropDownList options={dropDownOptions} filter={selectedItem} clickHandler={handleClick} />
    </SettingsDropdownContainer>
  )
}

const DropDownList = ({ options, filter, clickHandler }) => {
  let filtered = filter ? options.filter(sel => sel === filter) : options;

  return (
    <ul>
      {
        filtered.map(title => (
          <DropdownOption key={title} title={title} clickHandler={clickHandler}>
          </DropdownOption>
        ))
      }
    </ul>
  )
}
const DropdownOption = ({ title, selected, children, clickHandler }) => {
  return (
    <DDListItem title={title} selected={selected} onClick={(e) => clickHandler(title)}>
      <span>{title}</span>
      {children}
    </DDListItem>
  )
}

export default SettingsDropdown;