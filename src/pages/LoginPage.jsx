import React from "react";
import "./LoginPage.css";
import unveilLogo from "../assets/Unveil_logo__2_-removebg-preview.png";
import googleIcon from "../assets/google.png"; // Add your Google icon here

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-form">
        {/* Logo should be above the heading */}
        <img src={unveilLogo} alt="Unveil logo" className="login-logo" />
        
        <h2>Login Page</h2>
        <form>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button type="submit">Login</button>
        </form>

        {/* Google Sign-In Option */}
        <p className="or-text">or continue with</p>
        <button className="google-signin">
          <img src={googleIcon} alt="Google Icon" className="google-icon" />
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
