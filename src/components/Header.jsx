import React from "react";
import { useSpring, animated } from "react-spring";
import TypeIt from "typeit-react";
import pdf from "../files/Resume.pdf";
import profImage from "../images/Me.JPG";

const Header = () => {
  // Push header into view from top of page
  const headerFadeIn = useSpring({
    config: { friction: 15, tension: 60 },
    marginTop: 100,
    opacity: 1,
    from: { opacity: 0, marginTop: -100 },
  });
  // Animation to fade in header buttons after text finishes typing
  const btnFadeIn = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    visibility: "visible",
    from: { opacity: 0, visibility: "hidden" },
    delay: 7500,
  });

  const profileImageFade = useSpring({
    config: { duration: 3000 },
    opacity: 1,
    visibility: "visible",
    from: { opacity: 0, visibility: "hidden" },
    delay: 1500,
  });

  return (
    <section className="welcome-section" id="welcome">
      <animated.div className="header-container" style={headerFadeIn}>
        <animated.div style={profileImageFade}>
          <img src={profImage} alt="profile-img" />
        </animated.div>
        <TypeIt
          element={"h2"}
          options={{
            cursor: false,
            breaklines: true,
            speed: 35,
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
      </animated.div>
      <animated.div className="header-btns-container" style={btnFadeIn}>
        <a download href={pdf} style={{ marginRight: "20px" }}>
          Download Resume {""} <i class="fas fa-file-download"></i>
        </a>
        <a href="#projects">View Work</a>
      </animated.div>
    </section>
  );
};

export default Header;
