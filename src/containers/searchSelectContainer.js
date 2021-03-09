import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import SearchSelect from '../modules/searchSelect/searchSelect'
import { setSearchedCities, updateMonitoredOneCity } from '../redux/actions/cities'



const SearchSelectContainer = () => {
  const cities = useSelector(state => state.cities.items);
  const filterCities =  useSelector(state => state.cities.filterItems)
  const monitoredCity = useSelector(state => state.cities.monitoredCity);
  const dispatch = useDispatch()
  const [value, setValue] = useState('');

  useEffect(() => {
    document.addEventListener('click', onClickDocument)
    return () => {document.removeEventListener('click', onClickDocument)}
  })

  const onClickDocument = e => {
    if(!e.target.classList.contains('option') && filterCities.length !== 0 && !e.target.classList.contains('label') && !e.target.classList.contains('input'))  {
      dispatch(setSearchedCities([]))
    }
  }

  const onFocus = e => {
    if(e.target.value.trim() !== ''){
      const filterCity = cities.filter(city => city.name.toLowerCase().trim().startsWith(value.toLowerCase().trim()))
      dispatch(setSearchedCities(filterCity))
    }
  }

  const onChangeHandler = e => {
    setValue(e.target.value)
    if(e.target.value.trim().length > 3){
      const filterCity = cities.filter(city => city.name.toLowerCase().trim().startsWith(value.toLowerCase().trim()))
      dispatch(setSearchedCities(filterCity))
    }else{
      dispatch(setSearchedCities([]))
    }
  }

  const onChooseCity = (e,id) => {
    if(!e.target.classList.contains('option')){
      dispatch(setSearchedCities([]))
      return
    }
    dispatch(setSearchedCities([]))
    setValue('')
    dispatch(updateMonitoredOneCity(id, monitoredCity))
  } 
  return (
    
    <SearchSelect 
      onChange = {onChangeHandler}
      value = {value}
      filterCities = {filterCities}
      onChooseCity = {onChooseCity}
      onFocus = {onFocus}
      monitoredCity = {monitoredCity}
    />
  )
}

export default SearchSelectContainer