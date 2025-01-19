import React from "react";
import ParticlesBackground from "./ParticlesBackground"; // Pozadina sa česticama
import "../styles/Hero.css"; // Lokalni CSS stilovi

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Pozadinske čestice */}
      <ParticlesBackground />

      {/* Pozadinski gradient */}
      <div className="animated-bg"></div>

      {/* Sadržaj Hero sekcije */}
      <div className="hero-content">
        <h1 className="hero-title">Welcome to ITStudy</h1>
        <p className="hero-subtitle">Learn. Build. Succeed in the IT World</p>
        <button className="btn btn-primary btn-lg hero-btn">Start Your Journey</button>
      </div>
    </div>
  );
};


export default Hero;
