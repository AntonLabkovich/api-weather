import './chooseTimeUpdate.scss'

const ChooseTimeUpdate = (props) => {
  return (
      <div className="choose-time">
        <p>Обновление:</p>
        <span onClick = {()=>{props.onClickChooseTimeUpdate(10)}}>10 мин.</span>
        <span onClick = {()=>{props.onClickChooseTimeUpdate(30)}}>30 мин.</span>
        <span onClick = {()=>{props.onClickChooseTimeUpdate(60)}}>1 час</span>
        <span onClick = {()=>{props.onClickChooseTimeUpdate(5*60)}}>5 час</span>
      </div>  
  )
}

export default ChooseTimeUpdate