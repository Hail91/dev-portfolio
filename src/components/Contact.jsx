import React, { useState } from "react";
import { Checkmark } from "react-checkmark";
import VisibilitySensor from "react-visibility-sensor";
import { Spring, config } from "react-spring/renderprops";

const Contact = () => {
  // Create a state for object to be sent to the backend
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  // Function to handle input inside of form
  const handleInput = (event) => {
    event.preventDefault();
    setContact({ ...contact, [event.target.name]: event.target.value });
  };
  // Resets form after API call resolves
  const formReset = () => {
    setContact({ firstName: "", lastName: "", email: "", message: "" });
  };

  // Function to send form data to backend API
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://portfolio-be-ag.herokuapp.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsLoading(false);
    formReset();
  };

  return (
    <VisibilitySensor partialVisibility={true} minTopValue={5} once>
      {({ isVisible }) => (
        <Spring
          config={config.molasses}
          delay={100}
          to={{ opacity: isVisible ? 1 : 0 }}
        >
          {({ opacity }) => (
            <div style={{ opacity }} id="contact" className="contact-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="name-form">
                  <div className="first-name-input">
                    <label>
                      First Name<span> *</span>
                    </label>
                    <input
                      style={{ marginTop: "5px" }}
                      className="contact-input"
                      value={contact.firstName}
                      onChange={handleInput}
                      name="firstName"
                      placeholder="First Name"
                    ></input>
                  </div>
                  <div className="name-input">
                    <label>
                      Last Name<span> *</span>
                    </label>
                    <input
                      style={{ marginTop: "5px" }}
                      className="contact-input"
                      value={contact.lastName}
                      onChange={handleInput}
                      name="lastName"
                      placeholder="Last Name"
                    ></input>
                  </div>
                </div>
                <div className="email-input">
                  <label>
                    Email<span> *</span>
                  </label>
                  <input
                    className="contact-input"
                    value={contact.email}
                    onChange={handleInput}
                    name="email"
                    placeholder="Email"
                  ></input>
                </div>
                <div className="message-input">
                  <label>
                    Message<span> *</span>
                  </label>
                  <textarea
                    style={{
                      fontSize: "2rem",
                      paddingLeft: "6px",
                      paddingTop: "5px",
                      width: "25rem",
                      height: "7rem",
                    }}
                    className="message-box"
                    value={contact.message}
                    onChange={handleInput}
                    name="message"
                    placeholder="Message"
                  ></textarea>
                  <h3 style={{ marginTop: "5px", fontSize: "1.3rem" }}>
                    <span>* </span>Indicates a required field
                  </h3>
                  <button className="send-btn" type="submit">
                    {isLoading ? (
                      <p>send</p>
                    ) : (
                      <Checkmark size={24} color={"#197278"} />
                    )}
                  </button>
                </div>
              </form>
              <div className="contact-info">
                <h2>Contact Information</h2>
                <div className="contact-methods">
                  <i className="fas fa-phone-alt fa-lg"></i>
                  <p>+1 315-254-8427</p>
                </div>
                <div className="contact-methods">
                  <i className="far fa-envelope fa-lg"></i>
                  <p>aarongillies88@gmail.com</p>
                </div>
                <div className="contact-methods dynamic-hover">
                  <i className="fab fa-twitter fa-lg"></i>
                  <p>
                    <a href="https://twitter.com/UpstateCoder91" target="_">
                      twitter.com/UpstateCoder91
                    </a>
                  </p>
                </div>
                <div className="contact-methods dynamic-hover">
                  <i className="fab fa-linkedin fa-lg"></i>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/aarongillies/"
                      target="_"
                    >
                      linkedin.com/in/aarongillies
                    </a>
                  </p>
                </div>
              </div>
              <div className="mobile-additional-contact">
                <a href="https://twitter.com/UpstateCoder91" target="_">
                  <i
                    className="fab fa-twitter fa-3x"
                    style={{ color: "#197278" }}
                  ></i>
                </a>
                <a href="https://www.linkedin.com/in/aarongillies/" target="_">
                  <i
                    className="fab fa-linkedin fa-3x"
                    style={{ color: "#197278" }}
                  ></i>
                </a>
                <a href="https://github.com/Hail91" target="_">
                  <i
                    class="fab fa-github fa-3x"
                    style={{ color: "#197278" }}
                  ></i>
                </a>
              </div>
            </div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
};

export default Contact;
