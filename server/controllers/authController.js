const User = require("../models/user");
const Student = require("../models/student");
const Tutor = require("../models/tutor");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is working");
};

// Register endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password, profileType } = req.body;
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

    const hashedPassword = await hashPassword(password);
    let newUser;

    // Create user in database based on profileType
    if (profileType === 'student') {
      newUser = await Student.create({
        name,
        email,
        password: hashedPassword,
      });
    } else if (profileType === 'tutor') {
      newUser = await Tutor.create({
        name,
        email,
        password: hashedPassword,
      });
    } else {
      return res.json({
        error: "Invalid profile type",
      });
    }

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

    // Check if passwords match
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
    }
    if (!match) {
      res.json({
        error: "Passwords do not match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
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
    const profileType = req.user.profileType;
    const updatedData = req.body;

    let updatedUser;
    if (profileType === "student") {
      updatedUser = await Student.findOneAndUpdate(
        { _id: userId },
        updatedData,
        { new: true }
      );
    } else if (profileType === "tutor") {
      updatedUser = await Tutor.findOneAndUpdate(
        { _id: userId },
        updatedData,
        { new: true }
      );
    } else {
      throw new Error("Invalid profile type");
    }

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
