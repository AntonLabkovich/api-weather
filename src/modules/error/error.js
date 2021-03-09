import { useDispatch } from 'react-redux'
import { setCitiesError } from '../../redux/actions/cities'

import './error.scss'

const Error = (props) => {
  const dispatch = useDispatch()
  
  const onCloseError = () => {
    dispatch(setCitiesError())
  }

  return (
      <div className={`error-style ${props.class}`}>
        <p>Ошибка загрузки попробуйте позже</p>
        <span className="cross" onClick={onCloseError}>&#10006;</span>
      </div>  
  )
}

export default Error