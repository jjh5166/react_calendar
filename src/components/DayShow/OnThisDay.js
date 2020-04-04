import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import ReactHtmlParser from 'react-html-parser';

import { getOnThisDay } from '../../actions/onThisDay';
import { withMomenter } from '../Momenter';

const choseEvent = (events) => {
  let rando = Math.floor(Math.random() * 5);

  return events[rando].html
}

const OnThisDay = (props) => {
  const { onThisData, momenter, dispatch } = props;
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
    <Fragment>
      {
        (activated) && 
        <div>
          <Loader
            type="Grid"
            color="#00BFFF"
            height={100}
            width={100}
            visible={onThisData[momenter.otdDate].isFetching}
          />
          {ReactHtmlParser(chosen)}
        </div>
      }
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  let onThisData = state.onThisDay.data;
  return {
    onThisData
  };
}

export default connect(mapStateToProps)(withMomenter(OnThisDay));
