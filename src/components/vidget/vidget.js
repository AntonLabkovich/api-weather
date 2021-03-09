import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

import './vidget.scss'

const Vidget = ({children}) => {
  return (
      <div className="vidget">
        <FontAwesomeIcon icon={faInfo} className="vidget-iconinfo"/>
        <div className="vidget-info">
          {children}
        </div>
      </div>  
  )
}

export default Vidget