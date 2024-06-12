import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="mainNav" className="navbar navbar-expand-lg navbar-light bg-dark fixed-top navbar-shrink">
      <div className="container">
        <a className="navbar-brand" href="#page-top">Mike Guerrero</a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">Career</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
