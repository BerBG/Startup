// routes/authRoutes.js

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
  updateProfile,
} = require("../controllers/authController");

const {
  saveStudentProfile,
} = require("../controllers/studentController");

const {
  saveTutorProfile,
} = require("../controllers/tutorController");

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.get("/logout", logoutUser);
router.put("/profile", authMiddleware, updateProfile);

// Rotas para perfis específicos
router.post("/students", authMiddleware, saveStudentProfile);
router.post("/tutors", authMiddleware, saveTutorProfile);

module.exports = router;
