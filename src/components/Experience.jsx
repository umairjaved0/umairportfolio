import React from 'react';
import './experience.css';
import { motion } from 'framer-motion';
const MotionNav = motion.experiences;
const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Askari Shoe Project',
    duration: '2025 - Present',
    description: 'Building responsive interfaces using React and Tailwind. Collaborated with UI/UX team to enhance user experience.',
  },
  {
    title: 'Intern Developer',
    company: 'TechNova Pvt Ltd',
    duration: '2023 - 2024',
    description: 'Assisted in frontend tasks and learned real-world development practices including Git, API integration and deployment.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="timeline-date">{exp.duration}</span>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
