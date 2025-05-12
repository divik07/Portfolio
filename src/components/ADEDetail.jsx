// src/components/ADEDetail.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../assets/Style/ADEDetail.css';

const ADEDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    'ANSYS ICEM', 'ANSYS Fluent', 'Mesh Generation', 'Hybrid Meshing',
    'Prism Layers', 'Boundary-layer Analysis', 'Roe-FDS Solver',
    'Spalart–Allmaras Model', 'Second-Order Upwind', 'Residual Monitoring',
    'CFD Post-Processing'
  ];

  return (
    <section id="ade">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-button">
        <svg className="icon" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Go Back</span>
      </button>

      {/* Title */}
      <motion.h2
        className="ade-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Research Intern @ ADE (CFD Analysis)
      </motion.h2>

      {/* Date & Location */}
      <motion.p
        className="ade-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        May 2018 – Jul 2018 | Bangalore, India
      </motion.p>

      {/* Content with Images */}
      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <img
            src={`${import.meta.env.BASE_URL}ADEMesh.png`}
            alt="Mesh Detail"
            className="ade-image-right"
          />
          <motion.div
            className="ade-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <p>
              As a Research Intern at the Aeronautical Development Establishment (ADE) under DRDO, I conducted high-fidelity CFD simulations on a two-element airfoil to study Reynolds number effects on aerodynamic performance. I generated a hybrid mesh in ANSYS ICEM with 24 prism layers, totaling over 5 million elements, ensuring boundary-layer y+ values below 1 and maintaining low cell skewness for accurate near-wall resolution.
            </p>
            <p>
              I then performed steady-state analyses in ANSYS Fluent, using a density-based implicit solver with Roe-FDS flux vector splitting and the Spalart–Allmaras turbulence model. Second-order upwind discretization was applied to both momentum and turbulence equations. I tuned under-relaxation factors for stability and monitored residuals to 1e-6, ensuring robust convergence before extracting lift (Cl) and drag (Cd) data across varying angles of attack.
            </p>
          </motion.div>
          <div className="clear-both" />
        </div>

        <div>
          <img
            src={`${import.meta.env.BASE_URL}ADEContour.png`}
            alt="Velocity Contour"
            className="ade-image-left"
          />
          <motion.div
            className="ade-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p>
              Post-processing included plotting lift (Cl) and drag (Cd) coefficients versus angle of attack for Re = 0.4 M and 2 M, and comparing results with MSES vortex panel predictions. I analyzed Cp distributions and velocity contours to identify separation points and validated CFD against experimental and panel method data.
            </p>
            <p>
              This internship sharpened my skills in mesh generation, solver configuration, turbulence modeling, and aerodynamic data interpretation—key competencies for mechanical and aerospace product development.
            </p>
          </motion.div>
          <div className="clear-both" />
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-container">
        <h3 className="skills-title">Key Skills Utilized</h3>
        <div className="skills-wrapper">
          {skills.map((s, i) => (
            <span key={i} className="skill-pill">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ADEDetail;
