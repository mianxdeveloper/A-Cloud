import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import React, { useEffect } from "react";
const logo = new URL('../img/logo-trans.png', import.meta.url).href;


const Header = () => {

    useEffect(() => {

        document.getElementById('menu-toggle').addEventListener('click', function (event) {
            const menu = document.getElementById('menu');
            menu.classList.toggle('menu-active');
            event.stopPropagation();
          });
        


        const devBtn = document.querySelector('.dropdown-click');
        const dropdown = document.querySelector('.dropdown');

        const toggleDropdown = (e) => {
            e.preventDefault();
            if (dropdown) {
                dropdown.classList.toggle('dropdown-show');
            }
        };

        if (devBtn) devBtn.addEventListener('click', toggleDropdown);

        return () => {
            if (devBtn) devBtn.removeEventListener('click', toggleDropdown);
        };

    }, []);


    return (
        <header>
            <span className="logo">
                <img className="logo-img-click" src={logo} alt="Logo" />Cloud
            </span>
            <nav className="nav" id="menu">
                <NavLink to="/" className={({ isActive }) => isActive ? "clicked active2" : "clicked"}>
                    <i className="ri-home-8-line hidden-icon"></i>&nbsp;Home
                </NavLink>

                <NavLink to="/about" className={({ isActive }) => isActive ? "clicked active2" : "clicked"}>
                <i className="ri-bookmark-3-fill hidden-icon"></i>&nbsp;About
                </NavLink>

                <NavLink to="/services" className={({ isActive }) => isActive ? "clicked active2" : "clicked"}>
                <i className="ri-bookmark-3-fill hidden-icon"></i>&nbsp;Services
                </NavLink>


                <NavLink to="/contact" className={({ isActive }) => isActive ? "clicked active2" : "clicked"}>
                <i className="ri-contacts-book-3-fill hidden-icon"></i>&nbsp;Contact
                </NavLink>


            </nav>
            <span className="carting-system">
                <NavLink to="#" className="blog clicked">Blog</NavLink>
                <NavLink className="cartBTN" to="/contact" title="Let's work"><span className="cart-text"> Let's Work &nbsp;<i className="ri-arrow-right-up-long-line"></i></span></NavLink>
                <button className="menu" id="menu-toggle"><i className="ri-menu-3-fill"></i></button>
            </span>
        </header>

    );
};


export default Header;