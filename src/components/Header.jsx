import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Header = () => {
  const headerFadeIn = useSpring({
    config: { friction: 15, tension: 60 },
    marginTop: 100,
    opacity: 1,
    from: { opacity: 0, marginTop: -100 },
  });

  let count = 0;
  let headerMsg = "Hey there! My name is Aaron...";
  let typeSpeed = 40;

  const write = () => {
    if (count < headerMsg.length) {
      document.getElementById("headerMsg").innerHTML += headerMsg.charAt(count);
      count++;
      setTimeout(write, typeSpeed);
    }
  };

  useEffect(() => {
    write();
  }, []);

  return (
    <section className="welcome-section" id="welcome">
      <animated.div style={headerFadeIn}>
        <p id="headerMsg"></p>
        <h1>Let's talk!</h1>
      </animated.div>
    </section>
  );
};

export default Header;
