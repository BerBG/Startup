import React, { useState } from "react";
import axios from "axios";
import "./StudentProfile.css";
import userImage from "../../assets/avatar.png";
import { toast } from "react-hot-toast";

const StudentProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    experience: "",
    areas: [],
    photo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Altere a rota de '/api/students' para '/profile'
      await axios.put("/profile", formData);
      toast.success("Perfil salvo com sucesso!");
    } catch (error) {
      setErrorMessage(error.response.data.message);
      toast.error("Erro ao salvar perfil.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="student-profile">
      <div className="profile-container">
        <div className="left-section">
          <div className="profile-item">
            <h2>Idade</h2>
            <div className="profile-text">
              <span className="ellipse"></span>
              <input
                type="text"
                name="age"
                placeholder="Digite sua idade"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="profile-item">
            <h2>Senioridade</h2>
            <div className="profile-text">
              <span className="ellipse"></span>
              <input
                type="text"
                name="experience"
                placeholder="Digite sua senioridade"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="profile-item">
            <h2>Tecnologias</h2>
            <div className="profile-text">
              <span className="ellipse"></span>
              <input
                type="text"
                name="areas"
                placeholder="Digite suas tecnologias"
                value={formData.areas.join(", ")}
                onChange={(e) => {
                  const tags = e.target.value.split(",");
                  setFormData({ ...formData, areas: tags });
                }}
              />
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="profile-image-container">
            <div className="profile-image">
              <img src={userImage} alt="Profile" />
            </div>
            <div className="profile-text">
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={handleChange}
                className="name-input"
              />
            </div>
          </div>
          <button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
            {isSubmitting ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
  );
};

export default StudentProfile;
