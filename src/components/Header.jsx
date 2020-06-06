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

  return (
    <section className="welcome-section" id="welcome">
      <animated.div className="header-container" style={headerFadeIn}>
        <TypeIt
          element={"h2"}
          options={{ cursor: false, breaklines: true, speed: 70 }}
        >
          Hello, my name is Aaron! {"\n"}I'm a Full-Stack developer with a
          passion for {"\n"}problem solving, and building engaging user
          experiences.
        </TypeIt>
      </animated.div>
    </section>
  );
};

export default Header;
