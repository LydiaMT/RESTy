import React from 'react';
import './header.scss'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <h1>RESTy</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/History">History</NavLink>
          </li>
          <li>
            <NavLink to="/Help">Help</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
