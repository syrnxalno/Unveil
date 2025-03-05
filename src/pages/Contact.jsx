import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"; // Import icons
import "./Contact.css"; // Import the updated CSS

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Phone: +91 XXXXXXXXXX</p>
        <p>Email: <a href="mailto:unveilproject@gmail.com">unveilproject@gmail.com</a></p>
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
    </div>
  );
}

export default Contact;
