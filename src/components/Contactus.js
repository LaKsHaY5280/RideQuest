import React, { useState } from "react";

export default function ContactUs(props) {
  const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted!");
      setSubmitted(true);
    };

    return (
      <div
        className={`form-container  my-5 ${
          props.mode === "dark" ? "white-text" : ""
        }`}
      >
        {submitted ? (
          <p className="text-success">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        )}
      </div>
    );
  };

  return (
    <div className="tfix">
      <div className={`my-5 ${props.mode === "dark" ? "text-white" : ""}`}>
        <h2>Contact Us</h2>
        <ContactForm />
      </div>
    </div>
  );
}
