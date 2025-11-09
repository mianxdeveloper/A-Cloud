import React, { useState, useEffect } from "react";
import "../css/ScrollToTop.css"; // make sure path is correct

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button className="scroll-to-top-btn" onClick={scrollToTop}>
        <i className="ri-arrow-up-line"></i>
      </button>
    )
  );
};

export default ScrollToTop;
