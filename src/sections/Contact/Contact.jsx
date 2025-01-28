import React, { useState } from "react";
import "./style/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFeedback("Message sent successfully!");
      } else {
        setFeedback(result.message || "Failed to send message.");
      }
    } catch (error) {
      setFeedback("An error occurred. Please try again later.");
    }
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__inputs">
            <div className="contact__input-group">
              <label htmlFor="name" className="contact__label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact__input"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__input-group">
              <label htmlFor="email" className="contact__label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact__input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__input-group">
              <label htmlFor="subject" className="contact__label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="contact__input"
                placeholder="Enter your subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact__input-group">
            <label htmlFor="message" className="contact__label">Message</label>
            <textarea
              id="message"
              name="message"
              className="contact__input contact__textarea"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="contact__button">Send Message</button>
        </form>

        {feedback && <p className="contact__feedback">{feedback}</p>}
      </div>
    </section>
  );
};

export default Contact;