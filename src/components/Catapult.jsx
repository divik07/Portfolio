import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const Catapult = () => {
  const navigate = useNavigate();
  const skills = [
    'Mathematical Modeling',
    'Stretching & Bending Energy Analysis',
    'Lagrangian Mechanics',
    'Python',
    'Numerical Simulation',
    'Dynamical Systems'
  ];

  return (
    <section
      id="catapult"
      className="relative w-screen min-h-screen bg-gradient-to-b from-slate-900 via-black to-gray-900 text-gray-100 px-6 md:px-24 py-12"
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Catapult Beam Simulation
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-gray-300 text-lg leading-relaxed space-y-6 text-justify">
          <div className="float-right ml-8 mb-6 w-full md:w-1/2">
            <img
              src="/Catapult-gif.gif"
              alt="Catapult Simulation"
              className="rounded-xl border border-gray-700 shadow-md"
            />
          </div>

          <p>
          This project focuses on analyzing and optimizing a 3D Y-shaped catapult system through physics-based simulation. The approach models the catapult as interconnected nodes with elastic properties, capturing force distribution and energy transfer during operation. The system consists of three main components: a vertical support beam for stability, two angled throwing arms that store and release energy, and an elastic tension member that powers the launch. By representing these components as discrete nodes connected by spring-like elements, the simulation predicts structural deformation, and energy transfer efficiency to the projectile. This nodal modeling approach maintains physical accuracy while enabling rapid design iteration and performance optimization. The framework analyzes the complete launch sequence from loading to release, providing valuable insights into how geometric configuration and material properties affect catapult performance.
          </p>

          <h3 className="text-2xl font-semibold text-blue-200">Framework and Energy Modeling</h3>
          <p>
            At the core of my simulation lies an energy-based framework that captures deformation mechanics. The total potential energy is a sum of stretching and bending energies:
          </p>

          <BlockMath math="E_{potential} = \sum E_s^a + \sum E_b^b" />

          <p>
            Stretching energy arises from elongation of the string and beams. Bending energy captures angular deflection between connected segments. Using gradients of these energies, I compute internal forces that drive the dynamic motion of the system.
          </p>

          <p>
            The motion of each node is governed by the equation of motion:
          </p>

          <BlockMath math="f = m_i \cdot \ddot{q_i} + \frac{\partial E_{potential}}{\partial q_i} + c_i \cdot \dot{q_i} + W = 0" />

          <p>
            where <InlineMath math="m_i" /> is the mass of the node, <InlineMath math="q_i" /> its displacement vector, <InlineMath math="c_i" /> the damping coefficient, and <InlineMath math="W" /> the external force (e.g., gravity). I numerically solved this using the discretized form:
          </p>

          <BlockMath math="m_i \cdot \left(\frac{q_i(t_{k+1}) - q_i(t_k)}{\Delta t^2}\right) + \frac{\partial E_{potential}}{\partial q_i} + c_i \cdot \left(\frac{q_i(t_{k+1}) - q_i(t_k)}{\Delta t}\right) + W = 0" />

          <h3 className="text-2xl font-semibold text-blue-200">Application to Catapult Dynamics</h3>

          <p>
            The simulation progresses through three distinct phases:
          </p>

          <p>
            <li>
            <strong>Loading Phase:</strong> As the throwing arm is pulled back, the elastic member stretches (increasing <InlineMath math="E_s" />) while the beams undergo combined bending and axial compression (increasing <InlineMath math="E_b" />). My framework tracks the exact deformation mode shapes and energy distribution.
            </li>
          </p>

          <p>
            <li>
            <strong>Locking Phase:</strong> The system reaches a metastable equilibrium where the potential energy gradient balances the applied loading force. The model accurately predicts this equilibrium configuration, which is crucial for determining the initial conditions for launch.
            </li>
            </p>

          <p>
          <li>
            <strong>Launch Phase:</strong> Upon release, the energy gradients <InlineMath math="\frac{\partial E_s}{\partial q}" /> and <InlineMath math="\frac{\partial E_b}{\partial q}" /> dictate how quickly the nodes snap back to their rest positions, propelling the projectile. The nonlinear coupling between bending and stretching modes captures the snap-through behavior. Post-launch, damping ensures stabilization.
            </li>
          </p>

          <p>
            By tuning beam stiffness, string elasticity, and geometry, I optimized the catapult’s performance for maximum range and accuracy.
          </p>
        </div>
        <div className="clear-both" />
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-semibold text-blue-300 mb-6">Top Skills Utilized</h3>
        <motion.div
          className="bg-white/5 p-6 rounded-xl border border-gray-700 backdrop-blur-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Catapult;
