// ContactForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css';
import { toast } from "react-toastify";

function Contact() {
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ympac2i";
    const templateId = "template_5amc9d8";
    const publicKey = "WjXFTEx9D_FLBa_Cx";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "PageTurners",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          // console.log("Email sent successfully!", response);
          toast.success("Email sent successfully!");
          // Reset the form after successful submission
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast.warn("Email sending failed:", error);
        }
      );
  };

  return (
    <>
      <div className="contact-section">
        <div className="img-banner-section">
          <img
            src="./pageturners-banner.jpg"
            alt="Who we are banner"
            className="img-banner"
          />
        </div>
        <div className="contact-wrapper">
          <div className="contact-text">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-sub-text">We would love to hear from you!</p>
            <ul className="contact-tinz">
              <li>
                <span>Email: </span> maryjumoke03@gmail.com
              </li>
              <li>
                <span>Phone: </span> 0909 993 3410
              </li>
              <li>
                <span>Address: </span> 1, Eleyele Street, Ile-Ife, Osun State.
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
