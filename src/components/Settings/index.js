import React from 'react';

import { SettingsTag, CogContainer } from './styled'

const Settings = () => {
  return (
    <SettingsTag>
      <CogContainer>
        <i className="fas fa-cog"></i>
      </CogContainer>
    </SettingsTag>
  )
}

export default Settings;