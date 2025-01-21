import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        At ITStudy, we are dedicated to providing top-quality education to help
        you achieve your goals in the IT world. Our courses are designed by
        industry experts and focus on practical skills that prepare you for the
        real world.
      </p>
      <div className="about-features">
        <div className="feature-item">
          <i className="fas fa-laptop-code feature-icon"></i>
          <h3>Hands-On Learning</h3>
          <p>Engage in real-world projects and practical exercises.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-user-friends feature-icon"></i>
          <h3>Expert Mentors</h3>
          <p>Learn from experienced professionals in the field.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-award feature-icon"></i>
          <h3>Certified Programs</h3>
          <p>Earn certificates to showcase your achievements.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
