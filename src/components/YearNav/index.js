import React, { useState } from 'react';
import { withMomenter } from '../Momenter';
import Select from 'react-select';

function YearNav(props) {
  const [showYearDropdown, yearToggle] = useState(false)
  const year = parseInt(props.momenter.today.format("Y"))

  const handleChange = (e) => {
    props.momenter.setYear(e.value);
  }
  const yearSelect = (year) => {
    let selections = []
    for (let i = (year - 10); i < (year + 5); i++) {
      selections.push({ label: i, value: i })
    }
    return selections
  }
  let options = yearSelect(year)
  return (
    showYearDropdown ?
      <span className="label-year">
        <Select placeholder={year} options={options} onChange={(e)=> handleChange(e)}/>
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