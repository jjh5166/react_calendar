export const FIND_LOCALE = 'FIND_LOCALE';
export const LOCALE_RESULT = 'LOCALE_RESULT';
export const LOCALE_ERROR = 'LOCALE_ERROR';

export const findLocale = (coords) => ({
  type: FIND_LOCALE,
  coords
});
