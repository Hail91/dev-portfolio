const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 2,
        color: "#197278",
      },
      polygon: {
        nb_sides: 4,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      color: "#197278",
      width: 2,
    },
    move: {
      enable: true,
      speed: 6,
      random: true,
      direction: "bottom",
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: ["repulse"],
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 800,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 800,
        size: 20,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
};

export default particlesOptions;
