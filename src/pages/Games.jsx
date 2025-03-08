import React from "react";
import { useNavigate } from "react-router-dom";
import "./Games.css";
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

function Games() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="game-container">
      <h1>Explore calming games</h1>
      <p>
        Immerse yourself in the serenity of calming games, where gentle visuals and soothing sounds guide you into a world of peace.
      </p>
      
      {/* Landing Image */}
      <AnimatedLandingImage 
        src={console} 
        alt="Landing Page Image: Peer Review" 
        className="landing-image"
      />

      {/* Redirect Button */}
      <button className="redirect-button" onClick={() => navigate("/games/game-content")}>
        Let's go!
      </button>
    </div>
  );
}

export default Games;
