import React, { Component } from 'react';
import moment from 'moment';

import { ClockContainer } from './styled'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('LT'),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: moment().format('LT')
    });
  }

  render() {
    return (
      <ClockContainer>{this.state.time}</ClockContainer>
    )
  }
}


export default Clock;