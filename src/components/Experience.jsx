import React from "react";
import "../css/Experience.css";

const experiences = [
  {
    year: "2025 - Present",
    role: "REACT Developer",
    company: "Visqode",
    description:
      "Building responsive web applications using React, TailwindCSS, and modern JavaScript frameworks.",
  },
  {
    year: "2022 - 2025",
    role: "Frontend developer",
    company: "Abbas Tech Solutions",
    description:
      "Developed and maintained scalable frontend applications with smooth user experiences.",
  },
  {
    year: "2020 - 2022",
    role: "Intern Software Engineer",
    company: "Startup Hub",
    description:
      "Worked on API integrations, UI improvements, and learned agile development practices.",
  },
];

const Experience = () => {
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
                {exp.role} <span>@ {exp.company}</span>
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
