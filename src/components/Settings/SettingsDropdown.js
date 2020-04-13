import React, { useEffect, useState } from 'react';

import { SettingsDropdownContainer, DropDownUList, DDListItem, DDEnum } from './styled';
import { ThemeList } from '../Themes';

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
      {selectedItem && <DropdownEnum status={selectedItem} />}
    </SettingsDropdownContainer>
  )
}
const DropdownEnum = ({status}) => {
  
  return(
    <DDEnum>
      {(() => {
        switch (status) {
          case 'Themes':
            return <ThemeList />;
          case 'Location':
            return <div>{'Location'}</div>;
          case 'Events':
            return <div>{'Events'}</div>;
          default:
            return null;
        }
      })()}
    </DDEnum>
)}
const DropDownList = ({ options, filter, clickHandler }) => {
  let filtered = filter ? options.filter(sel => sel === filter) : options;

  return (
    <DropDownUList>
      {
        filtered.map(title => (
          <DropdownOption key={title} title={title} clickHandler={clickHandler}>
          </DropdownOption>
        ))
      }
    </DropDownUList>
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