import React, { useState } from 'react';
import { withMomenter } from '../Momenter';

function YearNav(props) {
  const [showYearDropdown, yearToggle] = useState(false)
  const year = props.momenter.year()

  return (
    showYearDropdown ?
      <span className="label-year">
        {year}{"dropdown"}
      </span>
      :
      <span
        className="label-year"
        onClick={() => yearToggle(!showYearDropdown)}
      >
        {year}
      </span>
  );
}

export default withMomenter(YearNav);