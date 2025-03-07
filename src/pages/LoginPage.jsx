import React from "react";
import "./LoginPage.css";
import unveilLogo from "../assets/unveil.png";
import googleIcon from "../assets/google.png"; // Add your Google icon here

function LoginPage() {
  return (
    <div className="login-container">
      {/* Left: Form Section */}
      <div className="login-form">
        <img src={unveilLogo} alt="Unveil logo" className="login-logo" />
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button type="submit">Login</button>
        </form>

        <p className="or-text">or continue with</p>
        <button className="google-signin">
          <img src={googleIcon} alt="Google Icon" className="google-icon" />
          Login with Google
        </button>
      </div>

      {/* Right: Image Section */}
      <div className="login-image"></div>
    </div>
  );
}


export default LoginPage;
