import React, { useState } from "react";

const Contact = () => {
  // Create a state for object to be sent to the backend
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  return (
    <div className="contact-container">
      <h1>Contact Form will go here</h1>
      <form>
        <label>First Name</label>
        <input
          className="contact-input"
          name="firstName"
          placeholder="First Name"
        ></input>
        <label>Last Name</label>
        <input
          className="contact-input"
          name="lastName"
          placeholder="Last Name"
        ></input>
      </form>
    </div>
  );
};

export default Contact;
