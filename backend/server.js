require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Define Ports
const PORT = process.env.PORT || 5000;

// CORS Configuration
const corsOptions = {
  origin: [process.env.CLIENT_URL || "http://localhost:5173", "http://localhost:5175"], // Allow both frontend ports
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(express.json());

// Root Route - API Status Check
app.get("/", (req, res) => {
  res.send("Server is running");
});

// AUTHENTICATION & PROTECTED ROUTES
app.use("/api/auth", authRoutes); // Authentication routes (Public)
app.use("/api/protected", protectedRoutes); // Protected routes (Require Auth)

// CHATBOT API ROUTE
app.post("/api/chatbot", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log("Received message:", message);

    // Call Hugging Face API
    const hfResponse = await fetch(
      "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-alpha",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: message,
          parameters: {
            max_new_tokens: 50,
            temperature: 0.7,
            top_p: 0.9,
            do_sample: false,
            repetition_penalty: 1.2,
            truncate: 1024,
            return_full_text: true,
          },
        }),
      }
    );

    const data = await hfResponse.json();
    console.log("Hugging Face API Response:", JSON.stringify(data, null, 2));

    if (!data || !Array.isArray(data) || !data[0]?.generated_text) {
      console.error("Invalid API response:", data);
      return res.status(500).json({ error: "Invalid response from Hugging Face API" });
    }

    const botResponse = data[0].generated_text.trim() || "No response generated!";
    res.json({ response: botResponse });

  } catch (error) {
    console.error("Chatbot Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
