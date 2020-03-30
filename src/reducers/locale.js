import { GOT_COORDS, FIND_LOCALE, LOCALE_RESULT, LOCALE_ERROR } from '../actions/locale';

const initialState = {
  city: "",
  isLoading: false,
  error: null
}
const setCity = response =>{
  let address = response.data.address
  let city;
  if(address.country_code === "us"){
    city = `${address.city}, ${address.state}`
  }else{
    city = `${address.city}, ${address.country}`
  }
  return city
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_COORDS:
      return {
        ...state,
        coords: action.coords,
      }
    case FIND_LOCALE:
      return {
        ...state,
        isLoading: true,
      }
    case LOCALE_RESULT:
      return {
        ...state,
        city: setCity(action.response)
      }
    case LOCALE_ERROR:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default reducer;