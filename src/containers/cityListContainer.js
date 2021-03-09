import { useSelector, useDispatch } from 'react-redux'

import CityList from '../modules/cityList/cityList'
import { removeMonitoredOneCity,  updateMonitoredOneCity} from '../redux/actions/cities'

const CityListContainer = () => {
  const monitoredCity = useSelector(state => state.cities.monitoredCity);
  const min = useSelector(state => state.cities.min)
  const max = useSelector(state => state.cities.max)
  console.log(min,max)
  const dispatch = useDispatch()

  const onRemove = (id) => {
    const newMonitoredCities = monitoredCity.filter((item)=>item.id !== id)
    dispatch(removeMonitoredOneCity(newMonitoredCities))
    localStorage.setItem('monitoredCity',JSON.stringify(newMonitoredCities))
  }

  const onReload = async (id) => {
    dispatch(updateMonitoredOneCity(id,monitoredCity))
} 

  return (
      <CityList 
                monitoredCity={monitoredCity}
                onRemove={onRemove}
                onReload = {onReload}
                min={min}
                max={max}/>
  )
}

export default CityListContainer