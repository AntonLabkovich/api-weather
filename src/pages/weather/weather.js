import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCities } from '../../redux/actions/cities'

import CityListContainer from '../../containers/cityListContainer'
import SearchSelectContainer from '../../containers/searchSelectContainer'
import Preloader from '../../modules/preloader/preloader'
import Error from '../../modules/error/error'

import './weather.scss'
import ChooseTimeUpdateContaier from '../../containers/chooseTimeUpdateContainer'

const Weather = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.cities.isLoading)
  const isError = useSelector(state => state.cities.isError)
  console.log('isError',isError)
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('monitoredCity'))){
      let monitoredCity = JSON.parse(localStorage.getItem('monitoredCity'))
      dispatch(setCities(monitoredCity))
    }else{
      localStorage.setItem('monitoredCity', JSON.stringify([]))
    }
  })
  return (
      <div className="weather">
        <div className="header">
          <SearchSelectContainer/>
          <ChooseTimeUpdateContaier/>
        </div>
        {isLoading?<Preloader/>:<CityListContainer/>}
        <Error class={isError?'error':'not-error'}/>
      </div>
  )
}

export default Weather