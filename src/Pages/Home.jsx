import React from "react";
import "../css/Home.css";
import Footer from "../components/Footer";
import { Link, NavLink } from "react-router-dom";
import clipboardCopy from 'clipboard-copy';
import Subscribe from "../components/Subscribe";
import Form from "../components/Form";


const frontRightImg = new URL('../img/content-pana.svg', import.meta.url).href;

const webService = new URL('../img/web-development.svg', import.meta.url).href;
const EService = new URL('../img/ecommerceService.svg', import.meta.url).href;
const wordpressService = new URL('../img/wordpressService.svg', import.meta.url).href;
const FigmaService = new URL('../img/figmaService.svg', import.meta.url).href;

const JSEx = new URL('../img/javascript.svg', import.meta.url).href;
const ReactEx = new URL('../img/react.svg', import.meta.url).href;
const FigmaEx = new URL('../img/figma.svg', import.meta.url).href;

const Home = () => {

  const handleWhatsAppClick = () => {
    const phoneNumber = "923227904989";
    const message = "Hi, I want to work with you!";
    const url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
  };

  const email = "disclaimerface@gmail.com";

  const handleCopy = () => {
    clipboardCopy(email);
    alert("Email copied to clipboard!");
  };

  return (

    <div className="page">
      <div className="content">

        <div className="frontPage">
            <div className="leftFront">

              <h1 data-aos="fade-right" data-aos-duration="800">
                I'm <span>Abdul Rehman</span>
              </h1>

              <p data-aos="fade-right" data-aos-duration="1000">A Passionate Frontend developer, React, Wordpress having 2+ years of Experience in web innovation..</p>
              <span className="leftBtns">
                <NavLink data-aos="fade-right" data-aos-duration="1200" className="leftBtns1" onClick={handleWhatsAppClick}><i className="ri-whatsapp-line"></i> WhatsApp</NavLink>
                <NavLink data-aos="fade-right" data-aos-duration="1300" onClick={handleCopy} className="leftBtns2"><i className="ri-file-copy-line"></i>&nbsp; Copy Email</NavLink>
              </span>
            </div>

          <div className="rightFront">
              <img src={frontRightImg} />
          </div>

        </div>

        <section className="secondSection">
          <div className="secondSectionLeft" data-aos="fade-right" data-aos-duration="800">
            <h1><i className="ri-arrow-left-right-line"></i> Services I <span>Offered</span></h1>
            <div className="servicesSpan">
              <div className="services">
                <img src={webService} />
                <h3>Custom Web Applications</h3>
              </div>
              <div className="services">
                <img src={EService} />
                <h3>E-Commerce Development</h3>
              </div>
              <div className="services">
                <img src={wordpressService} />
                <h3>Wordpress Development</h3>
              </div>
              <div className="services">
                <img src={FigmaService} />
                <h3>Figma Designs</h3>
              </div>
            </div>
          </div>

          <div className="secondSectionRight" data-aos="fade-left" data-aos-duration="800">
            <h1><i className="ri-braces-line"></i> My <span>Expertise</span></h1>
            <div className="servicesSpan">
              <div className="services">
                <img src={JSEx} />
                <h3>JavaScript</h3>
              </div>
              <div className="services">
                <img src={ReactEx} />
                <h3>React</h3>
              </div>
              <div className="services">
                <img className="figmaEx" src={FigmaEx} />
                <h3>Figma</h3>
              </div>
              <div className="services">
                <img src={FigmaService} />
                <h3>Linux</h3>
              </div>
            </div>
          </div>

        </section>
      </div>
      <Form sideClassName="experienceContainer" formNextClass="Formpp" sideContent={
        <>
          <h1>Work <span>Experience</span></h1>
          <div>
            <p>1. Softapen</p>
            <iframe src="https://softapen.github.io/"></iframe>
          </div>
        </>
      } />
      <Subscribe />
      <Footer />
    </div>
  );
};


export default Home;