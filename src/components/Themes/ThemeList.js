import React from 'react';
import { connect } from 'react-redux';

import { themes } from '../../constants';
import { changeTheme } from '../../actions/theme';

export const ThemeList = (props, { choices = themes }) => {
  const { dispatch } = props;

  const handleClick = theme => dispatch(changeTheme(theme));

  return (
    <ul>
      {
        Object.keys(choices).map(key =>
          <li key={key} onClick={() => handleClick(key)} >{choices[key].name}</li>
        )
      }

    </ul>
  )
}

export default connect()(ThemeList);