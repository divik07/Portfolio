// Skills.jsx
import React from 'react';
import '../assets/Style/Skills.css';

const categorizedSkills = {
  'Design & Manufacturing': [
    'SolidWorks', 'CATIA', 'GD&T & Tolerance Stackup',
    '3D Printing', 'Injection Molding', 'Die Casting',
    'Sheet Metal Fabrication'
  ],
  'Product Development': [
    'New Product Development', 'DFSS', 'Test Method Development',
    'Design Control', 'FMEA', 'Root Cause Analysis',
    'ISO 13485', 'ISO 14971', 'Design Verification'
  ],
  'Mechanical Analysis & Simulation': [
    'Design of Experiments (DOE)', 'CFD', 'Structural Analysis',
    'FEA', 'Statistical Analysis', 'Process Capability Analysis',
    'ANSYS', 'Minitab', 'MATLAB', 'Python'
  ]
};

export default function Skills() {
  return (
    <section className="portfolio-skills-section">
      <div className="portfolio-skills-box">
        {/* Skills heading */}
        <h3 className="skills-title">Skills</h3>

        <div className="box">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h4 className="category-title">{category}</h4>
              <div className="skill-list">
                {skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
