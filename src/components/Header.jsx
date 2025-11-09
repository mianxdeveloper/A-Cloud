import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
const logo = new URL("../img/logo-trans.png", import.meta.url).href;

const Header = () => {
  useEffect(() => {
    document
      .getElementById("menu-toggle")
      .addEventListener("click", function (event) {
        const menu = document.getElementById("menu");
        menu.classList.toggle("menu-active");
        event.stopPropagation();
      });

    const devBtn = document.querySelector(".dropdown-click");
    const dropdown = document.querySelector(".dropdown");

    const toggleDropdown = (e) => {
      e.preventDefault();
      if (dropdown) {
        dropdown.classList.toggle("dropdown-show");
      }
    };

    if (devBtn) devBtn.addEventListener("click", toggleDropdown);

    // ✅ Smooth scrolling without hash in URL
    const links = document.querySelectorAll('a[href^="#"]');
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", " ");
      }
    };
    links.forEach((link) => link.addEventListener("click", handleScroll));

    // ✅ Header background toggle on scroll
    const header = document.querySelector("header");
    const handleScrollBg = () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled-header");
      } else {
        header.classList.remove("scrolled-header");
      }
    };
    window.addEventListener("scroll", handleScrollBg);

    return () => {
      if (devBtn) devBtn.removeEventListener("click", toggleDropdown);
      links.forEach((link) => link.removeEventListener("click", handleScroll));
      window.removeEventListener("scroll", handleScrollBg);
    };
  }, []);

  return (
    <header>
      <span className="logo">
        {/* <img className="logo-img-click" src={logo} alt="Logo" /> */}
        ABDUL - REHMAN
      </span>
      <nav className="nav" id="menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "clicked active2" : "clicked"
          }
        >
          <i className="ri-home-8-line hidden-icon"></i>&nbsp;Home
        </NavLink>

        <a href="#about" className="clicked">
          <i className="ri-information-line hidden-icon"></i>&nbsp;About
        </a>

        <a href="#experience" className="clicked">
          <i className="ri-user-community-line hidden-icon"></i>&nbsp;Experience
        </a>

        <a href="#services" className="clicked">
          <i className="ri-service-line hidden-icon"></i>&nbsp;Services
        </a>

        <a href="#projects" className="clicked">
          <i className="ri-contacts-book-3-line hidden-icon"></i>&nbsp;Projects
        </a>
      </nav>
      <span className="carting-system">
        <NavLink to="#" className="blog clicked">
          Blog
        </NavLink>
        <a href="#contact" className="clicked cartBTN">
          Contact <i className="ri-arrow-right-up-long-line"></i>
        </a>
        <button className="menu" id="menu-toggle">
          <i className="ri-menu-3-fill"></i>
        </button>
      </span>
    </header>
  );
};

export default Header;
