import React from 'react';
import { withMomenter } from '../Momenter';
import Dropdown from '../Dropdown';

function MonthNav(props) {
  const months = props.momenter.months;
  return (
    <Dropdown
      value={props.momenter.month()}
      onChange={props.momenter.setMonth}
      options={months}
    />
  );
}

export default withMomenter(MonthNav);