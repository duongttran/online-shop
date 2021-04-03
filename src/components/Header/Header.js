import React from 'react'

import classes from './Header.module.css'
import logo from '../../assets/mobile-logo.png';

import { Link, withRouter } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo of the site" className={classes.logo} />
          </Link>
          <div>
            <ul className="navbar-nav ml-auto">
              {/* <li>
              <Link className="nav-link" to="/">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li> */}
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

