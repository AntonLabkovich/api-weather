import Popap from '../../components/popap/popap'
import './preloader.scss'

const Preloader = () => {
  return (
      <div className="preloader">
        <Popap>
          <div className="content">
            <div className="loading">
              <p>loading</p>
              <span></span>
            </div>
          </div>
        </Popap>
      </div>  
  )
}

export default Preloader