import React from 'react';

import { withMomenter } from '../Momenter';
import OnThisDay from './OnThisDay'
import { DayShowContainer, EventList } from './styled';

function DayShow(props) {
  let { momenter } = props;

  return(
    <DayShowContainer>
      <EventList date={momenter.currentDate()}>
        <OnThisDay/>
      </EventList>
    </DayShowContainer>
  )
}

export default withMomenter(DayShow);