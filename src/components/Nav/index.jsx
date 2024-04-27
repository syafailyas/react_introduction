import './style.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Nav = () =>
{
  return (
    <>
      <div className = 'header'>
        <nav>
          <h3>@Ayush Barnwal</h3>

          <ul>
            <li>
              <HashLink to = '/#about'>About</HashLink>
            </li>

            <li>
              <HashLink to = '/#work'>Work</HashLink>
            </li>

            <li>
              <Link to = '/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Nav