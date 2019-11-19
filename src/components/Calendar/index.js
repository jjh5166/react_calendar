import React from "react";
import moment from "moment";
import styled from 'styled-components';
import Momenter, { MomenterContext } from "../Momenter"
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";
import "./calendar.css"


export default class Calendar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    dateContext: moment(),
    today: moment()
  }

  updateDateContext = (newDateContext) => {
    this.setState({
      dateContext: newDateContext
    })
  }

  render() {
    return (
      <MomenterContext.Provider value={new Momenter(this.state.dateContext, this.updateDateContext)}>
        <CalendarContainer>
          <CalendarHeader />
          <table className="calendar">
            <CalendarBody />
          </table>
        </CalendarContainer>
      </MomenterContext.Provider>
    );
  }
}

const CalendarContainer = styled.div`
  height:100%;
  width: 100%;
  border: 2px solid skyblue;`