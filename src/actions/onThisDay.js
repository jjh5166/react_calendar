export const GET_ONTODAY = 'GET_ONTODAY';
export const GET_ONTHATDAY = 'GET_ONTHATDAY';

export const ONTHISDAY_ERROR = 'ONTHISDAY_ERROR';
export const ONTHISDAY_RESULT = 'ONTHISDAY_RESULT';

export const getOnToday = () => ({
  type: GET_ONTODAY
});

export const getOnThatDay = (day) => ({
  type: GET_ONTHATDAY,
  day
});
