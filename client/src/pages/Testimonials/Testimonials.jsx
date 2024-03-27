import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    } else {
      tx = 0;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    } else {
      tx = -50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sarah Johnson</h3>
                  <span>New York, USA</span>
                </div>
              </div>
              <p>
                I found an amazing tutor on Skill Mentor who helped me master JavaScript in no time. Their personalized approach to teaching made learning enjoyable and effective.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>John Smith</h3>
                  <span>London, UK</span>
                </div>
              </div>
              <p>
                Skill Mentor connected me with a fantastic Python tutor. Thanks to their guidance, I was able to develop my skills and land a job in software development.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Jessica Brown</h3>
                  <span>Los Angeles, USA</span>
                </div>
              </div>
              <p>
                My experience with Skill Mentor has been incredible. My tutor helped me overcome my programming challenges, and now I feel confident pursuing a career in web development.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Michael Davis</h3>
                  <span>Toronto, Canada</span>
                </div>
              </div>
              <p>
                Thanks to Skill Mentor, I was able to learn Java from scratch and build my own Android app. The platform provided me with the resources I needed to succeed in my programming journey.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
