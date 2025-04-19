import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ADEDetail = () => {
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState(0);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section
      id="ade"
      className="relative w-screen min-h-screen bg-gradient-to-b from-slate-900 via-black to-gray-900 text-gray-100 px-6 md:px-24 py-8"
      style={{ marginLeft: 'calc((100% - 100vw)/2)' }}
    >
      {/* Back Button */}
      <div className="mb-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-700/70 text-white rounded-full shadow-md transition duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Go Back</span>
        </button>
      </div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-blue-300 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Research Intern @ ADE (CFD Analysis)
      </motion.h2>

      {/* Date & Location */}
      <motion.p
        className="text-md text-gray-400 mb-12 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        May 2018 – Jul 2018 | Bangalore, India
      </motion.p>

      {/* Content with Images */}
      <div className="max-w-6xl mx-auto space-y-16">
        {/* First Image float right */}
        <div className="md:float-right md:w-1/3 mb-8 md:mb-0 ml-0 md:ml-8">
          <img
            src="/ADEMesh.png"
            alt="Mesh Detail"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
        <motion.div
          className="text-gray-200 text-lg leading-relaxed text-justify space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="mb-6">
            As a Research Intern at the Aeronautical Development Establishment (ADE) under DRDO, I conducted high-fidelity CFD simulations on a two-element airfoil to study Reynolds number effects on aerodynamic performance. I generated a hybrid mesh in ANSYS ICEM with 24 prism layers, totaling over 5 million elements, ensuring boundary-layer y+ values below 1 and maintaining low cell skewness for accurate near-wall resolution.
          </p>
          <p className="mb-6">
            I then performed steady-state analyses in ANSYS Fluent, using a density-based implicit solver with Roe-FDS flux vector splitting and the Spalart–Allmaras turbulence model. Second-order upwind discretization was applied to both momentum and turbulence equations. I tuned under-relaxation factors for stability and monitored residuals to 1e-6, ensuring robust convergence before extracting lift (Cl) and drag (Cd) data across varying angles of attack.
          </p>
        </motion.div>
        <div className="clear-both" />

        {/* Second Image float left */}
        <div className="md:float-left md:w-1/3 mb-8 md:mb-0 mr-0 md:mr-8">
          <img
            src="/ADEContour.png"
            alt="Velocity Contour"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
        <motion.div
          className="text-gray-200 text-lg leading-relaxed text-justify space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>
            Post-processing included plotting lift (Cl) and drag (Cd) coefficients versus angle of attack for Re = 0.4 M and 2 M, and comparing results with MSES vortex panel predictions. I analyzed Cp distributions and velocity contours to identify separation points and validated CFD against experimental and panel method data.
          </p>
          <p>
            This internship sharpened my skills in mesh generation, solver configuration, turbulence modeling, and aerodynamic data interpretation—key competencies for mechanical and aerospace product development.
          </p>
        </motion.div>
        <div className="clear-both" />
      </div>
    
      {/* Skills Section */}
      <motion.div
        className="max-w-5xl mx-auto mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h3 className="text-3xl font-semibold text-blue-300 mb-4">Key Skills Utilized</h3>
        <div className="bg-white/5 p-6 rounded-xl border border-gray-700 backdrop-blur-md">
          <div className="flex flex-wrap justify-start gap-3">
            {[
              'ANSYS ICEM', 'ANSYS Fluent', 'Mesh Generation', 'Hybrid Meshing', 'Prism Layers', 'Boundary-layer Analysis',
              'Roe-FDS Solver', 'Spalart–Allmaras Turbulence Model', 'Second-Order Upwind Schemes', 'Residual Monitoring',
              'CFD Post-Processing'
            ].map((skill, i) => (
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

export default ADEDetail;
