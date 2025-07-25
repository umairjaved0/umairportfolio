

import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* <h1 className="logo">umair Javed</h1> */}
        <a href="#home" className="logo">umair javed</a>


        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a
            href="/cv.pdf"
            download
            className="cv-button"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


