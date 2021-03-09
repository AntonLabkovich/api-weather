import { city }  from '../../city'

const initialState = {
  isLoading: false,
  items: [...city],
  filterItems: [],
  isError: false,
  monitoredCity: [],
  min: null,
  max: null
};

const cities = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_CITIES':
      return {
        ...state,
        monitoredCity: payload,
        isLoading: false,
        isError: false
      }
    case 'SET_SEARCHED_CITIES':
        return{
          ...state,
          filterItems: payload,
          isError: false 
        }
    case 'LOADING':
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case 'SET_MONITORED_CITY':
      return{
        ...state,
        monitoredCity: [...state.monitoredCity, ...payload],
        isError: false
      }
    case 'REMOVE_MONITORED_ONE_CITY':
      return{
        ...state,
        monitoredCity: [...payload],
        isError: false
      }
    case 'SET_MIN_MAX_TEMP':
      return{
        ...state,
        min: payload.min,
        max: payload.max
      }
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        isError: !state.isError
      }
    default:
      return state;
  }
};

export default  cities