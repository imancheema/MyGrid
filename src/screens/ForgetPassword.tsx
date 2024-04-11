import "./SimplePages.css";
import logo from "../assets/Logo.png";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import firebase from "../../firebase.js";

const ForgetPasswordPage = () => {
  const [emailErr, setEmailErr] = useState(true);
  const [userInfo, setUserInfo] = useState({
    email: "",
  });
  const [forgotPasswordEmailSent, setForgotPasswordEmailSent] = useState(false);

  const handleSubmit = async (e: Event) => {
    const auth = firebase.auth;
    e.preventDefault();

    setEmailErr(true);
    try {
      await sendPasswordResetEmail(auth, userInfo.email);
      setForgotPasswordEmailSent(true);
    } catch (error) {
      setEmailErr(false);
    }
  };

  return (
    <body className="login-body">
      <div>
        <nav className="logo">
          <img src={logo} alt="logo" />
        </nav>
        <form className="info-container">
          <div className="title-text">
            <h1>Forgot your password?</h1>
            <input
              className="info-input"
              type="text"
              id="email"
              name="email"
              value={userInfo.email}
              placeholder="Email address"
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            ></input>
            <div hidden={emailErr} className="invalid-text" id="invalid-email">
              Please enter a valid email
            </div>
            <p>
              Please enter your email the email that you forgot your password
              for.
              <br />
            </p>
          </div>
        </form>
        <form onSubmit={handleSubmit} action="/Login">
          <button className="account-button">Continue</button>
        </form>
        <br />
        {forgotPasswordEmailSent ? (
          <p>
            Email Sent! <a href="/Login">Login Here.</a>
          </p>
        ) : null}
      </div>
    </body>
  );
};

export default ForgetPasswordPage;
