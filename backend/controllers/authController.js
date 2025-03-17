const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator"); // For email validation

// Signup
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input fields
    if (!username || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "Invalid email format" });
    }

    // Normalize email (convert to lowercase)
    const normalizedEmail = email.toLowerCase();

    // Check password strength
    if (password.length < 6) {
      return res.status(400).json({ msg: "Password must be at least 6 characters long" });
    }

    // Check if user already exists
    let user = await User.findOne({ email: normalizedEmail });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Ensure JWT_SECRET is available
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ error: "Server misconfiguration: Missing JWT_SECRET" });
    }

    // Create new user
    user = new User({ username, email: normalizedEmail, password: hashedPassword });
    await user.save();

    // Generate Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      msg: "User registered successfully",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Normalize email (convert to lowercase)
    const normalizedEmail = email.toLowerCase();

    // Check if user exists
    let user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Ensure JWT_SECRET is available
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ error: "Server misconfiguration: Missing JWT_SECRET" });
    }

    // Generate Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
