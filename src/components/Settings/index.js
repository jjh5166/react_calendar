import React from 'react';
import { connect } from 'react-redux';

import { SettingsTag, CogContainer } from './styled'

import { ReactComponent as Cog } from '../../cog.svg';
const Settings = (props) => {
  const { theme } = props;
  return (
    <SettingsTag>
      <CogContainer>
        <Cog fill={theme.mainColor}/>
      </CogContainer>
    </SettingsTag>
  )
}
const mapStateToProps = (state) => {
  let theme = state.theme
  return {
    theme
  };
}
export default connect(mapStateToProps)(Settings);
