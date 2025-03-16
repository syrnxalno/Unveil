import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import "./SignupPage.css";
import googleIcon from "../assets/google.png";
import therapyVideo from "../assets/untitled.mp4"; // Corrected import

function SignupPage() {
  const [username, setUsername] = useState(""); // Add username state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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

  // ✅ Handle Signup Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isMatching) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        email,
        password,
      });

      setSuccess("Signup successful! You can now log in.");
      setError(null);
      console.log(response.data); // Check response in the console
    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed");
      setSuccess(null);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Signup</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Re-enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={!isMatching}>
            Sign Up
          </button>
        </form>

        {/* Google Sign-In Option */}
        <p className="or-text">or continue with</p>
        <button className="google-signin">
          <img src={googleIcon} alt="Google Icon" className="google-icon" />
          Google
        </button>
      </div>

      {/* Background Video */}
      <video className="signup-video" autoPlay loop muted playsInline> 
        <source src={therapyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Floating Quote */}
      <div className="floating-quote">
        <p>"Healing begins with a single step. You are stronger than you think."</p>
      </div>
    </div>
  );
}

export default SignupPage;
