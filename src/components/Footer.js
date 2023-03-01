import React from "react";
import logo from "../images/ball.png";
import tiktok from "../images/tiktoklogo.png";
import youtube from "../images/youtubelogo.png";
import instagram from "../images/instagramlogo.webp";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate()
  const handleLogoClick = () => {
    navigate('/')
  };

  const handleTikTokClick = () => {
    // Do something when TikTok image is clicked
    console.log("TikTok clicked");
    window.location.href = 'https://www.tiktok.com/@nbareport.com';
  };

  const handleYoutubeClick = () => {
    // Do something when YouTube image is clicked
    console.log("YouTube clicked");
    window.location.href = 'https://www.youtube.com/channel/UCEurZGeBZzjd-i8kyeN0zCA';
  };

  const handleInstagramClick = () => {
    // Do something when Instagram image is clicked
    console.log("Instagram clicked");
    window.location.href = 'https://www.instagram.com/nbareport.com_/';
  };

  return (
    <div className="footer-div">
      <img
        className="footer-logo"
        alt="logo"
        src={logo}
        onClick={handleLogoClick}
      />
      <img
        className="footer-instagram"
        src={instagram}
        alt="instagram"
        onClick={handleInstagramClick}
      />
      <img
        className="footer-youtube"
        src={youtube}
        alt="youtube"
        onClick={handleYoutubeClick}
      />
      <img
        src={tiktok}
        alt="tiktok"
        className="footer-tik-tok"
        onClick={handleTikTokClick}
      />
    </div>
  );
}

export default Footer;
