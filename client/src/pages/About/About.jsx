import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT THE PLATFORM</h3>
        <h2>Empowering Learners, Connecting Minds</h2>
        <p>
          Embark on an enriching journey of learning and growth with our
          platform. We offer a unique opportunity to connect learners with
          expert tutors, fostering one-to-one educational experiences tailored
          to individual needs. Our platform is designed to cultivate a vibrant
          learning community where learners can thrive and achieve their full
          potential in the world of programming.
        </p>
        <p>
          Through innovative teaching methodologies and personalized guidance,
          we empower learners to master programming skills and embark on
          fulfilling career paths. Whether you're a novice seeking to enter the
          world of coding or a seasoned enthusiast aiming to refine your skills,
          our platform provides the resources and support you need to succeed.
        </p>
        <p>
          Join our platform today and unlock endless possibilities for learning,
          growth, and success in the dynamic field of programming. Together,
          let's embark on a journey of exploration, discovery, and empowerment
          as we shape the future of technology, one lesson at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
