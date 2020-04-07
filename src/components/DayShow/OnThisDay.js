import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import ReactHtmlParser from 'react-html-parser';

import { getOnThisDay } from '../../actions/onThisDay';
import { withMomenter } from '../Momenter';
import { OtdContainer, OtdContent } from './styled';

const choseEvent = (events) => {
  let rando = Math.floor(Math.random() * 5);

  return events[rando].html
}

const OnThisDay = (props) => {
  const { onThisData, momenter, dispatch, theme } = props;
  let activated = false
  let chosen = null;
  useEffect(() => {
    if (!onThisData[momenter.otdDate]){
      dispatch(getOnThisDay(momenter.otdDate)) 
    }
  });
  if (onThisData.hasOwnProperty(momenter.otdDate)){
    activated = true
    if (onThisData[momenter.otdDate].events.length !== 0) {
      chosen = choseEvent(onThisData[momenter.otdDate].events)
    }
  } 
  
  return(
    <OtdContainer>
      {
        (activated) &&
        <Fragment>
            <Loader
              type="Grid"
              height={100}
              width={100}
              color={theme.fifthColor}
              visible={onThisData[momenter.otdDate].isFetching}
            />
          <OtdContent>
            <p>{ReactHtmlParser(chosen)}</p>
          </OtdContent>
        </Fragment>
      }
    </OtdContainer>
  )
}

const mapStateToProps = (state) => {
  let onThisData = state.onThisDay.data;
  let theme = state.theme
  return {
    onThisData,
    theme
  };
}

export default connect(mapStateToProps)(withMomenter(OnThisDay));
