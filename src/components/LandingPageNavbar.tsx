import React from "react";
import logo from "../assets/Logo.png"; // Import your logo image
import "./LandingPageNavbar.css";

const LandingPageNavbar = () => {
  return (
    <div className="landing-page-navbar">
      <div className="logo">
        <img src={logo} alt="Logo" /> {/* Display your logo */}
      </div>
      <div className="auth-buttons">
        <a href="/Login">
          <button className="login-button">Login</button>
        </a>
        <a href="/AccountCreate">
          <button className="signup-button">Sign Up</button>
        </a>
      </div>
    </div>
  );
};

export default LandingPageNavbar;
