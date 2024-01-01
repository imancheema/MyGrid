import "./SimplePages.css";

function TestFunction(){ //TODO Modify for proper account credential check logic later
  alert('Clicked on');
}

const LoginPage = () => {
    return(
      <body className="login-body">
        <div>
          <nav className="account-nav">
            <div className="logo">Logo</div>
          </nav>
          <form className="info-container">
            <div className="title-text">
              <p>Welcome</p>
              <h1>Create your account</h1>
            </div>
            <label htmlFor="email">Email</label>
            <br/>
            <input className="info-input" type="text" id="email" name="email"></input>
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input className="info-input" type="text" id="password" name="password"></input>
            <br/>
            <label htmlFor="password">Confirm Password</label>
            <br/>
            <input className="info-input" type="text" id="confirm-password" name="confirm-password"></input>
            <br/><br/>
            <div className="invalid-text"></div>
          </form>
            <br/>
            <a href="/UserAuth"> 
              <button className="account-button">Register Now</button>
            </a>
            <p className="centered-element">Already have an account?{' '}
              <a href="/Login">Login.</a>
            </p>
        </div>
      </body>
    );
  };
  
  export default LoginPage;