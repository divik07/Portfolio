// SQUARE.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/Style/Square.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SQUARE = () => {
  const navigate = useNavigate();
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
    <section id="square">
      <div className="mb-8">
        <button onClick={() => navigate(-1)} className="back-button">
          <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Go Back</span>
        </button>
      </div>

      <motion.h2
        className="square-title"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        SQUARE Robot Project Details
      </motion.h2>

      <motion.div
        className="content-wrapper"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src={`${import.meta.env.BASE_URL}${galleryImages[0]}`} alt="SQUARE side view"
          className="square-image-right"
        />
        <p className="square-paragraph">
          The SQUARE robotic arm was designed to recreate the viral "It Goes in the Square Hole!" challenge, where a robotic arm playfully misplaces shaped blocks into a square hole. My goal was to develop a 5-degree-of-freedom arm capable of precise pick-and-place operations while ensuring manufacturability and structural integrity. The project required consideration of mechanical design, kinematic analysis, and real-world performance to achieve smooth and reliable motion.
        </p>

        <img
          src={`${import.meta.env.BASE_URL}${galleryImages[1]}`} alt="SQUARE isometric view"
          className="square-image-left"
        />
        <p className="square-paragraph">
          I modeled the entire robotic arm in SolidWorks, focusing on optimizing the design for 3D printing and assembly. The motor housings were designed with press-fit tolerances to securely hold the Dynamixel MX-28AR motors while minimizing misalignment. To balance strength and weight, I used a C-shaped cross-section for the links and incorporated carbon-fiber PLA for improved rigidity, though this introduced challenges like poor layer adhesion during printing. The gripper, driven by an SG90 servo, went through multiple iterations to ensure precise block gripping, with the final version being more compact and responsive. The conical base provided stability, while careful workspace analysis ensured the arm could reach all necessary positions without collisions.
        </p>

        <img
          src={`${import.meta.env.BASE_URL}${galleryImages[2]}`} alt="Forward Kinematics"
          className="square-image-right"
        />
        <p className="square-paragraph">
          The arm’s motion was governed by forward and inverse kinematics derived using Denavit-Hartenberg parameters. I developed MATLAB scripts to compute the end effector’s position from joint angles and solve for joint configurations given target positions. The inverse kinematics accounted for multiple solutions, including elbow-up and elbow-down configurations, as well as joint flips. To streamline motion planning, I prioritized elbow-up solutions to avoid ground collisions and restricted unnecessary joint rotations. This approach ensured smooth and predictable arm behavior during operation.
        </p>

        <p className="square-paragraph">
          The final assembly was implemented successfully with all structural and control goals achieved. Below is a video demonstration of the working prototype.
        </p>

        <div className="clear-both" />

        <motion.div
          className="video-skills-container"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="video-section">
            <h3 className="video-title">Video Demo</h3>
            <img
              src={`${import.meta.env.BASE_URL}square-demo.gif`} alt="SQUARE Robot Demo"
              className="video-image"
            />
          </div>

          <div className="skills-container">
            <h3 className="skills-title">Top Skills Utilized</h3>
            <div className="skills-wrapper">
              {skills.map((skill, i) => (
                <span key={i} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SQUARE;
