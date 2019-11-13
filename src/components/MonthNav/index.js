import React, { useState } from 'react';
import { SelectList } from './SelectList.js'
import { withMomenter } from '../Momenter';

function MonthNav(props) {
  const [showMonthPopup, monthToggle] = useState(false)
  const months = props.momenter.months;
  return (
    <span className="label-month"
      onClick={() => monthToggle(!showMonthPopup)}>

      {props.momenter.month()}
      {showMonthPopup &&
        <SelectList data={months} clickHandler={props.momenter.onSelectChange} />
      }
    </span>
  );
}

export default withMomenter(MonthNav);