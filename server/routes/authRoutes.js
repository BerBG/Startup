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
router.get("/profile", authMiddleware, getProfile);
router.get("/logout", logoutUser);
router.put("/profile", authMiddleware, updateProfile);

// Rota para registro de estudante
router.post("/student", authMiddleware, saveStudentProfile);

// Rota para registro de tutor
router.post("/tutor", authMiddleware, saveTutorProfile);

module.exports = router;
