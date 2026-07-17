const User = require("../models/User");

// Register User
const registerUser = async (req, res) => {
  console.log("REGISTER API HIT");
  console.log("Body Received:", req.body);

  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    console.log("User Created:", user);

    res.status(201).json(user);
  } catch (error) {
    console.log("REGISTER ERROR:", error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

// Login User
const loginUser = async (req, res) => {
  console.log("LOGIN API HIT");
  console.log("Body Received:", req.body);

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log("User Found:", user);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    res.status(200).json({
      message: "Login Successful",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};