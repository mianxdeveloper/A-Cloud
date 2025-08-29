import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>
          Get in <span>Touch</span>
        </h2>
        <p>Let’s work together to build something great</p>
      </div>

      <div className="contact-content">
        {/* Left side - Contact Info */}
        <div className="contact-info">
          <div className="info-box">
            <i className="ri-mail-line"></i>
            <span>disclaimerface@gmail.com</span>
          </div>
          <div className="info-box">
            <i className="ri-phone-line"></i>
            <span>+92 3227904989</span>
          </div>
          <div className="info-box">
            <i className="ri-map-pin-line"></i>
            <span>Lahore, Pakistan</span>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
