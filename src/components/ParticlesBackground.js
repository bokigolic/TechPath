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
            value: "#00aaff", // Svetloplava boja
          },
          links: {
            color: "#00aaff", // Boja linija među česticama
            distance: 120,
            enable: true,
            opacity: 0.5,
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
