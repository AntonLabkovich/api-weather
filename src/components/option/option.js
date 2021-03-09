import './option.scss'

const Option = ({children, onChooseCity, id}) => {
  return (
      <div className="option" onClick = {(e)=>{onChooseCity(e,id)}} >{children}</div>  
  )
}

export default Option