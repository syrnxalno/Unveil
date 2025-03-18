import React from "react";
import { useNavigate } from "react-router-dom";
import "./GetSupport.css";
import console from "../assets/console.png";
import { keyframes } from "styled-components";
import styled from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const AnimatedLandingImage = styled.img`
  animation: 10s ${fadeInAnimation} infinite;
  width: auto;
  height: auto;
  max-width: 100%;
`;

function GetSupport() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="game-container">
      <h1>Get Support & Mental Well-being</h1>
      <p>
      Access resources for mental well-being, chat with our AI assistant, and explore self-diagnosis tools for better understanding.
      
      </p>
      
      {/* Landing Image */}
      <AnimatedLandingImage 
        src={console} 
        alt="Landing Page Image: Peer Review" 
        className="landing-image"
      />

      {/* Redirect Button */}
      <button className="redirect-button" onClick={() => navigate("/chat-diagnosis")}>
      Talk to Our AI & Self-Diagnose
      </button>
    </div>
  );
}

export default GetSupport;
