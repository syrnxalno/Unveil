import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";
import unveilLogo from "../assets/unveil.png";
import googleIcon from "../assets/google.png";
import therapyVideo from "../assets/untitled.mp4";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // 🔹 Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard"); // Redirect to dashboard if already logged in
    }
  }, [navigate]);

  // 🔹 Fireflies Effect
  useEffect(() => {
    const container = document.querySelector(".video-container");
    for (let i = 0; i < 10; i++) {
      let firefly = document.createElement("div");
      firefly.classList.add("firefly");
      firefly.style.left = `${Math.random() * 100}%`;
      firefly.style.top = `${Math.random() * 100}%`;
      firefly.style.animationDuration = `${Math.random() * 5 + 3}s`;
      container.appendChild(firefly);
    }
  }, []);

  // 🔹 Handle Login Form Submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // 🔹 Store JWT Token in localStorage
      localStorage.setItem("token", response.data.token);

      // 🔹 Redirect to Dashboard
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.msg || "Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <p className="or-text">or continue with</p>
        <button className="google-signin">
          <img src={googleIcon} alt="Google Icon" className="google-icon" />
          Google
        </button>
      </div>

      {/* Background Video */}
      <div className="video-container">
        <video className="login-video" autoPlay loop muted>
          <source src={therapyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Floating Quote */}
      <div className="floating-quote">
        <p>"Healing begins with a single step. You are stronger than you think."</p>
      </div>
    </div>
  );
}

export default LoginPage;