const express = require("express");
const authMiddleware = require("../middleware/authMiddleware"); // Import auth middleware
const User = require("../models/User"); // Import User model

const router = express.Router();

// Protected route (Dashboard)
router.get("/dashboard", authMiddleware, async (req, res) => {
  try {
    // Fetch user from database by ID
    const user = await User.findById(req.user.id).select("-password"); // Exclude password

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json({
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error("Dashboard Fetch Error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
