import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-fixed-top">
    <div className="Navbar-body">
      <div className="Navbar-left">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Byte-Sized Coding" style={{ width: '32px' }} />
          </figure>
          <div className="Navbar-brand-name">
            <div>BYTE-SIZED</div>
            <div>CODING</div>
          </div>
        </Link>
      </div>
      <div className="Navbar-center">
        <div className="Navbar-links">
          <Link className="navbar-item" to="/">
            All
          </Link>
          <Link className="navbar-item" to="/tags/javascript">
            JavaScript
          </Link>
        </div>
      </div>
      <div className="Navbar-right">
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
