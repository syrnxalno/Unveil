import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import unveilLogo from './assets/Unveil_logo__2_-removebg-preview.png';
import landingImage from './assets/final land img.png';
import './App.css';
import Signup from './pages/SignupPage';
import Login from './pages/LoginPage';

// Import pages
import Home from './pages/Home';
import Games from './pages/Games';
import YourSpace from './pages/YourSpace';
import Community from './pages/Community';
import Contact from './pages/Contact';

const fadeInAnimation = keyframes`${fadeIn}`;

const AnimatedLandingImage = styled.img`
  animation: 10s ${fadeInAnimation} infinite;
  width: auto;
  height: auto;
  max-width: 100%;
`;

// Navbar Component
function Navbar() {
  const location = useLocation();
  const hideNav = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={unveilLogo} alt="Unveil logo" />
      </div>
      {!hideNav && ( // Only show nav links if NOT on login/signup pages
        <div className="nav-container">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/your-space">Your Space</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="auth-buttons">
            <Link to="/login"><button className="button">Login</button></Link>
            <Link to="/signup"><button className="button">Sign Up</button></Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <Routes>
          {/* Regular Pages */}
          <Route path="/" element={
            <div className="content-wrapper">
              <div className="content">
                <Home />
              </div>
              <AnimatedLandingImage 
                src={landingImage} 
                alt="Landing page image: Peer review" 
                className="landing-image" 
              />
            </div>
          } />
          <Route path="/games" element={<Games />} />
          <Route path="/your-space" element={<YourSpace />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />

          {/* Full Page Login & Signup (without nav links) */}
          <Route path="/signup" element={<div className="full-page"><Signup /></div>} />
          <Route path="/login" element={<div className="full-page"><Login /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
