// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './about.css';
const MotionNav = motion.about;
const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="about-container">
        <div className="about-image">
          <img src="/profile.jpg" alt="Umair Javed" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate <strong>Frontend Developer</strong> with a love for building elegant and interactive user interfaces.
            With expertise in <strong>React.js, JavaScript, and modern UI/UX</strong>, I strive to create responsive and high-performance
            websites that offer a seamless experience across all devices.
          </p>
          <p>
            I’m also constantly learning and exploring new technologies like <strong>Framer Motion</strong>, <strong>Tailwind CSS</strong>,
            and full-stack tools to stay ahead in the fast-moving world of web development.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
