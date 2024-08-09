import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaCalendarAlt, FaTrophy, FaNodeJs } from 'react-icons/fa';
import { SiReact, SiJavascript, SiTypescript, SiPython, SiPhp,  SiCplusplus,  SiLaravel, SiVuedotjs, SiAndroid, SiMongodb, SiRedux } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const skills = [
    { name: 'Python', icon: <SiPython />, color: 'text-yellow-300' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
    { name: 'PHP', icon: <SiPhp />, color: 'text-purple-400' },
   
    { name: 'C/C++', icon: <SiCplusplus />, color: 'text-blue-500' },
    { name: 'MongoDB', icon: <SiMongodb/>, color: 'text-gray-400' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
    { name: 'SQL', icon: <TbSql/>, color: 'text-cyan-400' },
    { name: 'Laravel', icon: <SiLaravel />, color: 'text-red-600' },
    { name: 'React', icon: <SiReact />, color: 'text-blue-400' },
    { name: 'Vue.js', icon: <SiVuedotjs />, color: 'text-green-500' },
    { name: 'Redux', icon: <SiRedux/>, color: 'text-green-500' },
  ];

  const experience = [
    {
      company: 'createCare',
      role: 'MERN Stack Developer',
      period: '2024 - Present',
      description: 'Developed end-to-end web solutions using MERN stack, implemented RESTful APIs, and optimized application performance.'

    },
    {
      company: 'Authentic Four Technology',
      role: 'Full Stack Developer',
      period: '2023 - 2024',
      description: 'Developed end-to-end web solutions using MERN stack, implemented RESTful APIs, and optimized application performance.'

    },

    {
      company: 'Authentic Four Technology',
      role: 'Frontend developer',
      period: '2023 - 2024',
      description: 'Developed end-to-end web solutions using MERN stack, implemented RESTful APIs, and optimized application performance.'

    }
  ];

  const projects = [
    {
      name: 'Build a Resume and Cover Letter ',
      description: 'Users can easily practice quiz such asJavascript and react.Users can easily create and share resumes,CV,or coverletters with unique links or QR codes.',
      technologies: ['Javascript','React', 'Node.js', 'MongoDB', 'Express','Firebase'],
      liveLink: 'https://resu-magnet-frontend.vercel.app/',
      ClientLink: 'https://github.com/teamkingsman/resuMagnet-frontend',
      serverLink: ' https://github.com/teamkingsman/resuMagnet-backend/'
     
    },
    {
      name: 'Online Gas Booking System',
      description: 'Users and Admin can sign up and log in to this website using google. A user shows all the products and booking a package.Admin see all the gas order given by user',
      technologies: ['Javascript','React', 'Node.js', 'MongoDB', 'Express','Firebase'],
      liveLink: 'https://timely-froyo-1f829b.netlify.app/',
      ClientLink: 'https://github.com/moincse022/Online-gas-booking-client',
      serverLink: 'https://github.com/moincse022/Online-gas-booking-system',

    },
    {
      name: 'Resturant Management System',
      description: ' Users and Admin can sign up and log in to this website using google.Users can place orders, see their order list, and give a review of a service.',
      technologies: ['Javascript','React', 'Node.js', 'MongoDB', 'Express','Firebase'],
      liveLink: 'https://coffee-store-82b59.web.app/',
      ClientLink: 'https://github.com/moincse022/final-project',
      serverLink: 'https://github.com/moincse022/Final-project-server'

    }
  ];

  const achievements = [
    "Led the development of a product that increased company revenue by 25%",
    "Reduced app crash rate by 80% through robust error handling and testing",
    "Awarded 'Best Mobile App' at regional tech conference for innovative UI/UX design",
    "Contributed to open-source projects with over 1000+ stars on GitHub"
  ];

  return (
   <div className="mt-12">
     <motion.div 
      className="bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen text-white p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-5xl font-bold mb-8 text-center" variants={itemVariants}>
        Product Manager & Full-Stack Developer
      </motion.h1>

      <motion.div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-2xl" variants={itemVariants}>
        <div className="flex justify-center mb-8">
        <button 
            onClick={() => setActiveTab('projects')} 
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'projects' ? 'bg-cyan-500 text-white' : 'bg-gray-700'}`}
          >
            Projects
          </button>
         
          <button 
            onClick={() => setActiveTab('experience')} 
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'experience' ? 'bg-cyan-500 text-white' : 'bg-gray-700'}`}
          >
            Experience
          </button>
          <button 
            onClick={() => setActiveTab('skills')} 
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'skills' ? 'bg-cyan-500 text-white' : 'bg-gray-700'}`}
          >
            Skills
          </button>
        
          <button 
            onClick={() => setActiveTab('achievements')} 
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'achievements' ? 'bg-cyan-500 text-white' : 'bg-gray-700'}`}
          >
            Achievements
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'experience' && (
              <div className="grid gap-6">
                {experience.map((job, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/20 p-6 rounded-lg"
                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.25)' }}
                  >
                    <h3 className="text-2xl font-semibold mb-2 text-cyan-400">{job.role}</h3>
                    <p className="text-lg mb-2">{job.company}</p>
                    <div className="flex items-center text-sm text-gray-300 mb-2">
                      <FaCalendarAlt className="mr-2" />
                      {job.period}
                    </div>
                    <p className="text-sm">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/20 p-4 rounded-lg flex flex-col items-center justify-center"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.25)' }}
                  >
                    <span className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</span>
                    <span className="text-sm text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/20 p-6 rounded-lg"
                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.25)' }}
                  >
                    <h3 className="text-2xl font-semibold mb-2 text-cyan-400">{project.name}</h3>
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-500 text-xs px-2 py-1 rounded">{tech}</span>
                      ))}
                    </div>
                   <div className="flex gap-4">
                   <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                      Live <FaGithub className="inline" />
                    </a>
                    <a href={project.ClientLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                      client <FaGithub className="inline" />
                    </a>
                    <a href={project.serverLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                      server <FaGithub className="inline" />
                    </a>
                   </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/20 p-4 rounded-lg flex items-center"
                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.25)' }}
                  >
                    <FaTrophy className="text-yellow-400 mr-4 text-2xl flex-shrink-0" />
                    <p>{achievement}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
          <div className="flex justify-center space-x-8">
            {[
              { icon: <FaGithub />, link: 'https://github.com/moincse022' },
              { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/moin-uddin022/' },
              { icon: <FaEnvelope />, link: 'mailto:your.email@example.com' },
              { icon: <FaPhone />, link: 'tel:+8801935038653' },
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.link} 
                target="_blank" 
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 transition duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
   </div>
  );
};

export default Portfolio;

