// import React from 'react';
// import './footer.css';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// const MotionNav = motion.footer;
// const Footer = () => {
//   return (
//     <motion.footer
//       className="footer"
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, ease: 'easeOut' }}
//       viewport={{ once: true }}
//     >
//       <div className="footer-container">
//         <div className="footer-brand">Umair Javed</div>

//         <ul className="footer-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>

//         <div className="footer-social">
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//           <a href="https://www.linkedin.com/in/umair-javed-72bb4226a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//           <a href="umairjavedjaved506@gmail.com"><FaEnvelope /></a>
//         </div>
//       </div>

//       <p className="footer-copy">© {new Date().getFullYear()} Umair Javed. All rights reserved.</p>`
//     </motion.footer>
//   );
// };

// export default Footer;















import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <div className="footer-brand">Umair Javed</div>

        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-social">
          <a href="https://github.com/umairjaved0" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/umair-javed-72bb4226a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="umairjavedjaved506@gmail.com"><FaEnvelope /></a>
          <a href="https://www.instagram.com/unfav_umairr?igsh=YmFkY2FxcTcxNmZt" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/share/161oAYAqy4/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Umair Javed. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
