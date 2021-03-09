import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ChooseTimeUpdate from '../components/chooseTimeUpdate/chooseTimeUpdate'
import { updateMonitoredAllCity } from '../redux/actions/cities'

const ChooseTimeUpdateContaier = () => {
  const dispatch = useDispatch()
  const monitoredCities = useSelector(state => state.cities.monitoredCity)
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    onClickChooseTimeUpdate(30)
    return clearTimeout(timer)
  }, [])

  const onClickChooseTimeUpdate = (time) => {
    clearTimeout(timer)
    const newTimer = setTimeout(() => {
      const apiKey = localStorage.getItem('api')
      const urls = monitoredCities.map((item=>`https://api.openweathermap.org/data/2.5/weather?units=metric&id=${item.id}&appid=${apiKey}`))
      dispatch(updateMonitoredAllCity(urls))
    }, time * 60000);

    setTimer(newTimer)
  }

 

  return <ChooseTimeUpdate onClickChooseTimeUpdate={onClickChooseTimeUpdate}/>
}

export default ChooseTimeUpdateContaier