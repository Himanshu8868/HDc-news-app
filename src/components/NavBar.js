import React  from 'react';
import { Link } from 'react-router-dom';

const Navbar= (props) => {
    const { mode, toggleMode } = props;

    return (
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} `}>
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
          <Link className="nav-link " aria-current="page" to="/">General</Link>
        </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/"></Link>
              </li> */}
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

            {/* mode Toggle */}
            <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'} ms-3`}>
              <input
                className="form-check-input"
                type="checkbox"
                id="modeSwitch"
                onClick={toggleMode}
              />
              <label className="form-check-label" htmlFor="modeSwitch">
                Dark / Light mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
}


export default Navbar;
