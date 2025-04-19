import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    school: 'University of California, Los Angeles (UCLA)',
    icon: './ucla-logo.png',
    degree: 'MS in Mechanical Engineering',
    time: 'Sep 2023 – Dec 2024',
    location: 'Los Angeles, CA',
    highlights: [
      'Concentration in Design, Manufacturing, and Robotics. GPA: 4.0/4.0',
      'Coursework: Kinematics of Robotic Systems | Dynamics of Robotic Systems | Control of Robotic Systems | Mechanics of Flexible Structures and Soft Robots | Orthopaedic Biomechanical Engineering | Complaint Mechanism Design | Bionic Systems Engineering | Analytical Fracture Mechanics | Linear Dynamic Systems | Computational Methods in Structural Mechanics'
    ]
  },
  {
    school: 'Vellore Institute of Technology (VIT)',
    icon: './VIT-logo.png',
    degree: 'B.Tech in Mechanical Engineering',
    time: 'Jul 2016 – Jun 2020',
    location: 'Vellore, India',
    highlights: [
      'Graduated with Distinction. GPA: 3.91/4.0',
      'Drag and heat-flux reduction using counterflow jet and spike - Analysis of their equivalence for a blunt cone geometry at Mach 8.” Journal of Applied Fluid Mechanics, Volume 14, No. 2, pp. 375-388'
    ]
  }
];

const fadeSlideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const Education = () => {
  return (
    <motion.section
      id="education"
      className="relative w-screen min-h-screen bg-gradient-to-b from-slate-900 via-black to-gray-900 text-gray-100 px-6 md:px-24 py-24"
      style={{ marginLeft: "calc((100% - 100vw)/2)" }}
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-900 opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-32 right-0 w-[350px] h-[350px] bg-purple-900 opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/4 left-[15%] w-[200px] h-[200px] bg-yellow-700 opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-[10%] left-[40%] w-[180px] h-[180px] bg-pink-800 opacity-10 rounded-full blur-xl"></div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-16 text-blue-300 text-left px-6 md:px-24"
        variants={fadeSlideUp}
      >
        Education
      </motion.h2>

      <motion.div
        className="space-y-12 max-w-5xl mx-auto"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 }
          }
        }}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-start gap-6 bg-white/5 p-6 rounded-xl shadow border border-gray-700 backdrop-blur-md text-left"
            variants={fadeSlideUp}
          >
            <motion.img
              src={edu.icon}
              alt={edu.school}
              className="w-35 h-35 object-contain rounded-full border border-gray-400"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            />
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-1">{edu.school}</h3>
              <p className="text-md text-gray-400 italic mb-2">
                {edu.degree} <span className="mx-2 text-gray-600">|</span> {edu.time}
              </p>
              <p className="text-sm text-gray-500 mb-4">{edu.location}</p>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-300">
                {edu.highlights.map((point, idx) => (
                  <motion.li key={idx} variants={fadeSlideUp}>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;
