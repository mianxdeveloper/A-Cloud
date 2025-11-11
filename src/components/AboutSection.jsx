// AboutSection.jsx
import React, { useRef } from "react";
import "../css/AboutSection.css";
const profile = new URL("../img/Ab.jpeg", import.meta.url).href;
const CV = new URL("../files/AbdulRehmanResume.pdf", import.meta.url).href;

const AboutSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const downloadRef = useRef(null);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="profile-section">
            <div className="profile-image-container">
              <div className="profile-image">
                <img
                  src={profile}
                  alt="AbdulRehman's image"
                  className="profile-photo"
                />
              </div>
              <div className="profile-decoration"></div>
            </div>
          </div>

          <div className="text-content">
            <h2 className="section-title">About Me</h2>
            <h3 className="name-title">Abdul Rehman</h3>
            <p className="role-subtitle">Frontend Web Developer</p>

            <div className="description">
              <p>
                I'm a passionate frontend developer with 3+ years of experience
                crafting beautiful, responsive, and user-friendly web
                applications.
              </p>
              {/* <p>
                My approach combines technical expertise with creative
                problem-solving to deliver exceptional digital experiences that
                not only look great but also perform flawlessly across all
                devices.
              </p> */}
            </div>

            {/* <div className="skills-highlights">
              <div className="skill-category">
                <h4>Technologies</h4>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Next.js</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Styling</h4>
                <div className="skill-tags">
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">Tailwind</span>
                  <span className="skill-tag">Styled Components</span>
                  <span className="skill-tag">SASS</span>
                </div>
              </div>
            </div> */}

            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                View My Work <i className="ri-corner-right-down-fill"></i>
              </button>
              <a
                ref={downloadRef}
                href={CV}
                download="AbdulRehmanResume.pdf"
                style={{ display: "none" }}
              ></a>

              {/* Download CV button */}
              <button
                className="btn btn-secondary"
                onClick={() => downloadRef.current.click()}
              >
                Download CV <i className="ri-download-2-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
