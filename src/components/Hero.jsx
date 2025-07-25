
import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';
import { Download, Send } from 'lucide-react';
const MotionNav = motion.hero;
const Hero = () => {
  return (
    <motion.section 
      id="home"
      className="hero-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="hero-container">
        <div className="hero-text">
          <h1>Hi, I'm <span>Umair Javed</span></h1>
          <p className="typewriter">
            FRONTEND DEVELOPER | REACT | JAVASCRIPT | UI/UX DESIGNER
          </p>
          <div className="hero-buttons">
            <a href="/cv.pdf" className="btn primary" download>
              <Download size={18} /> Download CV
            </a>
            <a href="#contact" className="btn secondary">
              <Send size={18} /> Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/profile.jpg" alt="Umair Javed" className="profile-img" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

