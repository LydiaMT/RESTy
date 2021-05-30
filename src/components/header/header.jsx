import React from 'react';
import './header.scss'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <h1>RESTy<span className="blink" dangerouslySetInnerHTML={{__html: "&#9646" }} /></h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
