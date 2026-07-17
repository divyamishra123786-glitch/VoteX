const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  "/candidate",
  express.static(path.join(__dirname, "public/candidate"))
);
app.use("/api/users", userRoutes);
app.use("/api/candidates", candidateRoutes);
app.get("/", (req, res) => {
  res.send("Hello VoteX Backend");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});