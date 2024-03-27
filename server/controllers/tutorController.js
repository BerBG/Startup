// controllers/tutorController.js
const Tutor = require("../models/tutor");

const saveTutorProfile = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newTutor = await Tutor.create({
      name,
      email,
      password,
    });
    res.json(newTutor);
  } catch (error) {
    console.error("Erro ao salvar perfil de tutor:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = {
  saveTutorProfile,
};
