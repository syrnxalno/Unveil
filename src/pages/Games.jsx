import React from "react";
import "./Games.css";
import console from '../assets/console.png'; // Ensure correct file path
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

const AnimatedLandingImage = styled.img`
  animation: 10s ${fadeInAnimation} infinite;
  width: auto;
  height: auto;
  max-width: 100%;
`;

function Games() {
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
    </div>
  );
}

export default Games;
