import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Momenter, { MomenterContext } from '../Momenter';
import { withGeo } from '../GeoLoc'
import { fetchWeather } from '../../actions/weather';

import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import DayShow from '../DayShow';
import { CalendarContainer, OptionalWrapper } from './styled';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
    };
  }
  updateDateContext = (dateContext) => {
    this.setState({ dateContext })
  }
  componentDidMount() {
    this.props.dispatch(fetchWeather());
  }
  render() {
    return (
      <MomenterContext.Provider value={new Momenter(this.state.dateContext, this.updateDateContext)}>
        <CalendarContainer>
          <OptionalWrapper>
            <CalendarHeader />
            <CalendarBody weather={this.state.weather}/>
          </OptionalWrapper>
          <DayShow />
        </CalendarContainer>
      </MomenterContext.Provider>
    );
  }
}

const mapStateToProps = (state) => {

  return {

  };
}

export default connect(mapStateToProps)(withGeo(Calendar));