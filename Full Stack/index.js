import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.BASE_URL, // Sirf yeh origin allow hoga
  methods: ["GET", "POST", "PUT", "DELETE"],  // Sirf inhi methods ki permission
  allowedHeaders: ["Content-Type", "Authorization"], // Sirf inhi headers ki permission
  credentials: true // Agar cookies ya authentication headers use ho rahe hain
}));

app.use(express.json()); // Body parser
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

// Run on Request
app.get("/", (req, res) => {
  res.send("Cohort!");
});

app.get("/sandeep", (req, res) => {
  res.send("Sandeep!");
});

app.get("/sandy", (req, res) => {
  res.send("Sandy!");
})

// Connect to DB
connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})