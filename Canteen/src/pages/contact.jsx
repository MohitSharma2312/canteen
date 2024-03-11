import React, { useState } from "react";
import "../CSS/contact.css"; // Import CSS file for styling

const ContactPage = () => {
  // State variables to hold form data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [warning, setWarning] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = [
      { value: firstName, id: "firstName" },
      { value: lastName, id: "lastName" },
      { value: phoneNumber, id: "phoneNumber" },
      { value: email, id: "email" },
    ];

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
        setWarning(`Please fill out the ${inputs[i].id} field.`);
        return;
      }
    }

    console.log("Form submitted!");

    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setAddress("");
    setMessage("");
    setWarning("");
    setSuccess("Data has been recorded successfully!");

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              id="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              id="address"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          {warning && <p className="warning">{warning}</p>}
          {success && <p className="success">{success}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-image">
        <img src="phone-image.png" alt="Phone" />
      </div>
    </div>
  );
};

export default ContactPage;
