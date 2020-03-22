export const GET_ONTHISDAY = 'GET_ONTHISDAY';
export const ONTHISDAY_ERROR = 'ONTHISDAY_ERROR';
export const ONTHISDAY_RESULT = 'ONTHISDAY_RESULT';

export const getOnThisDay = (date) => ({
  type: GET_ONTHISDAY,
  date
});
