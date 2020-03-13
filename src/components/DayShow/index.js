import React from 'react';
import { withMomenter } from '../Momenter';
import { DayShowContainer, EventItem, EventList } from './styled';

function DayShow(props) {
  let { momenter } = props
  return(
    <DayShowContainer>
      <EventList date={momenter.currentDate()}>
        {
          [...Array(5)].map((_, i) => {
            return (<EventItem key={'evIteem'+i}/>)
          })
        }
      </EventList>
    </DayShowContainer>
  )
}

export default withMomenter(DayShow);