const Tutor = require("../models/tutor");

const saveTutorProfile = async (req, res) => {
  try {
    const { name, experience, areas, description, photo, email, availability, teachingMethod, socialMedia } = req.body;
    const newTutor = await Tutor.create({
      name,
      experience,
      areas,
      description,
      photo,
      email,
      availability,
      teachingMethod,
      socialMedia,
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
