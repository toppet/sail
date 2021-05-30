import React, { useState } from "react";
import "./NavBar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

function NavBarComponent() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar__header">
        <div className={`menu-btn ${navbarOpen ? "open" : ""}`} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo">
          <FontAwesomeIcon icon={faFlag} className="logo__icon" />
          <p className="logo__text">Segel<span>Team</span></p>
        </div>
      </div>
      <div className="nav-bar__content" hidden={!navbarOpen}>
        <nav>
          <a href="/about-us">About Us</a>
          <a href="/gallery">Gallery</a>
          <a href="/crew">Crew</a>
          <a href="/kontact">Kontact</a>
        </nav>
      </div>
    </div>
  );
}

export default NavBarComponent;