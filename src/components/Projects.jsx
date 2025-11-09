// Projects.jsx
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import "../css/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "VisQode",
      description: "Modern, responsive web platform with interactive design.",
      stack: "Next + Tailwind",
      image: "https://ibwmahin.github.io/DemoImg/visqode.png",
      liveUrl: "https://visqode.netlify.app/",
      githubUrl: "https://github.com/mianxdeveloper/visqode",
    },
    {
      title: "E-Commerce Store",
      description: "Responsive React e-commerce site with smooth animations.",
      stack: "React + Parcel",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      liveUrl: "https://manaeshoppingmartllc.com/",
      githubUrl: "https://github.com/mianxdeveloper/EshoppingMart",
    },
    {
      title: "ALGA",
      description:
        "ALGA - AI-powered agents for smart lead generation and engagement.",
      stack: "React + API",
      image:
        "https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D&auto=format&fit=crop&q=80&w=1032", // AI or business/technology theme
      liveUrl: "https://alga.mindrasolutions.com/",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-content">
          <h2 className="projects-title">
            Featured <span>Projects</span>
          </h2>
          <p className="projects-subtitle">Some of my recent work</p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "backwards",
                }}
              >
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-buttons">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-button"
                      >
                        <ExternalLink className="button-icon" />
                        Live
                      </a>
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-button"
                        >
                          <Github className="button-icon" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-stack">{project.stack}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
