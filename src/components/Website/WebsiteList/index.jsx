import './style.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const WebsiteList = ( { image, link } ) =>
{
  return (
    <div className = 'container--website'>
      <img src = {image} alt = ''/>
      <div className = 'container--website-button'>
        <Link to = {link}>
          <button>
            <span>
              Visit the website <i className = 'ri-arrow-right-up-line'></i>
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default WebsiteList