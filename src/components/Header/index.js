import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="Home-page-website-logo"
          />
        </Link>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
          </li>
        </ul>

        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
        <ul className="header-icons-small">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              <AiFillHome className="home-icon" />
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/jobs" className="nav-link">
              <BsFillBriefcaseFill className="briefcase-icon" />
            </Link>
          </li>
          <li className="nav-menu-item">
            <button
              type="button"
              className="logout-icon"
              onClick={onClickLogout}
            >
              <FiLogOut className="briefcase-icon" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
