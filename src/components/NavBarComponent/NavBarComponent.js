import React, { useState } from "react";

import "./NavBarComponent.scss";

import LogoComponent from '../common/LogoComponent/LogoComponent.js';

function NavBarComponent() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const handleMenuToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  }

  const renderBackdrop = () => {
    return navbarOpen ? <div className="mobile-menu-backdrop" onClick={closeMenu}></div> : "";
  }

  return (
    <div className="nav-bar">
      { renderBackdrop() }
      <div className="nav-bar__header">
        <div className={`menu-btn ${navbarOpen ? "open" : ""}`} onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <LogoComponent />
      </div>
      <div className="nav-bar__content" hidden={!navbarOpen}>
        <nav>
          <a href="/">About Us</a>
          <a href="/">Gallery</a>
          <a href="/">Crew</a>
          <a href="/">Kontact</a>
        </nav>
      </div>
    </div>
  );
}

export default NavBarComponent;