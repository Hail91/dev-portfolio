import React from "react";
import { useSpring, animated } from "react-spring";
import TypeIt from "typeit-react";

const Header = () => {
  const headerFadeIn = useSpring({
    config: { friction: 15, tension: 60 },
    marginTop: 100,
    opacity: 1,
    from: { opacity: 0, marginTop: -100 },
  });

  // let info = [
  //   "Hello, my name is Aaron! \nI'm a Full-Stack developer with a passion for \nproblem solving, and building engaging user experiences.",
  //   "I'd love to get a conversation started!",
  // ];

  return (
    <section className="welcome-section" id="welcome">
      <animated.div className="header-container" style={headerFadeIn}>
        <TypeIt
          element={"h2"}
          options={{
            cursor: false,
            breaklines: true,
            speed: 60,
          }}
        >
          <p>
            Hello, my name is Aaron! {"\n"}I'm a Full-Stack developer with a
            passion for {"\n"}problem solving, and building engaging user
            experiences.
          </p>{" "}
          {"\n"}
          <p style={{ marginTop: "10px" }}>
            I'd love to get a conversation started!
          </p>
        </TypeIt>
        <div className="header-btns-container">
          <button style={{ marginRight: "20px" }}>View Resume (pdf)</button>
          <button>View Work</button>
        </div>
      </animated.div>
    </section>
  );
};

export default Header;
