import React from "react";
import "../css/Home.css";
import Footer from "../components/Footer";
import { Link, NavLink } from "react-router-dom";
import clipboardCopy from "clipboard-copy";
import About from "../components/About";
import SkillsBar from "../components/SkillBar";
import Services from "./Services";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const Home = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "923227904989";
    const message = "Hi, I want to work with you!";
    const url =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  };

  const email = "disclaimerface@gmail.com";

  const handleCopy = () => {
    clipboardCopy(email);
    alert("Email copied to clipboard!");
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page">
      <div className="content">
        <div className="frontPage">
          <div className="leftFront">
            <h3
              data-aos="fade-right"
              data-aos-duration="700"
              className="introName"
            >
              Hello, I'm Abdul Rehman
            </h3>
            <h1 data-aos="fade-right" data-aos-duration="800">
              <span>Software Enginner</span>
            </h1>

            <p data-aos="fade-right" data-aos-duration="1000">
              A Passionate Frontend developer, React, Wordpress having 2+ years
              of Experience in web innovation.
            </p>
            <span className="leftBtns">
              <NavLink
                data-aos="fade-right"
                data-aos-duration="1200"
                className="leftBtns1"
                onClick={handleWhatsAppClick}
              >
                <i className="ri-whatsapp-line"></i> WhatsApp
              </NavLink>
              <NavLink
                data-aos="fade-right"
                data-aos-duration="1300"
                onClick={handleCopy}
                className="leftBtns2"
              >
                <i className="ri-file-copy-line"></i>&nbsp; Copy Email
              </NavLink>
            </span>

            {/* Scroll Down Arrow Button */}
            <button
              className="scroll-down-btn"
              onClick={handleScrollToAbout}
              aria-label="Scroll to About Section"
            >
              <i className="ri-arrow-down-s-line"></i>
            </button>
          </div>
        </div>

        <SkillsBar />
        <About />
        <Experience />
        <Services />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
