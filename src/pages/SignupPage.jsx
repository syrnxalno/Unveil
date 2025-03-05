import React, { useState } from "react";
import "./SignupPage.css";
import unveilLogo from "../assets/unveil.png";
import googleIcon from "../assets/google.png"; // Add your Google icon here

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isMatching = password === confirmPassword && password.length > 0;

  return (
    <div className="signup-container">
      <div className="signup-form">
        <img src={unveilLogo} alt="Unveil logo" className="signup-logo" />
        
        <h2>Signup</h2>
        <form>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Re-enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" disabled={!isMatching}>
            Sign Up
          </button>
          {!isMatching && confirmPassword.length > 0 && (
            <p className="error-message">Passwords do not match</p>
          )}
        </form>

        {/* Google Sign-In Option */}
        <p className="or-text">or continue with</p>
        <button className="google-signin">
          <img src={googleIcon} alt="Google Icon" className="google-icon" />
          Google
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
