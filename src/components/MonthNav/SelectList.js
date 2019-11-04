import React from 'react';

export const SelectList = (props) => {
  let popup = props.data.map((data) => {
    return (
      <div key={data}>
        <a href="#" onClick={(e) => { this.onSelectChange(e, data) }}>
          {data}
        </a>
      </div>
    );
  });
  return (
    <div className="month-popup">
      {popup}
    </div>
  )
}