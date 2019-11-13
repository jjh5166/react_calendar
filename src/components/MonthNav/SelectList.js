import React from 'react';

export const SelectList = (props) => {
  let monthList = props.data.map((data) => {
    return (
      <div key={data}>
        <div onClick={(e) => { props.clickHandler(e, data) }}>
          {data}
        </ div>
      </div>
    );
  });
  return (
    <div className="month-popup">
      {monthList}
    </div>
  )
}