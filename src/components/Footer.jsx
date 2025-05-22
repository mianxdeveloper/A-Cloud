import React from "react";
import "../css/Footer.css";
import { Link, NavLink } from "react-router-dom";
const logoFooter = new URL('../img/logo-trans.png', import.meta.url).href;

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="upper-footer">
          <div className="left-upper-footer">
            <img src={logoFooter} />
            <p>This is a portfolio made by Abdul-Rehman using React with Parcel.</p>
            <span className="footer-icons">
              <NavLink to="https://github.com/mianxdeveloper" target="_blank" className="github"><i className="ri-github-fill"></i></NavLink>
              <NavLink to="https://www.instagram.com/mianxdeveloper/" target="_blank" className="instagram"><i className="ri-instagram-fill"></i></NavLink>
              <NavLink to="https://www.facebook.com/@mianxdeveloper" target="_blank" className="facebook"><i className="ri-facebook-circle-fill"></i></NavLink>
            </span>
          </div>
          <div className="right-upper-footer">
            <div className="social-links">
              <h1>Social</h1>
              <span className="link-span">
                <NavLink to="https://www.facebook.com/@mianxdeveloper" target="_blank" className="footer-links">Facebook</NavLink>
                <NavLink to="https://www.instagram.com/mianxdeveloper/" target="_blank" className="footer-links">Instagram</NavLink>
                <NavLink to="https://wa.me/923227904989" target="_blank" className="footer-links">WhatsApp</NavLink>
                <NavLink to="https://github.com/mianxdeveloper" target="_blank" className="footer-links">Github</NavLink>
              </span>
            </div>
            <div className="quick-links">
            <h1>Quick Links</h1>
            <span className="link-span">
                <NavLink to="/" className="footer-links">Home</NavLink>
                <NavLink to="/about" className="footer-links">About</NavLink>
                <NavLink to="/services" className="footer-links">Services</NavLink>
                <NavLink to="/contact" className="footer-links">Contact</NavLink>
              </span>
            </div>
            <div className="company-links">
            <h1>Projects</h1>
            <span className="link-span">
                <NavLink className="footer-links">Eshopping Mart</NavLink>
                <NavLink className="footer-links">Ebike Store</NavLink>
              </span>
            </div>
            <div className="support-links">
            <h1>Support</h1>
            <span className="link-span">
                <NavLink className="footer-links">Custom Development</NavLink>
                <NavLink className="footer-links">Hire Developer</NavLink>
              </span>
            </div>
          </div>
        </div>

        <hr />

        <div className="lower-footer">
          <p>Copyright <i className="ri-copyright-line"></i> Abdul Rehman Cloud 2025</p>
        </div>
      </div>
    </>
  );
};

export default Footer;