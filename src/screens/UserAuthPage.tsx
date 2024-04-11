import "./SimplePages.css";
import logo from "../assets/Logo.png";

const UserAuthPage = () => {
  return (
    <body className="login-body">
      <div>
        <nav className="logo">
          <img src={logo} alt="logo" />
        </nav>
        <form className="info-container">
          <div className="title-text">
            <h1>One Final Step</h1>
            <img
              src="src\assets\VerificationSuccess.png"
              alt="Verification Success"
            ></img>
            <h2>Check your email</h2>
            <p>
              Thank you for registering your account with us, we have sent{" "}
              <br />
              a one time verification to your email. <br /> Please check your
              device and click the link to activate your account.
            </p>
          </div>
        </form>
        <form action="/Login">
          <button className="account-button">Continue</button>
        </form>
        <br />
      </div>
    </body>
  );
};

export default UserAuthPage;
