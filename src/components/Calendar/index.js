import React from "react";
import moment from "moment";
import MonthNav from '../MonthNav'
import "./calendar.css"

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.width = props.width || "350px";
    this.style = props.style || {};
    this.style.width = this.width;
  }
  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false
  }

  weekdays = moment.weekdays();
  weekdaysShort = moment.weekdaysShort();
  months = moment.months();

  year = () => {
    return this.state.dateContext.format("Y");
  }
  month = () => {
    return this.state.dateContext.format("MMMM");
  }
  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  }
  currentDate = () => {
    return this.state.dateContext.get("date");
  }
  firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext).startOf('month').format('d');
    return firstDay
  }
  setMonth = (month) => {
    let monthNo = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", monthNo);
    this.setState({
      dateContext: dateContext
    })
  }

  nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({
      dateContext: dateContext
    })
    this.props.onNextMonth && this.props.onNextMonth();
  }
  prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onPrevMonth && this.props.onPrevMonth();
  }
  onSelectChange = (e, data) => {
    this.setMonth(data);
    this.props.onMonthChange && this.props.onMonthChange();
  }

  onChangeMonth = (e, month) => {
    this.setState({
      showMonthPopup: !this.state.showMonthPopup
    })
  }

  showYearEditor = () => {
    this.setState({
      showYearNav: true
    })
  }
  setYear = (year) => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("year", year);
    this.setState({
      dateContext: dateContext
    })
  }
  onYearChange = (e) => {
    this.setYear(e.target.value);
    this.props.onYearChange && this.props.onYearChange(e, e.target.value)
  }
  onKeyUpYear =(e) => {
    if (e.which === 13 || e.which ===27) {
      this.setYear(e.target.value);
      this.setState({
        showYearNav:false
      })
    }
  }
  YearNav = () => {
    return (
      this.state.showYearNav ? 
      <input 
        defaultValue = {this.year()}
        className="editor-year"
        ref={(yearInput) => { this.yearInput = yearInput}}
        onKeyUp = {(e) => this.onKeyUpYear(e)}
        onChange = {(e) => this.onYearChange(e)}
        type="number"
        placeholder="year"/>
      :
      <span 
        className="label-year"
        onDoubleClick={(e)=> { this.showYearEditor()}}
      >
        {this.year()}
      </span>
    )
  }
  
  onDayClick = (e,day) => {
    this.props.onDayClick && this.props.onDayClick(e,day);
  }
  render() {
    let weekdays = this.weekdaysShort.map((day) => {
      return (
        <td key={day} className='week-day'>{day}</td>
      )
    })
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td key={i * 3120} className="emptySlot">
        {""}
      </td>)
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = (d === this.currentDate() ? "day current-day" : "day");
      daysInMonth.push(
        <td key={d * 100} className={className}>
          <span onClick={(e)=>{this.onDayClick(e,d)} }>{d}</span>
        </td>
      )
    }
    
    var totalSlots = [...blanks, ...daysInMonth]
    let rows = [];
    let cells = [];

    totalSlots.forEach((slot, i) => {
      if ((i % 7) !== 0) {
        cells.push(slot);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(slot);
      }
      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow)
      }
    })

    let trElems = rows.map((d, i) => {
      return (
        <tr key={i * 10000}>
          {d}
        </tr>
      )
    })
    return (
      <div className="calendar-container" style={this.style}>
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              <td colSpan="5">
                < MonthNav
                  showMonthPopup={this.state.showMonthPopup}
                  dateContext= {this.state.dateContext}
                  clickHandler={this.onChangeMonth}
                />
                {" "}
                < this.YearNav />
              </td>
              <td colSpan="2" className="nav-month">
                <i className="prev fa fa-chevron-left" aria-hidden="true"
                    onClick={(e)=> {this.prevMonth()}}></i>
                <i className="prev fa fa-chevron-right" aria-hidden="true"
                    onClick={(e)=> {this.nextMonth()}}></i>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>{weekdays}</tr>
            {trElems}
          </tbody>
        </table>
      </div>
    );
  }
}