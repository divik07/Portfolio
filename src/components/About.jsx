import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaDraftingCompass, FaCalculator, FaRocket } from 'react-icons/fa';
import { GiGears, GiMechanicalArm, GiFactory } from 'react-icons/gi';

const About = () => {
  const categorizedSkills = {
    'Design & Manufacturing': [
      'SolidWorks',
      'CATIA',
      'GD&T & Tolerance Stackup',
      '3D Printing',
      'Injection Molding',
      'Die Casting',
      'Sheet Metal Fabrication'
    ],
    'Product Development': [
      'New Product Development',
      'DFSS',
      'Test Method Development',
      'Design Control',
      'FMEA',
      'Root Cause Analysis',
      'ISO 13485',
      'ISO 14971',
      'Design Verification'
    ],
    'Mechanical Analysis & Simulation': [
      'Design of Experiments (DOE)',
      'CFD',
      'Structural Analysis',
      'FEA',
      'Statistical Analysis',
      'Process Capability Analysis',
      'ANSYS',
      'Minitab',
      'MATLAB',
      'Python',
    ]
  };

  return (
    <motion.section
      id="about"
      className="relative w-screen min-h-screen bg-gradient-to-b from-black via-gray-900 to-slate-900 text-gray-200 px-6 md:px-16 py-24 overflow-hidden"
      style={{ marginLeft: "calc((100% - 100vw)/2)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Gears and Design Icons */}
      <GiGears className="absolute top-10 right-10 text-gray-800 dark:text-gray-600 text-[160px] opacity-15 z-0 rotate-12" />
      <GiGears className="absolute bottom-12 left-12 text-gray-800 dark:text-gray-600 text-[140px] opacity-15 z-0 -rotate-6" />
      <GiMechanicalArm className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 dark:text-gray-500 text-[400px] opacity-15 z-0" />

      {/* Background Blobs */}
      <div className="absolute -top-24 -left-24 w-[250px] h-[250px] bg-blue-900 opacity-20 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-20 right-16 w-[200px] h-[200px] bg-purple-800 opacity-20 rounded-full blur-[80px] z-0"></div>
      <div className="absolute top-1/2 left-1/3 w-[180px] h-[180px] bg-emerald-800 opacity-10 rounded-full blur-[70px] z-0"></div>

      <motion.div
        className="relative max-w-6xl mx-auto text-left z-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-blue-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl leading-relaxed">
            I'm a Mechanical Design Engineer passionate about designing innovative mechanical systems and turning concepts into real-world products. My academic background includes an MS in Mechanical Engineering from UCLA, where I honed my expertise in design, simulation, and system-level problem-solving.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            My professional journey includes impactful work as a Mechanical Design Engineer II at BD, where I developed medical devices with a strong focus on mechanical functionality, manufacturability, and user safety. I worked across various domains—ranging from syringe systems to electromechanical devices—integrating tools like SolidWorks, FEA, CFD, tolerance stack-up analysis, and design verification.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            I enjoy working at the intersection of mechanical design, product development, and engineering analysis. Whether it’s designing 3D CAD assemblies, optimizing components through CAE, or collaborating with cross-functional teams, I strive to bring mechanical solutions to life.
          </p>
        </motion.div>

        {/* Technical Skills Section with Categorized Format */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-4 text-blue-200 flex items-center gap-3">
            <FaTools className="text-blue-400 text-2xl" /> Technical Skills
          </h3>
          <div className="bg-white/5 rounded-xl border border-gray-700 p-6 backdrop-blur-md shadow-md space-y-6">
            {Object.entries(categorizedSkills).map(([category, skillList], i) => (
              <div key={i}>
                <h4 className="text-xl font-semibold text-blue-300 mb-3">{category}</h4>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-700/70 text-white text-sm px-3 py-1 rounded-full shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
