// About.jsx
import React from 'react';
import '../assets/Style/About.css';

const scrollTo = (id) => () => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const About = () => {
  return (
    <section
      id="about"
      className="about-section"
    >
      <div className="about-bg-icons">
        {/* background gears and blobs purely via CSS or static elements */}
        <div className="gear top-right" />
        <div className="gear bottom-left" />
        <div className="arm" />
      </div>

      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <div className="about-text">
          <p>
            I'm a Mechanical Design Engineer passionate about designing innovative mechanical systems and turning concepts into real-world products. My academic background includes an MS in Mechanical Engineering from UCLA, where I honed my expertise in design, simulation, and system-level problem-solving.
          </p>
          <p>
            My professional journey includes impactful work as a Mechanical Design Engineer II at BD, where I developed medical devices with a strong focus on mechanical functionality, manufacturability, and user safety. I worked across various domains—from syringe systems to electromechanical devices—integrating tools like SolidWorks, FEA, CFD, tolerance stack-up analysis, and design verification.
          </p>
          <p>
            I enjoy working at the intersection of mechanical design, product development, and engineering analysis. Whether it’s designing 3D CAD assemblies, optimizing components through CAE, or collaborating with cross-functional teams, I strive to bring mechanical solutions to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
