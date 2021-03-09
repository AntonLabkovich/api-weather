import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Vidget from '../vidget/vidget'

import './cityCard.scss'



const CityCard = (props) => {
  const cardCityImg = {
    background: "center / cover url('http://openweathermap.org/img/wn/" + props.monitoredCity.weather[0].icon + "@2x.png') no-repeat  #97a9c7"
  };
  console.log(props.monitoredCity)
  return (
      <div className="card-city" style={cardCityImg}>
        <div  className="city-name">
          <h3 >{props.monitoredCity.name}</h3>
          {props.min === Math.round(props.monitoredCity.main.temp) && props.max === Math.round(props.monitoredCity.main.temp)?
            <Vidget>Минимальная максимальная температура</Vidget>:
              props.min === Math.round(props.monitoredCity.main.temp) ? <Vidget>Минимальная температура</Vidget> : props.max === Math.round(props.monitoredCity.main.temp) ? <Vidget>Максимальная температура</Vidget> : null}

        </div>
        <div className="card-city-info">
          <p>Погода в городе: </p>
          <p><span>Температура: </span> <span>{Math.round(props.monitoredCity.main.temp)}&deg;C</span></p>
          <p><span>Влажность: </span> <span>{props.monitoredCity.main.humidity}</span></p>
          <p><span>Атмосферное давление: </span> <span>{props.monitoredCity.main.pressure}</span></p> 
          <p className="wind">
            <span>Сила и направление ветра: </span>  
            <span>{props.monitoredCity.wind.speed}м/с</span> 
            <span>  
              <FontAwesomeIcon icon={faArrowUp} className="wind-direction"  style={{transform:`rotate(${props.monitoredCity.wind.deg}deg)`}}/>
            </span>
          </p>
          <p className="date">{props.monitoredCity.date}</p>
          <div className="buttons">
            <button className="reload" onClick={()=>{props.onReload(props.monitoredCity.id)}}>
              <span>Обновить</span>
            </button>
            <button className="remove" onClick={()=>{props.onRemove(props.monitoredCity.id)}}>
              <span>Удалить</span>
            </button>
          </div>
        </div>
      </div>
  )
}

export default CityCard