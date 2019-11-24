import React from 'react';
import { withMomenter } from '../Momenter';
import Dropdown from "../Dropdown";

function YearNav(props) {
  const year = parseInt(props.momenter.today.format("Y"))

  const yearSelect = (year) => {
    let selections = []
    for (let i = (year - 5); i < (year + 5); i++) {
      selections.push(i)
    }
    return selections
  }
  let options = yearSelect(year)
  return (
    <Dropdown
      value={props.momenter.year()}
      onChange={props.momenter.setYear}
      options={options}
    >
    </Dropdown>
  );
}

export default withMomenter(YearNav);