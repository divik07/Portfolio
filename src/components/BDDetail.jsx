import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
import '../assets/Style/BDDetail.css';

const BdExperienceDetail = () => {
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState(0);

  const products = [
    'BDProduct1.png',
    'BDProduct2.png',
    'BDProduct3.png',
    'BDProduct4.png',
    'BDProduct5.png'
  ];

  const patents = [
    'Patent1.png',
    'Patent6.png',
    'Patent3.png',
    'Patent4.png',
    'Patent7.png',
    'Patent5.png',
    'Patent2.png'
  ];

  const captions = [
    'Multi-chamber syringe design for sequential drug delivery',
    'Dual chamber syringe assembly with floating stopper',
    'Disinfection cap for male and female connectors with deformable housing',
    'Disinfecting cap for male and female connectors with clamping arms',
    'Protective Cap for Preventing Contamination of a Needle-Free Connector',
    'Secondary Securement Device for Vascular Access Device',
    'Secondary Securement Device for Vascular Access Device'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const prodTimer = setInterval(() => {
      setCurrentProduct(prev => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(prodTimer);
  }, [products.length]);

  return (
    <section id="experience">
      {/* Go Back */}
      <button onClick={() => navigate(-1)} className="back-button">
        <svg className="icon" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Go Back</span>
      </button>

      {/* Header */}
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        R&D Design Engineer II @ BD
      </motion.h2>
      <motion.p
        className="experience-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Jul 2020 – Aug 2023 | Bangalore, India
      </motion.p>

      {/* Products Carousel & Text */}
      <div className="experience-carousel">
        <div className="experience-carousel-container">
          <div className="experience-carousel-img-wrapper">
            <AnimatePresence>
              <motion.div
                key={currentProduct}
                className="experience-slide"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${products[currentProduct]}`}
                  alt={`Product ${currentProduct + 1}`}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="experience-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>As an R&D Design Engineer at Becton Dickinson (BD), I was involved in the full lifecycle of medical device development, from concept through validation. I created detailed 3D CAD models of needle bodies, syringe components, and hubs in SolidWorks, with a focus on high-volume injection molding and manufacturability. To ensure dimensional precision and assembly compatibility, I applied GD&T and performed tolerance stack-up analyses—especially critical for neuraxial products like NRFit spinal and filter needles.</p>
          <p>In support of product verification, I conducted CAE simulations to evaluate functional characteristics such as needle shield pull-out force, syringe leakage, and syringe-needle fit. These simulations guided risk-based sampling and design optimization prior to physical testing. I also led Design Verification (DV) planning, which included developing custom test methods, measurement system analysis (MSA), and building sampling strategies to ensure prototypes met all performance and compliance requirements.</p>
          <p>Risk Analysis and FMEA were integral to my design process. I proactively identified potential failure points and implemented design improvements to enhance reliability and patient safety. Additionally, I utilized sample bracketing and molding studies to confirm consistent product quality across a range of production conditions, ensuring real-world robustness.</p>
          <p>My role also extended into innovation and concept development. I ideated and prototyped multiple medical device concepts, including multi-chamber syringes, dual disinfection caps, and catheter securement devices. Using 3D printing, I rapidly iterated designs to test feasibility, ergonomics, and functionality. One standout project involved designing an electromechanical device using a piezoelectric actuator to transmit vibrational energy through a catheter—aimed at disrupting biofilm formation. I conducted DOE studies to optimize actuator materials, placement, and device enclosures for maximum energy transfer.</p>
          <p>These efforts culminated in filing 9 US patents for innovations across syringe systems, disinfection technology, and needle safety devices—demonstrating my passion for solving complex engineering problems and advancing healthcare through thoughtful, functional design.</p>
        </motion.div>
        <div className="clear-both" />
      </div>

      {/* Featured Utility Patents Slider */}
      <div className="patents-section">
        <motion.h3
          className="patents-section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Utility Patents
        </motion.h3>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500 }}
          navigation={true}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {patents.map((patent, idx) => (
            <SwiperSlide key={idx}>
              <div className="experience-carousel-img-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}${patent}`}
                  alt={`Patent ${idx + 1}`}
                />
              </div>
              <p className="patents-caption">{captions[idx]}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <motion.h3
          className="skills-section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Key Skills Utilized
        </motion.h3>
        <div className="skills-wrapper-experience">
          {[
            'Mechanical Design', 'New Product Development', 'Design of Experiments (DOE)', 'DFSS',
            'CAD', 'CFD', 'FEA', 'Structural Analysis', '3D Printing', 'GD&T',
            'Injection Molding', 'Die Casting', '21 CFR Part 820', 'ISO 13485',
            'ISO 14971', 'FMEA', 'Design Control', 'Test Method Development',
            'Design Verification', 'Statistical Analysis', 'Root Cause Analysis'
          ].map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BdExperienceDetail;
