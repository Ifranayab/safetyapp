const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Chat = require("./models/chat"); // Import your Chat schema

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for frontend-backend communication

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/wecare_chat", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
// Add a new chat message
app.post("/api/chats", async (req, res) => {
  try {
    const { from, to, msg } = req.body;
    const chat = new Chat({
      from,
      to,
      msg,
      created_at: new Date(),
    });
    await chat.save();
    res.status(201).json(chat); // Return the saved chat object
  } catch (error) {
    res.status(500).json({ error: "Error saving chat message." });
  }
});

// Get all chat messages
app.get("/api/chats", async (req, res) => {
  try {
    const chats = await Chat.find().sort({ created_at: 1 }); // Fetch all messages, sorted by newest first
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ error: "Error fetching chat messages." });
  }
});

// Server Listener
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
