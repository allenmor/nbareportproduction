import React from "react";
import logo from '../images/ball3.png';
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate()

    function handleStandingsClick() {
        navigate('/standings')
    }

    function handleStatsClick() {
        navigate('/stats')
    }

    function handleLogoClick() {
        navigate('/')
    }
  return (
    <nav className="navbar">
      <div className="logo">
        <img onClick={handleLogoClick} className="logo-image" src={logo} alt='logo' />
      </div>
      <div className="navbar-menu">
        <p onClick={handleStandingsClick} className="navbar-item">Standings</p>
        <p onClick={handleStatsClick} className="navbar-item">Stats</p>
        <p className="navbar-item">Games</p>
      </div>
    </nav>
  );
}

export default Navbar;
