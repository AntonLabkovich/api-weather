
import InputText from '../../components/select/inputText'
import Option from '../../components/option/option'
import './searchSelect.scss'

const SearchSelect = (props) => {
  return (
      <div className="search-select">
        <InputText 
                  onChange = {props.onChange}
                  value    = {props.value}
                  onFocus  = {props.onFocus}/>
        {props.filterCities.length !== 0 ? 
        <div className="search-option"> 
          {props.filterCities.map((city) => 
          (props.monitoredCity.findIndex((item)=>item.id === city.id) === -1?
          <Option 
                    onChooseCity = {props.onChooseCity} 
                    key={city.id}
                    id={city.id}
                    >{city.name}
                    
            </Option>:null
            ))}
          
        </div>
        :null}          
        
      </div>
  )
}

export default SearchSelect