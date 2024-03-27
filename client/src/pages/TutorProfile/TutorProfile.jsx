import React, { useState } from "react";
import axios from "axios";
import "./TutorProfile.css";
import userImage from "../../assets/avatar.png";
import { toast } from "react-hot-toast";

const TutorProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    areas: [],
    description: "",
    photo: "",
    socialMedia: "",
    hourlyRate: "",
    availability: "",
    teachingMethod: "",
    testimonials: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await axios.post("/api/tutors", formData);
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
    <div className="tutor-profile">
      <div className="profile-container">
        <div className="left-section">
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
          <div className="profile-item">
            <h2>Email</h2>
            <div className="profile-text">
              <span className="ellipse"></span>
              <input
                type="text"
                name="socialMedia"
                placeholder="Digite seu email"
                value={formData.socialMedia}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="profile-item">
            <h2>Horários</h2>
            <div className="profile-text">
              <span className="ellipse"></span>
              <input
                type="text"
                name="availability"
                placeholder="Digite seus horários disponíveis"
                value={formData.availability}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="middle-section">
          <div className="profile-item">
            <h2>Biografia</h2>
            <div className="profile-text">
              <span className="ellipse"></span>
              <textarea
                name="description"
                placeholder="Digite sua biografia"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="profile-item">
            <h2>Ensino</h2>
            <div className="profile-text">
              <span className="ellipse"></span>
              <input
                type="text"
                name="teachingMethod"
                placeholder="Digite seu método de ensino"
                value={formData.teachingMethod}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="profile-item">
            <h2>Linkedin</h2>
            <div className="profile-text">
              <span className="ellipse"></span>
              <input
                type="text"
                name="resume"
                placeholder="Digite seu perfil do Linkedin"
                value={formData.resume}
                onChange={handleChange}
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
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                className="name-input" // Added class name for styling
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

export default TutorProfile;
