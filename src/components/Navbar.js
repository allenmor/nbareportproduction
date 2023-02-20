import React from "react";
import logo from '../images/nbareportlogo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo-image" src={logo} alt='logo' />
      </div>
      <div className="navbar-menu">
        <p className="navbar-item">Standings</p>
        <p className="navbar-item">Stats</p>
        <p className="navbar-item">Games</p>
      </div>
    </nav>
  );
}

export default Navbar;
