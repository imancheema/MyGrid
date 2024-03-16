import "./SimplePages.css";
import React, {useState} from "react";

import {
  createUser
} from "../frontend-services/accountCreation.service.ts";


//TODO Validation for proper email, phone number, postal code

const LoginPage = () => {
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

  const addUser = async () => {
    try {
      await createUser(userInfo);
      console.log("User created succesfully");
    } catch (error) {
      console.log("Error creating user:", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.password === userInfo.confirmPassword){
      console.log("Testing");
      addUser();
    }
    else {
      console.log("Password and confirm password do not match");
    }
  }
  
    return(
      <body className="login-body">
        <div>
          <nav className="account-nav">
            <div className="logo">Logo</div>
          </nav>
          <form onSubmit= {handleSubmit} className="info-container">
            <div className="title-text">
              <p>Welcome</p>
              <h1>Create your account</h1>
            </div>
            <label htmlFor="email">Email</label>
            <br/>
            <input className="info-input" type="text" id="email" name="email" value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}></input>
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input className="info-input" type="password" id="password" name="password" value={userInfo.password} onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}></input>
            <br/>
            <label htmlFor="password">Confirm Password</label>
            <br/>
            <input className="info-input" type="password" id="confirm-password" name="confirm-password" value={userInfo.confirmPassword} onChange={(e) => setUserInfo({...userInfo, confirmPassword: e.target.value})}></input>
            <br/>
            <label htmlFor="password">First Name</label>
            <br/>
            <input className="info-input" type="text" id="firstName" name="firstName" value={userInfo.firstName} onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}></input>
            <br/>
            <label htmlFor="password">Last Name</label>
            <br/>
            <input className="info-input" type="text" id="lastName" name="lastName" value={userInfo.lastName} onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}></input>
            <br/>
            <label htmlFor="password">Phone Number</label>
            <br/>
            <input className="info-input" type="text" id="phoneNum" name="phoneNum" value={userInfo.phoneNum} onChange={(e) => setUserInfo({...userInfo, phoneNum: e.target.value})}></input>
            <br/>
            <label htmlFor="password">City</label>
            <br/>
            <input className="info-input" type="text" id="city" name="city" value={userInfo.city} onChange={(e) => setUserInfo({...userInfo, city: e.target.value})}></input>
            <br/>
            <label htmlFor="password">Postal Code</label>
            <br/>
            <input className="info-input" type="text" id="postalCode" name="postalCode" value={userInfo.postalCode} onChange={(e) => setUserInfo({...userInfo, postalCode: e.target.value})}></input>
            <br/>
            <div className="invalid-text"></div>
            <br/>
            <a> 
              <button type="submit" className="account-button">Register Now</button>
            </a>
          </form>
            <p className="centered-element">Already have an account?{' '}
              <a href="/Login">Login.</a>
            </p>
        </div>
      </body>
    );
  };
  
  export default LoginPage;