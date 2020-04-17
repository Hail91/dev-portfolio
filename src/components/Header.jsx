import React from "react";
import { useSpring, animated } from "react-spring";

const Header = () => {
  const headerFadeIn = useSpring({
    config: { friction: 15, tension: 60 },
    marginTop: 100,
    opacity: 1,
    from: { opacity: 0, marginTop: -100 },
  });
  return (
    <section className="welcome-section" id="welcome">
      <animated.div style={headerFadeIn}>
        <h1>Hey there! My name is Aaron...</h1>
        <h1>Let's talk!</h1>
      </animated.div>
    </section>
  );
};

export default Header;
