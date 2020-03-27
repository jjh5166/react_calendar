import React from 'react';

import { withMomenter } from '../Momenter';
import OnThisDay from './OnThisDay'
import { DayShowContainer } from './styled';

function DayShow(props) {
  let { momenter } = props;

  return(
    <DayShowContainer date={momenter.currentDate()}>
      <OnThisDay/>
    </DayShowContainer>
  )
}

export default withMomenter(DayShow);