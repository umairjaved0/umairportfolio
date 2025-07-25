


// import React from 'react';
// import './skills.css';
// import { motion } from 'framer-motion';
// const MotionNav = motion.skills;
// const skills = [
//   { name: 'HTML', level: 95 },
//   { name: 'CSS', level: 95 },
//   { name: 'JavaScript', level: 90 },
//   { name: 'React', level: 85 },
//   { name: 'Node.js', level: 70 },
//   { name: 'MongoDB', level: 65 },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="skills-section">
//       <motion.h2 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         My Skills
//       </motion.h2>

//       <div className="skills-container">
//         {skills.map((skill, index) => (
//           <motion.div 
//             className="skill-item" 
//             key={skill.name}
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.2 }}
//           >
//             <div className="skill-label">
//               <span>{skill.name}</span>
//               <span>{skill.level}%</span>
//             </div>
//             <div className="progress-bar">
//               <motion.div 
//                 className="progress-fill"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: `${skill.level}%` }}
//                 transition={{ duration: 1 }}
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;



import React from 'react';
import { motion } from 'framer-motion';
import './skills.css';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiMongodb, SiFigma } from 'react-icons/si';
const MotionNav = motion.skills;
const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', level: 95, icon: <FaHtml5 color="#e34c26" /> },
      { name: 'CSS', level: 95, icon: <FaCss3Alt color="#264de4" /> },
      { name: 'JavaScript', level: 90, icon: <FaJsSquare color="#f7df1e" /> },
      { name: 'React', level: 85, icon: <FaReact color="#61DBFB" /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 70, icon: <FaNodeJs color="#68A063" /> },
      { name: 'MongoDB', level: 50, icon: <SiMongodb color="#4DB33D" /> },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', level: 70, icon: <FaGit color="#F1502F" /> },
      { name: 'Figma', level: 50, icon: <SiFigma color="#A259FF" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        {skills.map((group, index) => (
          <div key={index} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            {group.items.map((skill, idx) => (
              <motion.div
                key={idx}
                className="skill-bar"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="skill-label">
                  <span className="skill-name">
                    {skill.icon} {skill.name}
                  </span>
                  <span>{skill.level}%</span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
