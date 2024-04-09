import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>SkillMentor</h2>
          <p>
            SkillMentor is your go-to platform for connecting with top
            programming mentors. Whether you're a beginner or a seasoned pro, we
            offer expert guidance in web development, data science, and more.
            Our carefully selected mentors provide personalized support to help
            you achieve your programming goals. Join us today and take the next
            step in your coding journey with SkillMentor.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Tutors</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@skillmentor.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © SkillMentor.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
