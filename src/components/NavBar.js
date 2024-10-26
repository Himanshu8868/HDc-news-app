import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {

  render() {
    const { Mode, toggleMode } = this.props;
      

    return (
      <nav className={`navbar navbar-expand-lg navbar-${Mode} bg-${Mode}`}>
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand" to="/">
          HDC NEWS
          </Link>

          {/* Hamburger Menu */}
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

          <div className="collapse navbar-collapse  " id="navbarNav">
            {/* Links */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Technology">Technology</Link>
              </li>
            </ul>

            


            {/* Mode Toggle */}
            <div className={`form-check form-switch text-${Mode === 'light' ? 'dark' : 'light'} ms-3`}>
              <input
                className="form-check-input"
                type="checkbox"
                id="modeSwitch"
                onClick={toggleMode}
              />
              <label className="form-check-label" htmlFor="modeSwitch">
                Dark / Light Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
