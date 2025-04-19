import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
  <section
    id="projects"
    className="relative w-screen min-h-screen bg-gradient-to-b from-slate-900 via-black to-gray-900 text-gray-100 px-6 md:px-24 py-24"
    style={{ marginLeft: 'calc((100% - 100vw)/2)' }}
  >
    {/* Background Blobs */}
    <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-900 opacity-30 rounded-full blur-2xl"></div>
    <div className="absolute top-1/4 left-[15%] w-[200px] h-[200px] bg-yellow-700 opacity-10 rounded-full blur-xl"></div>
    <div className="absolute bottom-[10%] left-[40%] w-[180px] h-[180px] bg-pink-800 opacity-10 rounded-full blur-xl"></div>

    <motion.h2
      className="text-5xl font-bold text-blue-300 mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Selected Projects
    </motion.h2>

    <div className="flex space-x-8 overflow-x-auto pb-4 scrollbar-hide">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          className="flex-shrink-0 w-80 bg-white/5 p-6 rounded-xl backdrop-blur-md border border-gray-700 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}${p.img}`}
            alt={p.title}
            className="w-full h-44 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold text-blue-200 mb-2">{p.title}</h3>
          <p className="text-gray-300 mb-4">{p.summary}</p>
          {p.link && (
            <Link
              to={p.link}
              className="text-blue-400 hover:text-blue-500 font-medium"
            >
              Read more →
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
