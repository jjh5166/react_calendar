import React from 'react';
import { connect } from 'react-redux';

import Clock from '../Clock';
import { LocaleContainer } from './styled';

const Locale = (props) => {

  return (
    <LocaleContainer>
      <Clock/>
      <div>{props.locale.city}</div>
    </LocaleContainer>
  )
}

const mapStateToProps = (state) => {
  let locale = state.locale
  return {
    locale
  };
}

export default connect(mapStateToProps)(Locale);