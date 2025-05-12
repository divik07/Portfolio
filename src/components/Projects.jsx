// Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../assets/Style/Project.css';
const projects = [
  {
    title: 'Vegetable Chopping Robot (CHOPP)',
    img: 'CHOPP.png',
    summary: 'A 4-DOF robot that autonomously chops produce using decentralized PID control and optimized trajectory planning.',
    link: '/CHOPP'
  },
  {
    title: '5-DOF Robotic Manipulator (SQUARE)',
    img: '5dof.png',
    summary: 'Designed a manipulator to insert blocks into a square hole, showcasing kinematic control and custom gripper mechanisms.',
    link: '/SQUARE'
  },
  {
    title: 'Bionic Foot Prosthesis',
    img: 'bionic.png',
    summary: 'An assistive prosthesis model to enhance gait efficiency in individuals with Achilles tendon pathology.',
    link: '/Bionic'
  },
  {
    title: 'Angry Bird Catapult Simulator',
    img: 'catapult.png',
    summary: 'A physics-based simulation applying continuum mechanics to model elastic deformations upon projectile impact.',
    link: '/Catapult'
  },
  {
    title: 'Toy Helicopter CAD Model',
    img: 'helicopter.png',
    summary: 'A detailed SolidWorks model translating 2D drawings into a parametric 3D design as a passion side project.',
    link: null
  }
];

const Projects = () => (
  <section id="projects">
    {/* Background Blobs */}

    <motion.h2
      className="projects-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Selected Projects
    </motion.h2>

    <div className="projects-container">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}${p.img}`}
            alt={p.title}
            className="project-image"
          />
          <h3 className="project-title">{p.title}</h3>
          <p className="project-summary">{p.summary}</p>
          {p.link && (
            <Link to={p.link} className="project-link">
              Read more →
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
