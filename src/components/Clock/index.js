import React, { Component } from 'react';
import moment from 'moment';

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
      <div>{this.state.time}</div>
    )
  }
}


export default Clock;