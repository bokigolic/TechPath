import React from "react";
import "../styles/About.css"; // Lokalni CSS za About sekciju

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          At ITStudy, we are committed to transforming your IT skills into a professional career.
          With tailored courses, expert mentors, and hands-on projects, we help you achieve your goals.
        </p>
        <div className="about-icons">
          <div className="icon-item">
            <i className="fas fa-laptop-code"></i>
            <p>Practical Learning</p>
          </div>
          <div className="icon-item">
            <i className="fas fa-user-friends"></i>
            <p>Expert Mentors</p>
          </div>
          <div className="icon-item">
            <i className="fas fa-award"></i>
            <p>Certified Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
