import React, { useState } from "react";

const Contact = () => {
  // Create a state for object to be sent to the backend
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  // Function to handle input inside of form
  const handleInput = (event) => {
    event.preventDefault();
    setContact({ ...contact, [event.target.name]: event.target.value });
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
  };

  return (
    <div className="contact-container">
      <h1>Contact Form will go here</h1>
      <form className="contact-form">
        <div className="contact-form-name">
          <div className="first-name-input">
            <label>First Name</label>
            <input
              className="contact-input"
              value={contact.firstName}
              onChange={handleInput}
              name="firstName"
              placeholder="First Name"
            ></input>
          </div>
          <div className="name-input">
            <label>Last Name</label>
            <input
              className="contact-input"
              value={contact.lastName}
              onChange={handleInput}
              name="lastName"
              placeholder="Last Name"
            ></input>
          </div>
        </div>
        <div className="email-input">
          <label>Email</label>
          <input
            className="contact-input"
            value={contact.email}
            onChange={handleInput}
            name="email"
            placeholder="Email"
          ></input>
        </div>
        <div className="message-input">
          <label>Message</label>
          <textarea
            style={{ paddingLeft: "4px" }}
            className="contact-input"
            value={contact.message}
            onChange={handleInput}
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
      </form>
      <button type="submit" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
};

export default Contact;
