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
      <h1>Chat, Chill, and Care!</h1>
      <p>
      Step into a space where you can share, unwind, and feel supported. Whether you're here to talk it out or just need a little virtual company, we're here to listen.
      </p>
      
      {/* Landing Image */}
      <AnimatedLandingImage 
        src={console} 
        alt="Landing Page Image: Peer Review" 
        className="landing-image"
      />

      {/* Redirect Button */}
      <button className="redirect-button" onClick={() => navigate("/chat-diagnosis")}>
      Chat & Check-In
      </button>
    </div>
  );
}

export default GetSupport;
