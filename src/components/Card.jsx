import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Card.css";

const Card = ({ title, link, img, category }) => {
    return (
        <div className="Card" data-category={category}  data-aos="fade-up" data-aos-duration="800">
            <img src={img} alt={title} />
            <div className="overly"></div>
            <span className="card-content">
                <h1>{title}</h1>
                <NavLink to={link} className="learnMore">Learn more</NavLink>
            </span>
        </div>
    );
};

export default Card;