import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SQUARE = () => {
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState(0);
  const galleryImages = ['square1.png', 'square2.png', 'square3.png'];
  const skills = [
    'SolidWorks',
    'Matlab',
    'Mechanical Design',
    'Kinematic Analysis',
    'Workspace Analysis',
    'Motor Torque Estimation',
    'Gripper Mechanism Design',
    'Prototyping',
  ];

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <section
      id="square"
      className="relative w-screen min-h-screen bg-gradient-to-b from-slate-900 via-black to-gray-900 text-gray-100 px-6 md:px-24 py-8"
      style={{ marginLeft: 'calc((100% - 100vw)/2)' }}
    >
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

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-blue-300 mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        SQUARE Robot Project Details
      </motion.h2>

      <motion.div
        className="relative max-w-6xl mx-auto mb-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src={`${import.meta.env.BASE_URL}5dof.png`}
          alt="SQUARE side view"
          className="float-right ml-8 mb-4 w-full md:w-1/3 object-contain rounded-xl shadow-md"
        />
        <div className="text-gray-300 text-lg leading-relaxed space-y-6 text-justify">
          <motion.p variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            The SQUARE robotic arm was designed to recreate the viral "It Goes in the Square Hole!" challenge, where a robotic arm playfully misplaces shaped blocks into a square hole. My goal was to develop a 5-degree-of-freedom arm capable of precise pick-and-place operations while ensuring manufacturability and structural integrity. The project required consideration of mechanical design, kinematic analysis, and real-world performance to achieve smooth and reliable motion.
          </motion.p>

          <img
            src={`${import.meta.env.BASE_URL}square1.png`}
            alt="SQUARE isometric view"
            className="float-left mr-8 mb-4 w-full md:w-1/4 object-contain rounded-xl shadow-md"
          />

          <motion.p variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            I modeled the entire robotic arm in SolidWorks, focusing on optimizing the design for 3D printing and assembly. The motor housings were designed with press-fit tolerances to securely hold the Dynamixel MX-28AR motors while minimizing misalignment. To balance strength and weight, I used a C-shaped cross-section for the links and incorporated carbon-fiber PLA for improved rigidity, though this introduced challenges like poor layer adhesion during printing. The gripper, driven by an SG90 servo, went through multiple iterations to ensure precise block gripping, with the final version being more compact and responsive. The conical base provided stability, while careful workspace analysis ensured the arm could reach all necessary positions without collisions.
          </motion.p>

          <img
            src={`${import.meta.env.BASE_URL}square2.png`}
            alt="Forward Kinematics"
            className="float-right ml-8 mb-4 w-full md:w-1/2 object-contain rounded-xl shadow-md"
          />

          <motion.p variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            The arm’s motion was governed by forward and inverse kinematics derived using Denavit-Hartenberg parameters. I developed MATLAB scripts to compute the end effector’s position from joint angles and solve for joint configurations given target positions. The inverse kinematics accounted for multiple solutions, including elbow-up and elbow-down configurations, as well as joint flips. To streamline motion planning, I prioritized elbow-up solutions to avoid ground collisions and restricted unnecessary joint rotations. This approach ensured smooth and predictable arm behavior during operation.
          </motion.p>

          <motion.p variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            The final assembly was implemented successfully with all structural and control goals achieved. Below is a video demonstration of the working prototype.
          </motion.p>

          <motion.div className="w-full mt-6 md:flex md:justify-between md:items-start gap-8">
            <div className="md:w-1/2 w-full mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold text-blue-200 mb-4 text-center md:text-left">Video Demo</h3>
              <img
                src={`${import.meta.env.BASE_URL}square-demo.gif`}
                alt="SQUARE Robot Demo"
                className="w-full rounded-xl border border-gray-700 shadow-md"
              />
            </div>

            <div className="md:w-1/2 w-full">
              <h3 className="text-2xl font-semibold text-blue-200 mb-4">Top Skills Utilized</h3>
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
            </div>
          </motion.div>
        </div>
        <div className="clear-both" />
      </motion.div>
    </section>
  );
};

export default SQUARE;
