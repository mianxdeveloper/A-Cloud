import React, { useEffect } from "react";
import "../css/Experience.css";

const experiences = [
  {
    year: "11/2024 - 07/2025",
    role: "REACT Developer",
    company: "Visqode",
    description:
      "Building responsive web applications using React, TailwindCSS, and modern JavaScript frameworks.",
  },
  {
    year: "05/2024 - 10/2024",
    role: "Frontend developer Intern",
    company: "Mindra Solutions",
    description:
      "Developed and maintained scalable frontend applications with smooth user experiences.",
  },
];

const Experience = () => {
  useEffect(() => {
    function handleResize() {
      let contents = document.querySelectorAll(".timeline-content p");
      if (!contents.length) return;

      contents.forEach((content) => {
        if (window.innerWidth <= 495) {
          content.style.display = "none";
        } else {
          content.style.display = "inline-flex";
        }
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="experience" id="experience">
      <h2 className="experience-title">Experience</h2>
      <p className="experience-subtitle">
        My <span>professional</span> journey so far
      </p>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{exp.year}</span>
              <h3>
                {exp.role} <br /> <span>@ {exp.company}</span>
              </h3>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
