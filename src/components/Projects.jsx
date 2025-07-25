
// import React, { useState } from 'react';
// import './projects.css';
// import { motion } from 'framer-motion';
// const MotionNav = motion.projects;
// const allProjects = [
//   {
//     name: 'Visitor Portal',
//     description: 'A full-stack visitor management system with admin and gatekeeper roles.',
//     image: '/projects/visitor.PNG',
//     tech: ['React', 'Node.js', 'MongoDB'],
//     github: 'https://github.com/yourusername/visitor-portal',
//     demo: 'https://yourdomain.com/visitor-portal'
//   },
//   {
//     name: 'Typing Test',
//     description: 'Typing speed checker with dark mode and score tracking.',
//     image: '/projects/typing-speed.PNG',
//     tech: ['React', 'CSS'],
//     github: 'https://github.com/yourusername/typing-test',
//     demo: 'https://yourdomain.com/typing-test'
//   },
//   {
//     name: 'Currency Exchange',
//     description: 'Live currency converter with responsive layout.',
//     image: '/projects/currency-converter.PNG',
//     tech: ['React', 'REST API'],
//     github: 'https://github.com/yourusername/currency-exchange',
//     demo: 'https://yourdomain.com/currency-exchange'
//   },
//   {
//     name: 'Recipe Finder',
//     description: 'Find recipes with ingredients, nutrition and steps.',
//     image: '/projects/recipe.PNG',
//     tech: ['React', 'API'],
//     github: 'https://github.com/yourusername/recipe-finder',
//     demo: 'https://yourdomain.com/recipe-finder'
//   },
//   {
//     name: 'Color Changer',
//     description: 'Change background colors with a click.',
//     image: '/projects/colour.PNG',
//     tech: ['HTML', 'CSS', 'JS'],
//     github: 'https://github.com/yourusername/color-changer',
//     demo: 'https://yourdomain.com/color-changer'
//   },
//   {
//     name: 'Facebook Login Clone',
//     description: 'Facebook login page clone UI.',
//     image: '/projects/facebook.PNG',
//     tech: ['HTML', 'CSS'],
//     github: 'https://github.com/yourusername/facebook-login',
//     demo: 'https://yourdomain.com/facebook-login'
//   },
//   {
//     name: 'Instagram Login Clone',
//     description: 'Instagram login screen using HTML/CSS.',
//     image: '/projects/insta.PNG',
//     tech: ['HTML', 'CSS'],
//     github: 'https://github.com/yourusername/instagram-login',
//     demo: 'https://yourdomain.com/instagram-login'
//   },
//   {
//     name: 'QR Code Generator',
//     description: 'QR generator using user input.',
//     image: '/projects/QR.PNG',
//     tech: ['JavaScript'],
//     github: 'https://github.com/yourusername/qr-generator',
//     demo: 'https://yourdomain.com/qr-generator'
//   },
//   {
//     name: 'Quiz App',
//     description: 'Quiz with timer and result.',
//     image: '/projects/quiz.PNG',
//     tech: ['JS', 'HTML', 'CSS'],
//     github: 'https://github.com/yourusername/quiz-app',
//     demo: 'https://yourdomain.com/quiz-app'
//   }
// ];

// const techFilters = ['All', 'React', 'HTML', 'CSS', 'JavaScript', 'MongoDB', 'Node.js', 'API', 'REST API'];

// const Projects = () => {
//   const [filter, setFilter] = useState('All');

//   const filteredProjects =
//     filter === 'All'
//       ? allProjects
//       : allProjects.filter(project => project.tech.includes(filter));

//   return (
//     <section id="projects" className="projects-section">
//       <h2 className="section-title">My Projects</h2>

//       <div className="filter-buttons">
//         {techFilters.map((tech) => (
//           <button
//             key={tech}
//             className={filter === tech ? 'active-filter' : ''}
//             onClick={() => setFilter(tech)}
//           >
//             {tech}
//           </button>
//         ))}
//       </div>

//       <div className="projects-grid">
//         {filteredProjects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="project-card"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <img
//               src={project.image}
//               alt={project.name}
//               className="project-image"
//             />
//             <div className="project-content">
//               <h3>{project.name}</h3>
//               <p>{project.description}</p>
//               <div className="project-tags">
//                 {project.tech.map((tech, idx) => (
//                   <span key={idx} className="tag">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="project-links">
//                 <a href={project.demo} target="_blank" rel="noreferrer">
//                   Live Demo
//                 </a>
//                 <a href={project.github} target="_blank" rel="noreferrer">
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
















import React, { useState } from 'react';
import './projects.css';
import { motion } from 'framer-motion';
const MotionNav = motion.projects;
const allProjects = [
  {
    name: 'Visitor Portal',
    description: 'A full-stack visitor management system with admin and gatekeeper roles.',
    image: '/projects/visitor.PNG',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/your-username/visitor-portal',
    live: '#'
  },
  {
    name: 'Typing Test',
    description: 'Typing speed checker with dark mode and score tracking.',
    image: '/projects/typing-speed.PNG',
    tech: ['React', 'CSS'],
    github: 'https://github.com/your-username/typing-test',
    live: '#'
  },
  {
    name: 'Currency Exchange',
    description: 'Live currency converter with responsive layout.',
    image: '/projects/currency-converter.PNG',
    tech: ['React', 'REST API'],
    github: '#',
    live: '#'
  },
  {
    name: 'Recipe Finder',
    description: 'Find recipes with ingredients, nutrition and steps.',
    image: '/projects/recipe.PNG',
    tech: ['React', 'API'],
    github: '#',
    live: '#'
  },
  {
    name: 'Color Changer',
    description: 'Change background colors with a click.',
    image: '/projects/colour.PNG',
    tech: ['HTML', 'CSS', 'JS'],
    github: '#',
    live: '#'
  },
  {
    name: 'Facebook Login Clone',
    description: 'Facebook login page clone UI.',
    image: '/projects/facebook.PNG',
    tech: ['HTML', 'CSS'],
    github: '#',
    live: '#'
  },
  {
    name: 'Instagram Login Clone',
    description: 'Instagram login screen using HTML/CSS.',
    image: '/projects/insta.PNG',
    tech: ['HTML', 'CSS'],
    github: '#',
    live: '#'
  },
  {
    name: 'QR Code Generator',
    description: 'QR generator using user input.',
    image: '/projects/QR.PNG',
    tech: ['JavaScript'],
    github: '#',
    live: '#'
  },
  {
    name: 'Quiz App',
    description: 'Quiz with timer and result.',
    image: '/projects/quiz.PNG',
    tech: ['JS', 'HTML', 'CSS'],
    github: '#',
    live: '#'
  }
];

const techList = ['All', 'React', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'JS', 'API'];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? allProjects
      : allProjects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="filter-buttons sticky-filters">
        {techList.map((tech, i) => (
          <button
            key={i}
            className={filter === tech ? 'active-filter' : ''}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live</a>}
                {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
