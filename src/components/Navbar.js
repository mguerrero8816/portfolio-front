import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="mainNav" className="navbar navbar-expand-lg navbar-light bg-dark fixed-top navbar-shrink">
      <div className="container">
        <a className="navbar-brand" href="#page-top">Mike Guerrero</a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link" href="#services">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">Timeline</a></li>
            <li className="nav-item"><a className="nav-link" href="#team">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
