import React, { useEffect } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/images/hero-bg.png";

const Hero = () => {
  useEffect(() => {
    const heroContent = document.querySelector(".hero-content");
    heroContent.classList.add("visible");
  }, []);

  return (
    <div className="hero-container" style={{ height: "700px", position: "relative", overflow: "hidden" }}>
      {/* Pozadinska slika sa opacity efektom */}
      <div
        className="hero-image"
        style={{
          //backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "opacity(0.8)",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>

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
