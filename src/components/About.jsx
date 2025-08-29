import React from "react";
import { motion } from "framer-motion";
import { Code2, Laptop, Globe } from "lucide-react"; // icons
import "../css/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Heading */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">Who I Am</h2>
          <p className="about-subtitle">
            Passionate about crafting <span>clean code</span> &
            <span> delightful experiences</span>.
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="about-cards">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Code2 className="about-icon" />
            <h3>Developer</h3>
            <p>
              Skilled in <span>React and Laravel</span>. I love writing clean,
              scalable, and optimized code.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Laptop className="about-icon" />
            <h3>UI/UX Enthusiast</h3>
            <p>
              Focused on building <span>modern interfaces</span> that are
              visually appealing and user-friendly.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Globe className="about-icon" />
            <h3>Problem Solver</h3>
            <p>
              Love tackling challenges & creating <span>solutions</span> that
              have real-world impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
