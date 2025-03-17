const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Ensure JWT_SECRET exists
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ error: "Server misconfiguration: Missing JWT_SECRET" });
  }

  try {
    // Remove "Bearer " prefix if present
    const tokenValue = token.startsWith("Bearer ") ? token.slice(7) : token;

    // Verify token
    const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user data to request
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ msg: "Token has expired, please log in again" });
    }
    return res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = authMiddleware;
