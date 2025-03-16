import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token"); // Get token from localStorage

      if (!token) {
        navigate("/login"); // Redirect to login if no token
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/protected/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("User Data from API:", response.data); // Debugging line
        setUserData(response.data);
      } catch (err) {
        console.error("Dashboard Fetch Error:", err);
        setError("Failed to fetch dashboard data. Please try again.");
      }
    };

    fetchDashboardData();
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : userData ? (
        <div className="user-info">
          <h2>Welcome, <span className="username">{userData.username || "Unknown User"}</span>!</h2>
          <p>Email: <span className="user-email">{userData.email || "Not available"}</span></p>
          <button className="logout-btn" onClick={() => {
            localStorage.removeItem("token");
            navigate("/login"); // Logout and redirect to login
          }}>
            Logout
          </button>
        </div>
      ) : (
        <p className="loading-text">Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
