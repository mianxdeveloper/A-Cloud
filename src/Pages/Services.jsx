import React, { useEffect } from "react";
import Footer from "../components/Footer";
import "../css/services.css";
import Card from "../components/Card";
import Subscribe from "../components/Subscribe";
import Label from "../components/Label";

const img1 = new URL('../img/logo.png', import.meta.url).href;
const img2 = new URL('../img/web.jpeg', import.meta.url).href;
const img3 = new URL('../img/design.avif', import.meta.url).href;
const img4 = new URL('../img/custom.jpg', import.meta.url).href;
const img5 = new URL('../img/figma.jpg', import.meta.url).href;
const img6 = new URL('../img/wordpress.jpg', import.meta.url).href;
const img7 = new URL('../img/ecommerce.png', import.meta.url).href;





const Services = () => {

  useEffect(() => {
    const filterButtons = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".Card");

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove("active3"));
        btn.classList.add("active3");

        const selectedCategory = btn.getAttribute("data-category");

        cards.forEach(card => {
          const cardCategory = card.getAttribute("data-category");

          if (selectedCategory === "all" || cardCategory === selectedCategory) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });

    // Cleanup event listeners when component unmounts
    return () => {
      filterButtons.forEach(btn => {
        btn.replaceWith(btn.cloneNode(true)); // Detaches event listener
      });
    };
  }, []);

  return (
    <div className="page2">
      <div className="content2">
        <Label Label="Services" />

        <div className="filterBtns">
          <button className="filter active3" data-category="all">All</button>
          <button className="filter" data-category="web">Web Development</button>
          <button className="filter" data-category="custom">Custom Design</button>
          <button className="filter" data-category="wordpress">Wordpress</button>
        </div>

        <div className="AllCards">
          <Card title="Web development" link="#" img={img2} category="web" />
          <Card title="Web Design" link="#" img={img3} category="web" />
          <Card title="Custom Design" link="#" img={img4} category="custom" />
          <Card title="Figma" link="#" img={img5} category="custom" />
          <Card title="Wordpress" link="#" img={img6} category="wordpress" />
          <Card title="Ecommerce Site" link="#" img={img7} category="web" />
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Services;
