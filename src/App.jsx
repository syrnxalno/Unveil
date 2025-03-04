import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';
import unveilLogo from './assets/Unveil_logo__2_-removebg-preview.png';
import landingImage from './assets/final land img.png';
import './App.css';

const fadeInAnimation = keyframes`${fadeIn}`;

const AnimatedLandingImage = styled.img`
  animation: 7s ${fadeInAnimation} infinite;
  width: auto; /* Keeps the original width */
  height: auto; /* Keeps the original height */
  max-width: 100%; /* Ensures responsiveness */
`;

// Import pages
import Home from './pages/Home';
import Games from './pages/Games';
import YourSpace from './pages/YourSpace';
import Community from './pages/Community';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <img src={unveilLogo} alt="Unveil logo" />
          </div>
          <div className="nav-container">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/games">Games</Link></li>
              <li><Link to="/your-space">Your Space</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="auth-buttons">
              <button className="button">Login</button>
              <button className="button">Sign Up</button>
            </div>
          </div>
        </nav>

        {/* Main content and image wrapper */}
        <div className="content-wrapper">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />
              <Route path="/your-space" element={<YourSpace />} />
              <Route path="/community" element={<Community />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <AnimatedLandingImage 
  src={landingImage} 
  alt="Landing page image: Peer review" 
  className="landing-image" 
/>
        </div>
      </div>
    </Router>
  );
}

export default App;
