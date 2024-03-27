// controllers/studentController.js
const Student = require("../models/student");

const saveStudentProfile = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newStudent = await Student.create({
      name,
      email,
      password,
    });
    res.json(newStudent);
  } catch (error) {
    console.error("Erro ao salvar perfil de estudante:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = {
  saveStudentProfile,
};
