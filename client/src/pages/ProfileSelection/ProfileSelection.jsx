import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ProfileSelection.css'
import imagemTutor from '../../assets/imagem-tutor.jpg'; 
import imagemAluno from '../../assets/imagem-aluno.jpg';

const ProfileSelection = () => {
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();

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
