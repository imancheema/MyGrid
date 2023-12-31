import "./SimplePages.css";

    return(
      <body className="login-body">
        <div>
          <nav className="account-nav">
            <div className="logo">Logo</div>
          </nav>
          <form className="info-container">
            <div className="title-text">
              <p>One Final Step</p>
              <h1>Check your email</h1>
              <p>Thank you for registering your account with us, we have sent <br/>
                  a one time verification to your email ending in {}. <br/> Please check your 
                  device and enter the code below.
              </p>
            </div>
            <label htmlFor="code">Code</label>
            <br/>
            <input className="info-input" type="text" id="code" name="code"></input>
            <div className="invalid-text"></div>
            <br/>
          </form>
          <form class="AuthButtonForm" action="AuthSuccess">
            <button className="account-button">Enter</button> {/* TODO Add logic for authenticator code check */}
          </form>
            <br/>
            <p>Didn't receive the email?{' '}
              <a href="/Login">Resend Verification.</a> {/* TODO Add logic for resending verification */}
            </p>
            <p>or verify with your{' '}
              <a href="/Login">Phone Number</a> {/* TODO Add logic for using phone number check */}
              {' '} instead.
            </p>
        </div>
      </body>
    );
  };
  
  export default UserAuthPage;