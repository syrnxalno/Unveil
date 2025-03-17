import React from "react";
import "./YourSpace.css"; // Import the CSS file
import landingImage from '../assets/space.png'; // Ensure correct file path
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


function YourSpace() {
  return (
    <div className="space-container">
      <h1>Your personal Space</h1>
      <p>In a world that often feels overwhelming, Unveil is your sanctuary for open, anonymous conversations—free from judgment, labels, or fear. Whether you're seeking support, sharing your thoughts, or simply needing to be heard, our space welcomes you with understanding and compassion.
Here, your voice matters. Speak your truth, connect with others who understand, and find comfort in knowing you’re not alone. 
     </p>
     {/* Landing Image */}
           <AnimatedLandingImage 
             src={landingImage} 
             alt="Landing Page Image: Peer Review" 
             className="landing-image"
           />
    </div>
  );
}

export default YourSpace;
