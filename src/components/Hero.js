import React, { useEffect } from "react";
import "../styles/Hero.css";

const Hero = () => {
  useEffect(() => {
    const heroContent = document.querySelector(".hero-content");
    heroContent.classList.add("visible");
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-image"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to ITStudy</h1>
        <p className="hero-subtitle">Learn. Build. Succeed in the IT World</p>
        <button className="btn btn-primary btn-lg hero-btn">Start Your Journey</button>
      </div>
    </div>
  );
};

export default Hero;
