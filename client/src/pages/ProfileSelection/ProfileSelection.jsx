import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import './ProfileSelection.css'
import imagemTutor from '../../assets/imagem-tutor.jpg'; 
import imagemAluno from '../../assets/imagem-aluno.jpg';

const ProfileSelection = () => {
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();
  const { user, updateUser } = useContext(UserContext); // Adicione updateUser aqui

  useEffect(() => {
    // Verifica se o usuário está autenticado
    if (user) {
      // Verifica se é a primeira vez do usuário no aplicativo
      if (user.firstVisit) {
        // Atualiza o estado do usuário para indicar que ele não está mais em sua primeira visita
        updateUser({ ...user, firstVisit: false }).then(() => {
          // Redireciona para a seleção de perfil se for sua primeira visita
          navigate("/profile-selection");
        });
      } else {
        // Redireciona para o dashboard se não for sua primeira visita
        navigate("/dashboard");
      }
    }
  }, [user, navigate, updateUser]);

  const handleSelectProfile = (profile) => {
    setProfile(profile);
    navigate(`/profile/${profile}`);
  };

  return (
    <div className="profile-selection">
      <h1 className="title-profile">Choose Your Profile</h1>
      <div className="buttons">
        <div
          className="profile-card tutor-button"
          onClick={() => handleSelectProfile("tutor")}
        >
          <img src={imagemTutor} alt="Tutor" />
          <h3>Tutor</h3>
        </div>
        <div
          className="profile-card student-button"
          onClick={() => handleSelectProfile("student")}
        >
          <img src={imagemAluno} alt="Aluno" />
          <h3>Student</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileSelection;
