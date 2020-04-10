import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

import { SettingsContainer, SettingsTag, CogContainer } from './styled';
import { ReactComponent as Cog } from '../../cog.svg';
import SettingsDropdown from './SettingsDropdown'

const Settings = (props) => {
  const node = useRef();
  const [open, setOpen] = useState(false);
  const { theme } = props;

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
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
    <SettingsContainer ref={node}>
      <SettingsTag enlarged={open}>
        <CogContainer onClick={e => setOpen(!open)}>
          <Cog fill={theme.mainColor}/>
        </CogContainer>
      </SettingsTag>
      <SettingsDropdown expanded={open}/>
    </SettingsContainer>
  )
}

const mapStateToProps = (state) => {
  let theme = state.theme
  return {
    theme
  };
}
export default connect(mapStateToProps)(Settings);
