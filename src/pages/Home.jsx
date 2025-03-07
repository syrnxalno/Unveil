import React, { useState, useEffect } from "react";
import "./Home.css"; // Import the CSS file
import landingImage from '../assets/main.png'; // Ensure correct file path
import mindfulnessImage from '../assets/mindfullness.jpg';
import communityImage from '../assets/community.jpg';
import personalizedResourcesImage from '../assets/human resource.jpg';
import growthImage from '../assets/growth.jpg';
import healingImage from '../assets/healing.jpg';
import balanceImage from '../assets/balance.jpg';
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import { fadeIn } from 'react-animations';

// Fade-in Animation
const fadeInAnimation = keyframes`${fadeIn}`;

const AnimatedLandingImage = styled.img`
  animation: 10s ${fadeInAnimation} infinite;
  width: auto;
  height: auto;
  max-width: 100%;
`;

function Home() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const cardsSection = document.querySelector(".cards-section");

      if (cardsSection && scrollPosition > cardsSection.offsetTop + 100) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Text & Image Section */}
      <div className="home-container">
        {/* Text Box */}
        <div className="text-box">
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
        </div>

        {/* Landing Image */}
        <AnimatedLandingImage 
          src={landingImage} 
          alt="Landing Page Illustration" 
          className="landing-image"
        />
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <div className={`cards-container ${inView ? 'in-view' : ''}`}>
          <div className="card">
            <img src={mindfulnessImage} alt="Mindfulness" />
            <h3>Mindfulness</h3>
            <p>Find peace through meditation and mindfulness practices.</p>
          </div>
          <div className="card">
            <img src={communityImage} alt="Community" />
            <h3>Community</h3>
            <p>Engage in supportive and meaningful conversations.</p>
          </div>
          <div className="card">
            <img src={personalizedResourcesImage} alt="Personalized Resources" />
            <h3>Personalized Resources</h3>
            <p id="paragraph">Access tools to support your unique journey of healing.</p>
          </div>
          <div className="card">
            <img src={growthImage} alt="Growth" />
            <h3>Growth</h3>
            <p>Explore your potential and achieve personal growth.</p>
          </div>
          <div className="card">
            <img src={healingImage} alt="Healing" />
            <h3>Healing</h3>
            <p>Discover practices to heal your mind and body.</p>
          </div>
          <div className="card">
            <img src={balanceImage} alt="Balance" />
            <h3>Balance</h3>
            <p>Learn how to balance your life and restore harmony.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Unveil. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
