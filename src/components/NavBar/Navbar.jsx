import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#2C3E50' }}>
      <div className="container">
        <NavLink className="navbar-brand text-white" to="/" style={{ fontWeight: 'bold' }}>
          START FRAMEWORK
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/about"
                activeClassName="active"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/portfolio"
                activeClassName="active"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/contact"
                activeClassName="active"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
