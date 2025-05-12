// src/components/Education.jsx
import React, { useState } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../assets/Style/Education.css';

// Use BASE_URL for public assets
const baseUrl = import.meta.env.BASE_URL;

const education = [
  {
    degree: 'MS in Mechanical Engineering',
    institution: 'University of California, Los Angeles (UCLA)',
    date: 'Sep 2023 – Dec 2024',
    summary: 'Concentration in Design, Manufacturing, and Robotics.',
    gpa: '4.0/4.0',
    coursework: [
      'Kinematics of Robotic Systems',
      'Dynamics of Robotic Systems',
      'Control of Robotic Systems',
      'Mechanics of Flexible Structures and Soft Robots',
      'Orthopaedic Biomechanical Engineering',
      'Complaint Mechanism Design',
      'Bionic Systems Engineering',
      'Analytical Fracture Mechanics',
      'Linear Dynamic Systems',
      'Computational Methods in Structural Mechanics'
    ],
    logo: `${baseUrl}ucla-logo.png`,
    collapsible: true
  },
  {
    degree: 'B.Tech in Mechanical Engineering',
    institution: 'Vellore Institute of Technology (VIT)',
    date: 'Jul 2016 – Jun 2020',
    gpa: '3.91/4.0',
    coursework: [],
    publications: [
      '"Drag and heat-flux reduction using counterflow jet and spike - Analysis of their equivalence for a blunt cone geometry at Mach 8." Journal of Applied Fluid Mechanics, Volume 14, No. 2, pp. 375-388'
    ],
    logo: `${baseUrl}VIT-logo.png`,
    collapsible: true
  }
];

function EducationItem({ edu }) {
  const [open, setOpen] = useState(false);
  const hasDetails = (edu.coursework && edu.coursework.length > 0) || (edu.publications && edu.publications.length > 0);

  return (
    <VerticalTimelineElement
      date={edu.date}
      icon={<div />}
      iconStyle={{
        background: '#f3f4f6',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${edu.logo})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h3 className="vertical-timeline-element-title">{edu.degree}</h3>
      <h4 className="vertical-timeline-element-subtitle">{edu.institution}</h4>
      {edu.summary && <p className="edu-summary">{edu.summary}</p>}
      {edu.gpa && <p className="edu-gpa">GPA: {edu.gpa}</p>}

      {edu.collapsible && hasDetails && (
        <>
          <button
            className="details-toggle"
            onClick={() => setOpen(prev => !prev)}
          >
            {open ? 'Hide Details' : 'Show Details'}
          </button>
          {open && (
            <div className="edu-coursework">
              {edu.coursework && edu.coursework.length > 0 && (
                <>
                  <h5>Relevant Coursework:</h5>
                  <ul>
                    {edu.coursework.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </>
              )}
              {edu.publications && edu.publications.length > 0 && (
                <div className="edu-publications">
                  <h5>Publications:</h5>
                  <ul>
                    {edu.publications.map((pub, i) => (
                      <li key={i}>{pub}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </VerticalTimelineElement>
  );
}

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="education-heading">Education</h2>
      <VerticalTimeline className="education-timeline">
        {education.map((edu, idx) => (
          <EducationItem edu={edu} key={idx} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
