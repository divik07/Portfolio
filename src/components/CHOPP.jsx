// CHOPP.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/Style/CHOPP.css';

const CHOPP = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const galleryImages = ['CHOPP1.png', 'CHOPP2.png', 'CHOPP3.png'];
  const skills = [
    'SolidWorks',
    'Prototyping',
    '3D Printing',
    'Decentralized PID Control',
    'Cubic Spline Interpolation',
    'Trajectory Planning',
    'Motion Control',
    'Python'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="chopp">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-button">
        <svg
          className="icon"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Go Back</span>
      </button>

      {/* Page Heading */}
      <h2 className="chopp-title">
        CHOPP Project Details
      </h2>

      {/* Main Content */}
      <div className="content-wrapper">
        <img
          src={`${import.meta.env.BASE_URL}${galleryImages[currentImage]}`}
          alt="CHOPP Robot"
          className="chopp-image-right"
        />
        <div>
          <p className="chopp-paragraph">
            The CHOPP robotic manipulator was designed as a compact, 4-degree-of-freedom (DOF) system capable of automating simple food preparation tasks, such as slicing bananas and hard-boiled eggs. The goal was to create an affordable, user-friendly robotic assistant for home kitchens, focusing on motion control to achieve precise cutting and clearing operations. The final prototype successfully demonstrated the ability to halve produce and move the slices to the edge of the cutting board while maintaining food safety and preventing damage to the workspace.
          </p>

          <img
            src={`${import.meta.env.BASE_URL}CHOPP-demo.gif`}
            alt="CHOPP Robot Demonstration"
            className="chopp-image-left"
          />
          <p className="chopp-paragraph">
            I contributed significantly to the CAD modeling in SolidWorks, focusing on creating a lightweight yet robust 3D-printed arm structure. The structure was optimized through multiple iterations to achieve an ideal balance between weight (248g total) and rigidity, using ribbed structures at stress concentration points. For the linkage system, I performed thorough motion studies to ensure full coverage of the cutting workspace while preventing any self-collisions, ultimately achieving a 300mm × 200mm operational area. My designs prioritized ease of assembly, motor integration, and end-effector functionality. Its structure consisted of three main links actuated by four Dynamixel motors, with the first two controlling planar motion (X and Y axes), the third adjusting the knife’s orientation, and the fourth managing the cutting angle. The end effector featured a plastic knife mounted with geometric offsets to ensure only the blade contacted the food.
          </p>

          <img
            src={`${import.meta.env.BASE_URL}CHOPP2.png`}
            alt="CHOPP Robot CAD"
            className="chopp-image-right"
          />
          <p className="chopp-paragraph">
            My kinematic work began with developing the complete Denavit-Hartenberg parameter table for the 4-DOF system. The forward kinematics implementation included compensation for the end-effector's geometric offsets, achieving positional accuracy within ±1.5mm in validation tests. For the analytical Jacobian, I created a computationally efficient implementation that ran at the full 50Hz control frequency while handling the parallel axis singularities inherent in our design. To ensure robust performance during food-cutting tasks, I conducted a thorough dynamic analysis of the CHOPP manipulator. This included modeling motor torque requirements to handle peak cutting forces—particularly for firmer foods like hard-boiled eggs, which demanded higher gains (Kp=240e-4, Ki=500e-4) compared to softer items like bananas. Structural rigidity was verified under operational loads, confirming the 3D-printed arm could withstand repeated slicing motions without excessive deflection.
          </p>

          <img
            src={`${import.meta.env.BASE_URL}CHOPP3.png`}
            alt="CHOPP Robot Structure"
            className="chopp-image-left"
          />
          <p className="chopp-paragraph">
            Control strategies explored three decentralized PID architectures: position-only, position & velocity, and velocity with acceleration feedforward. The final implementation uses a dual-loop PID system to ensure accurate path following and minimal coupling between axes, delivering smooth, repeatable slice segmentation. My tuning strategy focused on minimizing tracking errors during free motion while ensuring sufficient force for slicing. I also helped test different trajectory profiles, including parabolic cutting motions that mimicked human-like slicing. Parabolic motion in the Z-axis simulates human cutting actions, coordinated with linear XY movements to reposition slices automatically for removal. By comparing performance across different foods (bananas vs. eggs), I identified the need for adaptive gain adjustments, leading to more reliable cuts.
          </p>
        </div>
        <div className="clear-both" />
      </div>

      {/* Skills Section */}
      <div className="skills-container">
        <h3 className="skills-title">
          Top Skills Utilized
        </h3>
        <div className="skills-wrapper">
          {skills.map((skill, idx) => (
            <span key={idx} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CHOPP;
