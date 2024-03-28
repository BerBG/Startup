const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { comparePassword } = require("../helpers/auth");
const { hashPassword } = require("../helpers/auth");

const test = (req, res) => {
  res.json("test is working");
};

// Register endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check name entered
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    // Check password entered
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and must be at least 6 characters",
      });
    }
    // Check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already taken",
      });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create user in database with hashed password
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword, // Store hashed password in the database
    });

    return res.json({ user: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Login Endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // Check if passwords match using comparePassword from auth helper
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    } else {
      // Passwords do not match
      return res.json({
        error: "Passwords do not match",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProfile = (req, res) => {
  res.json(req.user);
};

const logoutUser = (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ Status: "Success" });
  } catch (error) {
    console.error("Error logging out:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const updatedData = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      updatedData,
      { new: true }
    );

    res.json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Internal Server Error updating profile" });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
  updateProfile,
};
