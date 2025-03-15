import React, { useState, useEffect } from "react";
import "./SignupPage.css";
import unveilLogo from "../assets/unveil.png";
import googleIcon from "../assets/google.png";
import therapyVideo from "../assets/Untitled design (2).mp4"; // Corrected import

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isMatching = password === confirmPassword && password.length > 0;

  // Fireflies Effect (Dynamically Create Fireflies)
  useEffect(() => {
    const container = document.querySelector(".signup-container");
    for (let i = 0; i < 10; i++) {
      let firefly = document.createElement("div");
      firefly.classList.add("firefly");
      firefly.style.left = `${Math.random() * 100}%`;
      firefly.style.top = `${Math.random() * 100}%`;
      firefly.style.animationDuration = `${Math.random() * 5 + 3}s`; // Vary speeds
      container.appendChild(firefly);
    }
  }, []);

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

      {/* Background Video for Relaxing Effect */}
      <video className="signup-video" autoPlay loop muted>
        <source src={therapyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Floating Quote */}
      <div className="floating-quote">
          <p>"Take a deep breath. You are doing better than you think."</p>
        </div>
      {/* Floating Quote */}
      <div className="floating-quote">
        <p>"Healing begins with a single step. You are stronger than you think."</p>
      </div>
    </div>
  );
}

export default SignupPage;
