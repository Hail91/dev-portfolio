import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
// Animation imports
import { useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import { Spring, config } from "react-spring/renderprops";
import Particles from "react-particles-js";

function App() {
  const skillsHeader = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    visibility: "visible",
    from: { opacity: 0, visibility: "hidden" },
    delay: 7000,
  });

  const projectsHeader = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    visibility: "visible",
    from: { opacity: 0, visibility: "hidden" },
    delay: 8500,
  });

  const particlesOptions = {
    particles: {
      number: {
        value: 30,
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
          size: 10,
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
  return (
    <div>
      <Particles className="particles" params={particlesOptions} />
      <NavBar />
      <Header />
      <animated.div className="title-header" style={skillsHeader}>
        <h3>Skills</h3>
      </animated.div>
      <Skills />
      <animated.div style={projectsHeader} className="title-header">
        <h3>Projects</h3>
      </animated.div>
      <Projects />
      <VisibilitySensor once>
        {({ isVisible }) => (
          <Spring
            config={config.molasses}
            delay={100}
            to={{ opacity: isVisible ? 1 : 0 }}
          >
            {({ opacity }) => (
              <div style={{ opacity: 1 }} className="title-header">
                <h3 style={{ marginBottom: "5rem" }}>Get in touch!</h3>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <Contact />
      <a
        href="#nav"
        style={{
          textDecoration: "none",
          cursor: "pointer",
          color: "#197278",
          fontSize: "1.8rem",
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        Back to top
      </a>
      <Footer />
    </div>
  );
}

export default App;
