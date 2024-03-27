import React from "react";
import "./Programs.css";
import meeting_1 from "../../assets/meeting-1.jpg";
import meeting_2 from "../../assets/meeting-2.jpg";
import meeting_3 from "../../assets/meeting-3.jpg";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={meeting_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Expand your programming skills with the guidance of a specialized tutor, in interactive one-on-one sessions.</p>
        </div>
      </div>
      <div className="program">
        <img src={meeting_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Develop your programming skills in a personalized way, in individual tutoring sessions tailored to your specific needs.</p>
        </div>
      </div>
      <div className="program">
        <img src={meeting_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Enhance your understanding of programming through intensive and personalized studies, with the individualized support of a tutor.</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
