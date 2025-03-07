import React from "react";
import "./Home.css"; // Import the CSS file
import landingImage from '../assets/final land img.png'; // Ensure correct file path
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

function Home() {
  return (
    <div className="home-container">
      <h1>Unveil your true self</h1>
      <p>
        At <strong>Unveil</strong>, we believe in the power of self-discovery and healing.
        Our space is designed to support your mental well-being through mindfulness,
        community, and personalized resources. Whether you're seeking a moment of calm,
        meaningful conversations, or tools to navigate life’s challenges, <strong>Unveil</strong> provides
        a safe and nurturing environment for growth.
      </p>
      <p>
        Step into a journey of healing—where you can <strong>unveil</strong> your true self, free from judgment,
        and embrace wellness at your own pace.
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

export default Home;
