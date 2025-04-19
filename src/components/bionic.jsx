import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BIONIC = () => {
  const navigate = useNavigate();
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

  return (
    <section
      id="bionic"
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
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        Bionic System for Achilles Tendon Stiffness
      </motion.h2>

      <motion.div
        className="relative max-w-6xl mx-auto mb-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src={images[0]}
          alt="Bionic System Overview"
          className="float-right ml-8 mb-4 w-full md:w-2/5 object-contain rounded-xl shadow-md"
        />
        <div className="text-gray-300 text-lg leading-relaxed space-y-6 text-justify">
          <motion.p variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            This project developed a motorized exoskeleton to assist individuals with stiffened Achilles tendons and weakened calf muscles. The device was designed to reduce the excessive metabolic cost of walking by supplementing plantarflexion torque, thereby offloading strain from compromised muscles while restoring near-natural gait mechanics. The work combined biomechanical modeling, conceptual system design, actuator optimization, and transmission design to create a functional prototype that addresses real-world mobility challenges.
          </motion.p>

          <img
            src={images[1]}
            alt="Path Actuator Optimization"
            className="float-left mr-8 mb-4 w-full md:w-1/4 object-contain rounded-xl shadow-md"
          />

          <motion.p variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            Using OpenSim, I simulated the effects of Achilles tendon stiffness by modifying two key muscle-tendon parameters: tendon slack length and maximum isometric force. The gastrocnemius (GAS) and soleus (SOL) muscles were adjusted to replicate clinical observations, with slack lengths reduced by 1 cm (GAS) and 1.14 cm (SOL), and peak forces decreased to 1300N (GAS) and 3000N (SOL). Metabolic cost analysis confirmed these changes led to significantly higher energy expenditure during plantarflexion, mirroring the challenges faced by patients with this pathology. To compensate for the weakened muscles, I designed a Path Actuator in OpenSim and systematically optimized its placement and force characteristics. Residual analysis validated the model's biomechanical fidelity, confirming that joint moments and tracking errors remained within acceptable thresholds for normal gait. Using the OpenSim Computed Muscle Control(CMC), the actuator moments were calculated for each step of the gait cycle.
          </motion.p>

          <img
            src={images[2]}
            alt="Concept and Transmission"
            className="float-right ml-8 mb-4 w-full md:w-1/3 object-contain rounded-xl shadow-md"
          />

          <motion.p variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            The ankle torque-angle profiles from OpenSim informed the selection of a U8-KV100 motor, chosen for its high torque density (140 mNm/A) and lightweight (230g) properties. The exoskeleton's mechanical architecture, beginning with concept sketches that evolved into our final three-stage transmission system. The design incorporated a 45:1 planetary gearbox for primary speed reduction, a rotary-to-linear conversion mechanism using a 40mm diameter spool, and a modified ankle joint with nonlinear linkage to maintain optimal torque throughout the gait cycle. I developed a comprehensive MATLAB model to optimize the transmission system, focusing on minimizing heat losses. The analysis evaluated transmission ratios from N=10 to N=1000, accounting for copper losses in motor windings, frictional losses in the planetary gear set, and inertial losses. Results showed optimal efficiency at transmission ratio N=100-130, with the U8-KV100 demonstrating average power losses below 15W during gait cycles. The serial elastic actuator (SEA) was also added and co-optimized, with its stiffness set to 180 Nm/rad for optimal force bandwidth, energy recovery, and impact reduction.
          </motion.p>

          <motion.p variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            The complete exoskeleton prototype added 4.02 kg of mass but demonstrated no increase in metabolic cost compared to unassisted walking with the pathology. A 5000mAh battery provided sufficient capacity for approximately 11 days of operation (5000 steps/day). The system maintained peak power draw well within battery capabilities.
          </motion.p>
        </div>
        <div className="clear-both" />
      </motion.div>

      <div className="max-w-3xl mx-auto mt-16">
        <motion.h3
          className="text-3xl font-semibold text-blue-300 mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          Top Skills Utilized
        </motion.h3>
        <motion.div
          className="bg-white/5 p-6 rounded-xl border border-gray-700 backdrop-blur-md"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
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
      </div>
    </section>
  );
};

export default BIONIC;
