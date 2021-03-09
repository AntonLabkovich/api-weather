
import './inputText.scss'

const InputText = (props) => {
  return (
      <div className="input-text">
        <label htmlFor="input_search" className="label">Поиск города: </label>
        <input 
              className="input"
              id="input_search" 
              type="text" 
              autoComplete="off"
              value={props.value} 
              onChange={props.onChange}
              onFocus = {(e)=>{props.onFocus(e)}}/>
              
      </div>
  )
}

export default InputText