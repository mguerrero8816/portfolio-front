import React from 'react';
import DropboxModalButton from './dropbox/DropboxModalButton';

function Navbar() {
  return (
    <nav id="mainNav" className="navbar navbar-expand-lg navbar-light bg-dark fixed-top navbar-shrink">
      <div className="container">
        <a className="navbar-brand" href="#page-top">Mike Guerrero</a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#achievements">Achievements</a></li>
            <li className="nav-item"><a className="nav-link" href="#career">Career</a></li>
            <DropboxModalButton />
            {/* <li className="nav-item"><a className="nav-link" href="#portfolio">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">Contact</a></li> */}
            {/* <li className="nav-item"><a className="nav-link" href="#career">Education</a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
