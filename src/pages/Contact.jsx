import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"; // Import icons
import "./Contact.css"; // Import the updated CSS
import landingImage from '../assets/contact.png'; // Ensure correct file path
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

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Phone: +91 XXXXXXXXXX</p>
        <p>Email: <a href="mailto:unveilproject@gmail.com">theunveilproject@gmail.com</a></p>
      </div>

      <div className="social-container">
        <h1>Our Socials</h1>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
      {/* Landing Image */}
            <AnimatedLandingImage 
              src={landingImage} 
              alt="Landing Page Image: Peer Review" 
              className="landing-image"
            />
    </div>
  );
}

export default Contact;
