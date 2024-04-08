import "./SimplePages.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../../firebase.js";
import logo from "../assets/Logo.png";

import { getUserByEmail } from "../frontend-services/accountCreation.service.ts";
import { useState } from "react";
import LandingPageNavbar from "../components/LandingPageNavbar.tsx";

const LoginPage = () => {
  const [showCredErr, setShowCredErr] = useState(true);
  const [showVerifyErr, setShowVerifyErr] = useState(true);

  const handleLogin = async (e) => {
    const auth = firebase.auth;
    var emailElement = document.getElementById("email");
    var passwordElement = document.getElementById("password");
    let password: string;
    let email: string;

    if (emailElement instanceof HTMLInputElement) {
      email = emailElement.value;
    } else {
      email = "";
    }

    if (passwordElement instanceof HTMLInputElement) {
      password = passwordElement.value;
    } else {
      password = "";
    }
    e.preventDefault();

    setShowCredErr(true);
    setShowVerifyErr(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user.emailVerified) {
        const response = await getUserByEmail(email);
        sessionStorage.setItem("user", JSON.stringify(response.data.user[0]));
        window.location.href = "http://localhost:5173/dashboard";
      } else {
        setShowVerifyErr(false);
      }
      // ...
    } catch (error) {
      if (
        error.code === "auth/invalid-email" ||
        error.code === "auth/missing-password" ||
        error.code === "auth/invalid-credential"
      ) {
        setShowCredErr(false);
      }
      console.log(error);
    }
  };

  return (
    <body className="login-body">
      <div>
        <nav className="account-nav"></nav>
        <form onSubmit={handleLogin} className="info-container">
          <div className="title-text">
            <p>Welcome Back</p>
            <h1>Login to your account</h1>
          </div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="info-input"
            type="text"
            id="email"
            name="email"
            placeholder="email"
          ></input>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="info-input"
            type="password"
            id="password"
            name="password"
            placeholder="password"
          ></input>
          <br />
          <div hidden={showCredErr} className="invalid-text" id="invalid-creds">
            Invalid credentials please try again
          </div>
          <div
            hidden={showVerifyErr}
            className="invalid-text"
            id="not-verified"
          >
            Please verify your email and try again
          </div>
          <br />
          <a href="">Forgot Password?</a>
          <br />
          <button type="submit" className="account-button">
            Login Now
          </button>
          <p>
            Don't have an account? <a href="/AccountCreate">Create one now.</a>
          </p>
        </form>
      </div>
    </body>
  );
};

export default LoginPage;
