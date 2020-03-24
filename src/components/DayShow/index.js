import React from 'react';

import { withMomenter } from '../Momenter';
import OnThisDay from './OnThisDay'
import { DayShowContainer, DayShowInner } from './styled';

function DayShow(props) {
  let { momenter } = props;

  return(
    <DayShowContainer>
      <DayShowInner date={momenter.currentDate()}>
        <OnThisDay/>
      </DayShowInner>
    </DayShowContainer>
  )
}

export default withMomenter(DayShow);