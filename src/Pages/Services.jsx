import React, { useEffect } from "react";
import "../css/services.css";
import Card from "../components/Card";

const img2 = new URL("../img/web.jpeg", import.meta.url).href;
const img3 = new URL("../img/design.avif", import.meta.url).href;
const img4 = new URL("../img/custom.jpg", import.meta.url).href;
const img5 = new URL("../img/figma.jpg", import.meta.url).href;
const img6 = new URL("../img/wordpress.jpg", import.meta.url).href;
const img7 = new URL("../img/ecommerce.png", import.meta.url).href;

const Services = () => {
  useEffect(() => {
    const filterButtons = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".Card");

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active3"));
        btn.classList.add("active3");

        const selectedCategory = btn.getAttribute("data-category");

        cards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");

          if (selectedCategory === "all" || cardCategory === selectedCategory) {
            card.style.display = "flex";
            card.classList.add("fade-in");
          } else {
            card.style.display = "none";
            card.classList.remove("fade-in");
          }
        });
      });
    });

    return () => {
      filterButtons.forEach((btn) => {
        btn.replaceWith(btn.cloneNode(true));
      });
    };
  }, []);

  return (
    <section className="page2" id="services">
      <div className="content2">
        {/* Section Heading */}
        <h2 className="services-heading">Services</h2>
        <p className="services-tagline">
          Helping businesses and individuals grow with modern web solutions
        </p>

        {/* Filter Tabs */}
        <div className="filterBtns">
          <button className="filter active3" data-category="all">
            All
          </button>
          <button className="filter" data-category="web">
            Web Development
          </button>
          <button className="filter" data-category="custom">
            Custom Design
          </button>
          <button className="filter" data-category="wordpress">
            Wordpress
          </button>
        </div>

        {/* Service Cards Grid */}
        <div className="AllCards">
          <Card title="Web Development" link="#" img={img2} category="web" />
          <Card title="Web Design" link="#" img={img3} category="web" />
          <Card title="Custom Design" link="#" img={img4} category="custom" />
          <Card title="Figma" link="#" img={img5} category="custom" />
          <Card title="Wordpress" link="#" img={img6} category="wordpress" />
          <Card title="Ecommerce Site" link="#" img={img7} category="web" />
        </div>
      </div>
    </section>
  );
};

export default Services;
