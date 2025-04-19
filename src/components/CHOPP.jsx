import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CHOPP = () => {
  const navigate = useNavigate();
  const galleryImages = ['CHOPP1.png', 'CHOPP2.png', 'CHOPP3.png'];
  const skills = [
    'SolidWorks',
    'Prototyping',
    '3D Printing',
    'Decentralized PID Control',
    'Cubic Spline Interpolation',
    'Trajectory Planning',
    'Motion Control',
    'Python',
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="chopp"
      className="relative w-screen min-h-screen bg-gradient-to-b from-slate-900 via-black to-gray-900 text-gray-100 px-6 md:px-24 py-8"
      style={{ marginLeft: 'calc((100% - 100vw)/2)' }}
    >
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md transition duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Go Back</span>
        </button>
      </div>

      {/* Page Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-blue-300 mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        CHOPP Project Details
      </motion.h2>

      {/* Main content: floated image with wrapped text */}
      <motion.div
        className="relative max-w-6xl mx-auto mb-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src="/CHOPP1.png"
          alt="CHOPP Robot"
          className="float-right ml-8 mb-4 w-full md:w-1/3 object-contain rounded-xl shadow-md"
        />
        <div
          className="text-gray-300 text-lg leading-relaxed space-y-6 text-justify"
        >
          <motion.p variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            The CHOPP robotic manipulator was designed as a compact, 4-degree-of-freedom (DOF) system capable of automating simple food preparation tasks, such as slicing bananas and hard-boiled eggs. The goal was to create an affordable, user-friendly robotic assistant for home kitchens, focusing on motion control to achieve precise cutting and clearing operations. The final prototype successfully demonstrated the ability to halve produce and move the slices to the edge of the cutting board while maintaining food safety and preventing damage to the workspace.
          </motion.p>

          <img
            src="/CHOPP.png"
            alt="CHOPP Robot"
            className="float-left mr-8 mb-4 w-full md:w-1/3 object-contain rounded-xl shadow-md"
          />
          <motion.p variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            I contributed significantly to the CAD modeling in SolidWorks, focusing on creating a lightweight yet robust 3D-printed arm structure. The structure was optimized through multiple iterations to achieve an ideal balance between weight (248g total) and rigidity, using ribbed structures at stress concentration points. For the linkage system, I performed thorough motion studies to ensure full coverage of the cutting workspace while preventing any self-collisions, ultimately achieving a 300mm × 200mm operational area. My designs prioritized ease of assembly, motor integration, and end-effector functionality. Its structure consisted of three main links actuated by four Dynamixel motors, with the first two controlling planar motion (X and Y axes), the third adjusting the knife’s orientation, and the fourth managing the cutting angle. The end effector featured a plastic knife mounted with geometric offsets to ensure only the blade contacted the food.
          </motion.p>

          <img
            src="/CHOPP2.png"
            alt="CHOPP Robot"
            className="float-right ml-8 mb-4 w-full md:w-1/3 object-contain rounded-xl shadow-md"
          />

          <motion.p variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            My kinematic work began with developing the complete Denavit-Hartenberg parameter table for the 4-DOF system. The forward kinematics implementation included compensation for the end-effector's geometric offsets, achieving positional accuracy within ±1.5mm in validation tests. For the analytical Jacobian, I created a computationally efficient implementation that ran at the full 50Hz control frequency while handling the parallel axis singularities inherent in our design. To ensure robust performance during food-cutting tasks, I conducted a thorough dynamic analysis of the CHOPP manipulator. This included modeling motor torque requirements to handle peak cutting forces—particularly for firmer foods like hard-boiled eggs, which demanded higher gains (Kp=240e-4, Ki=500e-4) compared to softer items like bananas. Structural rigidity was verified under operational loads, confirming the 3D-printed arm could withstand repeated slicing motions without excessive deflection.
          </motion.p>

          <img
            src="/CHOPP3.png"
            alt="CHOPP Robot"
            className="float-left mr-8 mb-4 w-full md:w-1/3 object-contain rounded-xl shadow-md"
          />

          <motion.p variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            Control strategies explored three decentralized PID architectures: position-only, position & velocity, and velocity with acceleration feedforward. The final implementation uses a dual-loop PID system to ensure accurate path following and minimal coupling between axes, delivering smooth, repeatable slice segmentation. My tuning strategy focused on minimizing tracking errors during free motion while ensuring sufficient force for slicing. I also helped test different trajectory profiles, including parabolic cutting motions that mimicked human-like slicing. Parabolic motion in the Z-axis simulates human cutting actions, coordinated with linear XY movements to reposition slices automatically for removal. By comparing performance across different foods (bananas vs. eggs), I identified the need for adaptive gain adjustments, leading to more reliable cuts.
          </motion.p>
        </div>
        <div className="clear-both" />
      </motion.div>

      {/* Skills Section */}
      <motion.div className="max-w-3xl mx-auto mt-16" variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <h3 className="text-3xl font-semibold text-blue-300 mb-6">
          Top Skills Utilized
        </h3>
        <div className="bg-white/5 p-6 rounded-xl border border-gray-700 backdrop-blur-md">
          <div className="flex flex-wrap justify-start gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-blue-700/70 text-white text-sm px-3 py-1 rounded-full shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CHOPP;