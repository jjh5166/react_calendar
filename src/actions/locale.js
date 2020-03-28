export const GOT_COORDS = 'GOT_COORDS';
export const FIND_LOCALE = 'FIND_LOCALE';
export const LOCALE_RESULT = 'LOCALE_RESULT';
export const LOCALE_ERROR = 'LOCALE_ERROR';


export const gotCoords = coords => ({
  type: GOT_COORDS,
  coords
})