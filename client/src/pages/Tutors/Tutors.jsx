import React from "react";
import "./Tutors.css";
import tutor1_img from "../../assets/tutor1.jpg";
import tutor2_img from "../../assets/tutor2.jpg";
import tutor3_img from "../../assets/tutor3.jpg";
import tutor4_img from "../../assets/tutor4.jpg";

const Tutors = () => {
  return (
    <div className="tutors-container">
      <div className="tutors">
        <div className="tutor">
          <img src={tutor1_img} alt="Tutor 1" className="tutor-img" />
          <div className="tutor-overlay">
            <div className="tutor-info">
              <h3>John Doe</h3>
              <p>Experienced Full Stack Developer</p>
              <p>10+ years of industry experience</p>
              <p>Expertise in JavaScript, React, Node.js</p>
            </div>
          </div>
        </div>
        <div className="tutor">
          <img src={tutor2_img} alt="Tutor 2" className="tutor-img" />
          <div className="tutor-overlay">
            <div className="tutor-info">
              <h3>Jane Smith</h3>
              <p>Software Engineer & Educator</p>
              <p>Passionate about teaching coding</p>
              <p>Specializes in Python, Django, Flask</p>
            </div>
          </div>
        </div>
        <div className="tutor">
          <img src={tutor3_img} alt="Tutor 3" className="tutor-img" />
          <div className="tutor-overlay">
            <div className="tutor-info">
              <h3>Alexander Brown</h3>
              <p>Frontend Developer & Mentor</p>
              <p>Experience building responsive web applications</p>
              <p>Skilled in HTML, CSS, JavaScript, React</p>
            </div>
          </div>
        </div>
        <div className="tutor">
          <img src={tutor4_img} alt="Tutor 4" className="tutor-img" />
          <div className="tutor-overlay">
            <div className="tutor-info">
              <h3>Sarah Johnson</h3>
              <p>Computer Science Graduate</p>
              <p>Passionate about sharing knowledge</p>
              <p>Specializes in Java, C++, Data Structures</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutors;
