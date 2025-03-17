import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pfp from '../assets/pfp.jpeg';
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/protected/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("User Data from API:", response.data);
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
      {/* Sidebar */}
      <aside className="sidebar">
        <nav>
          <ul>
            <li className="active"><a href="#"> <h3>Dashboard</h3></a></li>
            <li><a href="#"> Profile</a></li>
            <li><a href="#"> Settings</a></li>
            <li><a href="#"> Help</a></li>
            <li><a href="#"> Resources</a></li>
            <li><a href="#"> Reports</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header>
          <h1>Welcome, <span>{userData?.username || "Archana"}!</span></h1>
          
          <div className="profile-icon">
            <img src={pfp} alt="User Avatar" />
          </div>
        </header>

        {/* Stats Cards */}
        <section className="stats-cards">
          <div className="card blue">
            <h3>1,245</h3>
            <p>Therapy Sessions <span>+30</span></p>
          </div>
          <div className="card pink">
            <h3>87%</h3>
            <p>Client Satisfaction <span>+5%</span></p>
          </div>
        </section>

        {/* Charts and Extra Content - Side by Side */}
        <section className="charts-wrapper">
          {/* Charts */}
          <div className="charts">
            <div className="chart sales">
              <h3>Mindfulness Progress</h3>
              <p>Monthly</p>
              <div className="graph-placeholder">📈</div>
            </div>
            <div className="chart visitors">
              <h3>Active Users</h3>
              <p>Weekly</p>
              <div className="graph-placeholder">📊</div>
            </div>
          </div>

          {/* Extra Content */}
          
        </section>
        
      </main>
     
    </div>
  );
};

export default Dashboard;
