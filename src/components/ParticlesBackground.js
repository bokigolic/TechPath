import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "transparent", // Transparent pozadina
          },
        },
        fpsLimit: 60, // Maksimalni FPS
        particles: {
          color: {
            value: "#ffffff", // Boja čestica
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2, // Brzina čestica
            direction: "none",
            random: false,
            straight: false,
          },
          number: {
            value: 50, // Broj čestica
          },
          opacity: {
            value: 0.5, // Prozirnost čestica
          },
          size: {
            value: 3, // Veličina čestica
          },
        },
        detectRetina: true, // Bolja grafika na Retina ekranima
      }}
    />
  );
};

export default ParticlesBackground;
