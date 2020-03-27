import React from 'react';
import { connect } from 'react-redux';

import Clock from '../Clock';
import { LocaleContainer } from './styled';

const Locale = (props) => {

  return (
    <LocaleContainer>
      <Clock/>
      <div>{"London, GB"}</div>
    </LocaleContainer>
  )
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps)(Locale);