import axios from "axios";

// Use an environment variable if available; otherwise, default to localhost
const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/api/auth";

// Create an Axios instance for authentication-related requests
const authAxios = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Signup API
export const signup = async (userData) => {
  try {
    const response = await authAxios.post("/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    throw error;
  }
};

// Login API
export const login = async (userData) => {
  try {
    const response = await authAxios.post("/login", userData);
    // Optionally, store the token in localStorage for later use
    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error;
  }
};

// Example: Function to access a protected route
export const getProtectedData = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No token found");
    }
    const response = await authAxios.get("/protected/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Protected Data Error:", error.response?.data || error.message);
    throw error;
  }
};
