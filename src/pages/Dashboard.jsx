import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
          headers: { Authorization: `Bearer ${token}` }
        });

        setUserData(response.data);
      } catch (err) {
        console.error("Dashboard Fetch Error:", err);
        setError("Failed to fetch dashboard data. Please try again.");
      }
    };

    fetchDashboardData();
  }, [navigate]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : userData ? (
        <div>
          <h2>Welcome, {userData.username}!</h2>
          <p>Email: {userData.email}</p>
          <button onClick={() => {
            localStorage.removeItem("token");
            navigate("/login"); // Logout and redirect to login
          }}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
