import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';


const BdExperienceDetail = () => {
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState(0);
  const products = ['BDProduct1.png', 'BDProduct2.png', 'BDProduct3.png','BDProduct4.png', 'BDProduct5.png'];
  const patents = ['Patent1.png', 'Patent6.png', 'Patent3.png','Patent4.png', 'Patent7.png', 'Patent5.png', 'Patent2.png'];
  const captions = [
    'Multi-chamber syringe design for sequential drug delivery',
    'Dual chamber syringe assembly with floating stopper',
    'Disinfection cap for male and female connectors with deformable housing',
    'Disinfecting cap for male and female connectors with clamping arms',
    'Protective Cap for Preventing Contamination of a Needle-Free Connector',
    'Secondary Securement Device for Vascular Access Device',
    'Secondary Securement Device for Vascular Access Device',

  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const prodTimer = setInterval(() => {
      setCurrentProduct(prev => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(prodTimer);
  }, [products.length]);

  return (
    <section
      id="experience"
      className="relative w-screen min-h-screen bg-gradient-to-b from-slate-900 via-black to-gray-900 text-gray-100 px-6 md:px-24 py-8"
      style={{ marginLeft: 'calc((100% - 100vw)/2)' }}
      
    >
    <div className="mb-10">
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
        className="text-4xl md:text-5xl font-bold text-blue-300 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        R&D Design Engineer II @ BD
      </motion.h2>

      <motion.p
        className="text-md text-gray-400 mb-12 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Jul 2020 – Aug 2023 | Bangalore, India
      </motion.p>

      <div className="max-w-6xl mx-auto mb-16">
        {/* Floated product carousel on the right */}
        <div className="md:float-right md:w-1/3 mb-8 md:mb-0 ml-0 md:ml-8">
          <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={currentProduct}
              className="absolute bg-white/10 p-4 rounded-xl shadow-md backdrop-blur-sm border border-gray-700 w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={`/${products[currentProduct]}`}
                alt={`Product ${currentProduct + 1}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>
          </div>
        </div>

        {/* Text content flowing around image */}
        <motion.div
          className="text-gray-200 text-lg leading-relaxed text-justify space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="mb-6">
            As an R&D Design Engineer at Becton Dickinson (BD), I was involved in the full lifecycle of medical device development, from concept through validation. I created detailed 3D CAD models of needle bodies, syringe components, and hubs in SolidWorks, with a focus on high-volume injection molding and manufacturability. To ensure dimensional precision and assembly compatibility, I applied GD&T and performed tolerance stack-up analyses—especially critical for neuraxial products like NRFit spinal and filter needles.
          </p>
          <p className="mb-6">
            In support of product verification, I conducted CAE simulations to evaluate functional characteristics such as needle shield pull-out force, syringe leakage, and syringe-needle fit. These simulations guided risk-based sampling and design optimization prior to physical testing. I also led Design Verification (DV) planning, which included developing custom test methods, measurement system analysis (MSA), and building sampling strategies to ensure prototypes met all performance and compliance requirements.
          </p>
          <p className="mb-6">
            Risk Analysis and FMEA were integral to my design process. I proactively identified potential failure points and implemented design improvements to enhance reliability and patient safety. Additionally, I utilized sample bracketing and molding studies to confirm consistent product quality across a range of production conditions, ensuring real-world robustness.
          </p>
          <p className="mb-6">
            My role also extended into innovation and concept development. I ideated and prototyped multiple medical device concepts, including multi-chamber syringes, dual disinfection caps, and catheter securement devices. Using 3D printing, I rapidly iterated designs to test feasibility, ergonomics, and functionality. One standout project involved designing an electromechanical device using a piezoelectric actuator to transmit vibrational energy through a catheter—aimed at disrupting biofilm formation. I conducted DOE studies to optimize actuator materials, placement, and device enclosures for maximum energy transfer.
          </p>
          <p className="mb-6">
            These efforts culminated in filing 9 US patents for innovations across syringe systems, disinfection technology, and needle safety devices—demonstrating my passion for solving complex engineering problems and advancing healthcare through thoughtful, functional design.
          </p>
        </motion.div>
        <div className="clear-both" />
      </div>

      {/* Patents Slider using Swiper */}
      <div className="max-w-5xl mx-auto mt-12">
        <motion.h3
          className="text-3xl font-semibold text-blue-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Utility Patents
        </motion.h3>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          autoplay={{ delay: 2500 }}
          loop={true}
          navigation={true}
          className="relative"
        >
          {patents.map((patent, idx) => (
            <SwiperSlide key={idx} className="flex flex-col items-center justify-center px-2">
              <div className="w-80 h-80 flex items-center justify-center">
                <img
                  src={`/${patent}`}
                  alt={`Patent ${idx + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center text-gray-400 italic mt-2">
                {captions[idx]}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

  {/* Skills Section */}
  <div className="max-w-6xl mx-auto mt-12">
        <motion.h3
          className="text-3xl font-semibold text-blue-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Key Skills Utilized
        </motion.h3>
        <div className="bg-white/5 p-6 rounded-xl border border-gray-700 backdrop-blur-md">
  <div className="flex flex-wrap justify-start gap-3">
    {[
      'Mechanical Design', 'New Product Development', 'Design of Experiments (DOE)', 'DFSS',
      'CAD', 'CFD', 'FEA', 'Structural Analysis', '3D Printing', 'GD&T',
      'Injection Molding', 'Die Casting', '21 CFR Part 820', 'ISO 13485',
      'ISO 14971', 'FMEA', 'Design Control', 'Test Method Development',
      'Design Verification', 'Statistical Analysis', 'Root Cause Analysis'
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
      </div>
    </section>
  );
};

export default BdExperienceDetail;
