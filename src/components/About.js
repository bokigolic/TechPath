import React from "react";
import "../styles/About.css";
import teamworkImage from "../assets/images/teamwork.jpg";
import mentoringImage from "../assets/images/mentoring.jpg";
import learningImage from "../assets/images/learning.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        At ITStudy, we are committed to transforming your IT skills into a professional career.
        With tailored courses, expert mentors, and hands-on projects, we help you achieve your goals.
      </p>

      {/* Sekcija sa slikama */}
      <div className="about-images">
        <img src={teamworkImage} alt="Teamwork" className="about-image" />
        <img src={mentoringImage} alt="Mentoring" className="about-image" />
        <img src={learningImage} alt="Learning" className="about-image" />
      </div>

      {/* Ikone sa animacijama */}
      <div className="about-icons">
        <div className="icon-item animated-icon">
          <i className="fas fa-laptop-code"></i>
          <p>Practical Learning</p>
        </div>
        <div className="icon-item animated-icon">
          <i className="fas fa-user-friends"></i>
          <p>Expert Mentors</p>
        </div>
        <div className="icon-item animated-icon">
          <i className="fas fa-award"></i>
          <p>Certified Courses</p>
        </div>
      </div>
    </div>
  );
};

export default About;
