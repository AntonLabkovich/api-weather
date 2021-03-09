import axios from 'axios'
import { searchMaxTemp, searchMinTemp } from '../../utils/serachMinMax'


export const updateMonitoredOneCity = (id, monitoredCities) => {
  const idSearchCity = monitoredCities.findIndex((item)=>item.id === id)
  return dispatch => {
    dispatch(setCitiesLoading())
    
    const apiKey = localStorage.getItem('api')
    const date = new Date()
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&id=${id}&appid=${apiKey}`)
      .then(res=>{ 
        if(idSearchCity === -1){
          res.data.date = date.toLocaleString("ru", options)
          localStorage.setItem('monitoredCity',JSON.stringify([res.data, ...monitoredCities]))
          const max = searchMaxTemp([res.data, ...monitoredCities])
          const min = searchMinTemp([res.data, ...monitoredCities])
          dispatch(setMinMaxTemp(min, max))
          dispatch(setCities([res.data, ...monitoredCities]))
        }else{
          monitoredCities[idSearchCity].date = date.toLocaleString("ru", options)
          localStorage.setItem('monitoredCity',JSON.stringify(monitoredCities))
          const max = searchMaxTemp([...monitoredCities])
          const min = searchMinTemp([...monitoredCities])
          dispatch(setMinMaxTemp(min, max))
          dispatch(setCities([...monitoredCities]))
        }
      })
      .catch(err=>dispatch(setCitiesError()))
  }
}

export const updateMonitoredAllCity = (urls) => {
  return dispatch => {
    dispatch(setCitiesLoading())
    const date = new Date()
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
    }
    Promise.all(urls.map((url)=>axios.get(url)
    .then(res => {
      res.data.date = date.toLocaleString("ru", options)

      return res.data
    }))).catch(err=>dispatch(setCitiesError()))
      .then(res=>{ 
        console.log('all res',res)
        const max = searchMaxTemp(res)
        const min = searchMinTemp(res)
        dispatch(setMinMaxTemp(min, max))
        dispatch(setCities([...res]))
      })
      .catch(err=>dispatch(setCitiesError()))
  }
}


export const setCitiesLoading = () =>({
  type: 'LOADING',
  
});

export const setCitiesError = () => ({
  type: 'ERROR',
})


export const setCities = (cities) => ({
  type: 'SET_CITIES',
  payload: cities
})

export const setSearchedCities = (cities) => ({
  type: 'SET_SEARCHED_CITIES',
  payload: cities
})


export const setMonitoredCity = (city) => {
  return {
    type: 'SET_MONITORED_CITY',
    payload: city
}}


export const removeMonitoredOneCity = (cities) => {
  return {
    type: 'REMOVE_MONITORED_ONE_CITY',
    payload: cities
}}

export const setMinMaxTemp = (min, max) => {
  return {
    type: 'SET_MIN_MAX_TEMP',
    payload: {min, max}
}}

