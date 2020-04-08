import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { ThemeProvider } from 'styled-components';

import Momenter, { MomenterContext } from '../Momenter';
import { gotCoords } from '../../actions/locale';

import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import DayShow from '../DayShow';
import Locale from '../Locale';
import Settings from '../Settings';
import { CalendarContainer, OptionalWrapper, DayContainer, LocaleSettingsWrapper } from './styled';

const DEFAULT_COORDS = {
  lat: 51.5073,
  lon: -0.1277
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
    };
  }
  locSuccess = (position) => {
    this.props.dispatch(gotCoords(
      {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }
    ));
  }
  locFail = () => {
    this.props.dispatch(gotCoords(DEFAULT_COORDS));
  }
  updateDateContext = (dateContext) => {
    this.setState({ dateContext })
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.locSuccess, this.locFail);
  }

  render() {
    const { theme } = this.props
    return (
      <MomenterContext.Provider
        value={new Momenter(this.state.dateContext,
          this.updateDateContext)}
      >
        <ThemeProvider theme={theme}>
          <CalendarContainer>
            <OptionalWrapper>
              <CalendarHeader />
              <CalendarBody />
            </OptionalWrapper>
            <DayContainer>
              <LocaleSettingsWrapper>
                <Settings />
                <Locale />
              </LocaleSettingsWrapper>
              <DayShow />
            </DayContainer>
          </CalendarContainer>
        </ThemeProvider>
      </MomenterContext.Provider>
    );
  }
}
const mapStateToProps = (state) => {
  const theme = state.theme;
  return {
    theme
  };
}
export default connect(mapStateToProps)(Calendar);