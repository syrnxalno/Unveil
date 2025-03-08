import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import unveilLogo from './assets/unveil.png';
import './App.css';
import Signup from './pages/SignupPage';
import Login from './pages/LoginPage';

// Import pages
import Home from './pages/Home';
import Games from './pages/Games';
import YourSpace from './pages/YourSpace';
import Community from './pages/Community';
import Contact from './pages/Contact';
import GameExplore from './pages/game-content'; // Import the GameContent page

function Navbar() {
  const location = useLocation();
  const hideNav = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={unveilLogo} alt="Unveil logo" />
      </div>
      {!hideNav && (
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
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/game-content" element={<GameExplore />} /> {/* Added Route */}
          <Route path="/your-space" element={<YourSpace />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
