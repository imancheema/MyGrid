import "./SimplePages.css";

function TestFunction(){ //TODO Modify for login logic later
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
            <p>Welcome Back</p>
            <h1>Login to your account</h1>
          </div>
          <label htmlFor="email">Email</label>
          <br/>
          <input className="info-input" type="text" id="email" name="email"></input>
          <br/>
          <label htmlFor="password">Password</label>
          <br/>
          <input className="info-input" type="text" id="password" name="password"></input>
          <br/><br/>
          <div className="invalid-text"></div>
          <a href="">Forgot Password?</a>
          <br/>
          <button className="account-button" onClick={TestFunction}>Login Now</button>
          <p>Don't have an account?{' '}
            <a href="/AccountCreate">Create one now.</a>
          </p>
        </form>
      </div>
    </body>
  );
};

export default LoginPage;