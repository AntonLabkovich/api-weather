import './cityList.scss'

import CityCard from '../../components/cityCard/cityCard'
import { Fragment } from 'react'

const CityList = (props) => {
  return (
    <Fragment>

      {props.monitoredCity.length > 0 ?
        <div className='city-list'>
          {props.monitoredCity.map((item,i)=> 
                                              <CityCard key={i} 
                                                        monitoredCity={item}
                                                        onRemove={props.onRemove}
                                                        onReload = {props.onReload}
                                                        min={props.min}
                                                        max={props.max}/>)}
          
        </div>
      :null}
    </Fragment>
  )
}

export default CityList