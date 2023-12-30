import "./LandingPageNavbar.css";

const LandingPageNavbar = () => {
  return (
    <div className="landing-page-navbar">
      <div className="logo">Logo</div>
      <div className="auth-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default LandingPageNavbar;
