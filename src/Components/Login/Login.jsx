function Login() {
  return (
    <>
      <section className="login">
        <div className="container">
            <h1 className="LoginHeader">LOGIN HOTEL ADMISTRATION</h1>
          <div className="labelWrapper">
            <div className="loginWrapper">
              <span>Login</span>
              <input type="text" />
            </div>
            <div className="passwordWrapper">
              <span>Password</span>
              <input type="password" />
            </div>
            <button className="subBtn">SUBMIT</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
