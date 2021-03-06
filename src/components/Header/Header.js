import React from 'react'
import './Header.css'
import logo from '../../assets/tgdd_logo_0.png';

import { Link, withRouter } from "react-router-dom";

const Header = () => {
  return (
    <div className="navigation fixed-top">
      <nav className="navbar navbar-expand navbar-dark bg-dark" >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo of the site" className="logo" />
          </Link>
          <div>
            <ul className="navbar-nav ml-auto">
              <li>
                <Link className="nav-link" to="/admin">
                  Admin
              </Link>
              </li>
              <li>
                <Link className="nav-link" to="/client">
                  Client
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(Header)

