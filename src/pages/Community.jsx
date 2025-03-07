import React from "react";
import "./Community.css"; // Import the CSS file
import landingImage from '../assets/comm.png'; // Ensure correct file path
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

function Community() {
  return (
    <div className="comm-container">
      <h1>Join the Community</h1>
      <p>Find a community of like minded people that just get you.
        Whether you're seeking inspiration, knowledge, or simply a sense of belonging, 
        a strong community provides the support and motivation needed to grow.Together, we build, learn, and thrive.</p>
    {/* Landing Image */}
          <AnimatedLandingImage 
            src={landingImage} 
            alt="Landing Page Image: Peer Review" 
            className="landing-image"
          />
    </div>
  );
}

export default Community;
