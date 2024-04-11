import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SimplePages.css";
import logo from "../assets/Logo.png";
import {
  UserCredential,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { createUser } from "../frontend-services/accountCreation.service.ts";
import firebase from "../../firebase.js";

//TODO Validation for proper email, phone number, postal code

const LoginPage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNum: "",
    city: "",
    postalCode: "",
  });

  const [emailErr, setEmailErr] = useState(true);
  const [weakPassErr, setWeakPassErr] = useState(true);
  const [invPassErr, setInvPassErr] = useState(true);

  const addUser = async () => {
    try {
      await createUser(userInfo);
      console.log("User created succesfully");
    } catch (error) {
      console.log("Error creating user:", error);
    }
  };

  const handleSubmit = async (e: Event) => {
    const auth = firebase.auth;
    e.preventDefault();

    setEmailErr(true);
    setWeakPassErr(true);
    setInvPassErr(true);

    if (userInfo.password === userInfo.confirmPassword) {
      try {
        const newUserCredential: UserCredential =
          await createUserWithEmailAndPassword(
            auth,
            userInfo.email,
            userInfo.password
          );
        await sendEmailVerification(newUserCredential.user);
        await addUser();
        navigate("/UserAuth");
      } catch (error) {
        if (
          error.code === "auth/invalid-email" ||
          error.code === "auth/email-already-exists"
        ) {
          setEmailErr(false);
        }
        if (
          error.code === "auth/weak-password" ||
          error.code === "auth/missing-password"
        ) {
          setWeakPassErr(false);
        }
        console.log(error);
      }
    } else {
      setInvPassErr(false);
    }
  };

  return (
    <body className="login-body">
      <div>
        <nav className="logo">
          <img src={logo} alt="logo" />
        </nav>
        <form onSubmit={handleSubmit} className="info-container">
          <div className="title-text">
            <p>Welcome</p>
            <h1>Create your account</h1>
          </div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="info-input"
            type="text"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          ></input>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="info-input"
            type="password"
            id="password"
            name="password"
            value={userInfo.password}
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
          ></input>
          <br />
          <label htmlFor="password">Confirm Password</label>
          <br />
          <input
            className="info-input"
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={userInfo.confirmPassword}
            onChange={(e) =>
              setUserInfo({ ...userInfo, confirmPassword: e.target.value })
            }
          ></input>
          <br />
          <label htmlFor="password">First Name</label>
          <br />
          <input
            className="info-input"
            type="text"
            id="firstName"
            name="firstName"
            value={userInfo.firstName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, firstName: e.target.value })
            }
          ></input>
          <br />
          <label htmlFor="password">Last Name</label>
          <br />
          <input
            className="info-input"
            type="text"
            id="lastName"
            name="lastName"
            value={userInfo.lastName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, lastName: e.target.value })
            }
          ></input>
          <br />
          <label htmlFor="password">Phone Number</label>
          <br />
          <input
            className="info-input"
            type="text"
            id="phoneNum"
            name="phoneNum"
            value={userInfo.phoneNum}
            onChange={(e) =>
              setUserInfo({ ...userInfo, phoneNum: e.target.value })
            }
          ></input>
          <br />
          <label htmlFor="password">City</label>
          <br />
          <input
            className="info-input"
            type="text"
            id="city"
            name="city"
            value={userInfo.city}
            onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })}
          ></input>
          <br />
          <label htmlFor="password">Postal Code</label>
          <br />
          <input
            className="info-input"
            type="text"
            id="postalCode"
            name="postalCode"
            value={userInfo.postalCode}
            onChange={(e) =>
              setUserInfo({ ...userInfo, postalCode: e.target.value })
            }
          ></input>
          <br />
          <div hidden={emailErr} className="invalid-text" id="invalid-email">
            Please enter a valid email
          </div>
          <div hidden={weakPassErr} className="invalid-text" id="weak-password">
            Please enter a password longer than 6 characters
          </div>
          <div
            hidden={invPassErr}
            className="invalid-text"
            id="invalid-password"
          >
            Passwords do not match
          </div>
          <br />
          <a>
            <button type="submit" className="account-button">
              Register Now
            </button>
          </a>
          <p className="centered-element">
            Already have an account? <a href="/Login">Login.</a>
          </p>
        </form>
      </div>
    </body>
  );
};

export default LoginPage;
