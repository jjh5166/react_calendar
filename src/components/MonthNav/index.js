import React from 'react';
import {SelectList} from "./SelectList.js"
import moment from "moment";

const months = moment.months();

function MonthNav(props) {
  let month = () => {
    return props.dateContext.format("MMMM");
  }
    return (
      <span className="label-month"
        onClick={ props.clickHandler }>
        {month()}
        {props.showMonthPopup &&
          <SelectList data={months} />
        }
      </span>
    );
  }

export default MonthNav;