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
        <h1 className="hero-title">ITStudy</h1>
        <p className="hero-subtitle">Your gateway to IT success</p>
        <button className="btn btn-primary btn-lg">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
