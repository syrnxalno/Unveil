require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");

const app = express();

// 🔹 Connect to MongoDB
connectDB();

// 🔹 Middleware (CORS & JSON Parser)
app.use(cors({
  origin: [process.env.CLIENT_URL || "http://localhost:5173", "http://localhost:5175"], // Allow both frontend ports
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json()); // Parse JSON data

// 🔹 Routes
app.use("/api/auth", authRoutes); // Authentication routes (Public)
app.use("/api/protected", protectedRoutes); // Protected routes (Require Auth)

// 🔹 Root Route - API Status Check
app.get("/", (req, res) => {
  res.send("✅ API is running successfully 🚀");
});

// 🔹 Global Error Handler (Catches Unhandled Errors)
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// 🔹 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
