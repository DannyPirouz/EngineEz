import React from "react";

function LoginForm() {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="remember-forgot">
          <label htmlFor=""><input type="checkbox" />Remember me</label>
          <a href="myCars">Forgot password</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="myCars">Register</a></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;