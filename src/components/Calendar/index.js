import React from "react";
import moment from "moment";
import Momenter, { MomenterContext } from "../Momenter"
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";
import "./calendar.css"


export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.width = props.width || "350px";
    this.style = props.style || {};
    this.style.width = this.width;
  }
  state = {
    dateContext: moment()
  }

  updateDateContext = (newDateContext) => {
    this.setState({
      dateContext: newDateContext
    })
  }

  render() {
    return (
      <MomenterContext.Provider value={new Momenter(this.state.dateContext, this.updateDateContext)}>
        <div className="calendar-container" style={this.style}>
          <table className="calendar">
            <CalendarHeader />
            <CalendarBody />
          </table>
        </div>
      </MomenterContext.Provider>
    );
  }
}