// Bionic.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/Style/bionic.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const BIONIC = () => {
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState(0);
  const images = ['/bionic.png', '/bionic1.png', '/bionic2.png'];
  const skills = [
    'Mechanical Design',
    'Bionic System Design',
    'SolidWorks',
    'OpenSim',
    'Biomechanical Modeling',
    'System Optimization',
    'Transmission Design',
    'Battery Selection',
    'MATLAB'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="bionic">
      <button onClick={() => navigate(-1)} className="back-button">
        <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Go Back</span>
      </button>

      <motion.h2
        className="bionic-title"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        Bionic System for Achilles Tendon Stiffness
      </motion.h2>

      <motion.div
        className="content-wrapper"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src={`${import.meta.env.BASE_URL}${images[0]}`}
          alt="Bionic System Overview"
          className="bionic-image-right"
        />
        <motion.p
          className="bionic-paragraph"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          This project developed a motorized exoskeleton to assist individuals with stiffened Achilles tendons and weakened calf muscles. The device was designed to reduce the excessive metabolic cost of walking by supplementing plantarflexion torque, thereby offloading strain from compromised muscles while restoring near-natural gait mechanics. The work combined biomechanical modeling, conceptual system design, actuator optimization, and transmission design to create a functional prototype that addresses real-world mobility challenges.
        </motion.p>

        <img
          src={`${import.meta.env.BASE_URL}${images[1]}`}
          alt="Path Actuator Optimization"
          className="bionic-image-left"
        />
        <motion.p
          className="bionic-paragraph"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          Using OpenSim, I simulated the effects of Achilles tendon stiffness by modifying two key muscle-tendon parameters: tendon slack length and maximum isometric force. The gastrocnemius (GAS) and soleus (SOL) muscles were adjusted to replicate clinical observations, with slack lengths reduced by 1 cm (GAS) and 1.14 cm (SOL), and peak forces decreased to 1300 N (GAS) and 3000 N (SOL). Metabolic cost analysis confirmed these changes led to significantly higher energy expenditure during plantarflexion, mirroring the challenges faced by patients with this pathology. To compensate for the weakened muscles, I designed a Path Actuator in OpenSim and systematically optimized its placement and force characteristics. Residual analysis validated the model's biomechanical fidelity, confirming that joint moments and tracking errors remained within acceptable thresholds for normal gait. Using the OpenSim Computed Muscle Control (CMC), the actuator moments were calculated for each step of the gait cycle.
        </motion.p>

        <img
          src={`${import.meta.env.BASE_URL}${images[2]}`}
          alt="Concept and Transmission"
          className="bionic-image-right"
        />
        <motion.p
          className="bionic-paragraph"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          The ankle torque–angle profiles from OpenSim informed the selection of a U8-KV100 motor, chosen for its high torque density (140 mNm/A) and lightweight (230 g) properties. The exoskeleton's mechanical architecture evolved into a three-stage transmission system: a 45:1 planetary gearbox for primary speed reduction, a rotary-to-linear conversion mechanism using a 40 mm spool, and a nonlinear ankle linkage to maintain optimal torque throughout gait. I developed a MATLAB model to optimize heat losses across motor windings, gear friction, and inertial effects, finding peak efficiency at a transmission ratio of 100–130. A serial elastic actuator (SEA) with 180 Nm/rad stiffness was co-optimized for force bandwidth, energy recovery, and impact mitigation.
        </motion.p>

        <motion.p
          className="bionic-paragraph"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          The complete prototype added 4.02 kg but showed no increase in metabolic cost versus unassisted walking. A 5000 mAh battery supported roughly 11 days of operation (5000 steps/day) without exceeding the system’s peak power draw.
        </motion.p>

        <div className="clear-both" />
      </motion.div>

      <div className="skills-container">
        <motion.h3
          className="skills-title"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          Top Skills Utilized
        </motion.h3>
        <motion.div
          className="skills-wrapper"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, i) => (
            <span key={i} className="skill-pill">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BIONIC;
