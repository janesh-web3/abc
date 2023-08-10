import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Particle = () => {
  const particlesInit = useCallback(async engine => {
    // console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback( () => {
    
}, []);

  return (
    <Particles
      className='w-full h-full absolute translate-z-0'
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {enable : false},

        background: {
          color: {
            value: "",
          },
        },

        fpsLimit: 120,

        interactivity: {
          events: {
            onClick: {
              enable: false, //put true also
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90, //90 also
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },

        particles: {
          color: {
            value: "#0046FF",
          },
          links: {
            color: "#00FFF7",
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
          }, 
          collisions: {
            enable: true,
          }, // optional
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "tetrahedron",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },

        detectRetina: true,
      }}
    />
  );
};


