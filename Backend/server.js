require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = require("./db/db");
connectDB();

// Routes
app.get("/", (req, res) => {
    res.send("Hlo from Backend !");
});

// Health Check Route
app.get("/healthCheck", (req, res) => {
    res.status(200).json({ message: "Server is healthy" });
});






// Start the Server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});