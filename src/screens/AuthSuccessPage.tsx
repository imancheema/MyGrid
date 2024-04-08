import "./SimplePages.css";
import VerificationSuccess from "../assets/VerificationSuccess.png";

const AuthSuccessPage = () => {
  return (
    <body className="login-body">
      <div>
        <nav className="account-nav">
          <div className="logo">Logo</div>
        </nav>
        <form className="info-container">
          <div className="title-text">
            <p>One Final Step</p>
            <h1>Verification Successful</h1>
          </div>
          <p>
            Thank you for choosing us! Your account has been created
            successfully.
          </p>
          <br />
          <img src={VerificationSuccess} alt="Verification Success"></img>
          <br />
          <p>
            What's next? Explore our platform and make the most of your new
            account!
          </p>
          <br />
          <button className="account-button">Continue</button>
          <br />
        </form>
      </div>
    </body>
  );
};

export default AuthSuccessPage;
