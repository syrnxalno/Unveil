import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import unveilLogo from "./assets/unveil.png";
import "./App.css";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";

// Import pages
import Home from "./pages/Home";
import YourSpace from "./pages/YourSpace";
import YS from "./pages/YS"; // Import the new YS component
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import GetSupport from "./pages/GetSupport";
import ChatDiagnosis from "./pages/ChatDiagnosis";
import Dashboard from "./pages/Dashboard";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const hideNav = location.pathname === "/login" || location.pathname === "/signup";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // If a token exists, user is logged in
  }, [location.pathname]); // Re-run on path change

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={unveilLogo} alt="Unveil logo" />
        </Link>
      </div>
      {!hideNav && (
        <div className="nav-container">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/get-support">Talk it out</Link></li>
            <li><Link to="/your-space">Your Space</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {isLoggedIn && <li><Link to="/dashboard">Dashboard</Link></li>}
          </ul>
          <div className="auth-buttons">
            {isLoggedIn ? (
              <button className="button" onClick={handleLogout}>Logout</button>
            ) : (
              <>
                <Link to="/login"><button className="button">Login</button></Link>
                <Link to="/signup"><button className="button">Sign Up</button></Link>
              </>
            )}
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
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Support Section */}
          <Route path="/get-support" element={<GetSupport />} />
          <Route path="/chat-diagnosis" element={<ChatDiagnosis />} />

          {/* Your Space Section */}
          <Route path="/your-space" element={<YourSpace />} />
          <Route path="/your-space/ys" element={<YS />} /> {/* New route for the YS component */}

          {/* Community and Contact */}
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />

          {/* Authentication */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
