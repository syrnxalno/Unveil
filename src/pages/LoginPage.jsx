import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import unveilLogo from "../assets/unveil.png";
import googleIcon from "../assets/google.png";
import therapyVideo from "../assets/untitled.mp4";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fireflies Effect (Dynamically Create Fireflies)
  useEffect(() => {
    const container = document.querySelector(".video-container");
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
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>

        <p className="or-text">or continue with</p>
        <button className="google-signin">
          <img src={googleIcon} alt="Google Icon" className="google-icon" />
          Google
        </button>
      </div>

      {/* Background Video and Floating Quote */}
      <div className="video-container">
        <video className="login-video" autoPlay loop muted>
          <source src={therapyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Floating Quote */}
      </div>
      <div className="floating-quote">
    <p>"Healing begins with a single step. You are stronger than you think."</p>
</div>

    </div>
  );
}

export default LoginPage;