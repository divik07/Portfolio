import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/Style/Experience.css';
import { Link } from 'react-router-dom';

const experienceData = [
  {
    title: 'R&D Design Engineer II',
    company: 'Becton Dickinson and Company',
    location: 'Bangalore, IN',
    date: 'Jul 2020 - Aug 2023',
    summary: 'Led end-to-end mechanical design of medical devices, including syringes, needles, disinfecting caps, and electro-mechanical device. Created detailed CAD models with GD&T and performed CAE simulations to validate product functional characteristics. Planned and executed design verification activities—developing protocols, test methods, custom fixtures, and MSA plans. Applied statistical tools like Minitab for data-driven decision-making. Drove innovation in medical device design by developing novel concepts, prototyping functional models, and leading rigorous testing. Filed 9 patents and delivered 22 invention disclosures through innovative design solutions.',
    link: '/BD',
    image: `${import.meta.env.BASE_URL}bd.png`
  },
  {
    title: 'Engineer Intern',
    company: 'ISGEC Heavy Engineering Ltd.',
    location: 'Yamunanagar, IN',
    date: 'May 2019 - Jun 2019',
    summary: 'Drove a 15% efficiency improvement in a mechanical press through strategic redesign of key components: connecting rod, gearbox, and counterbalance cylinders. Minimized machine downtime through optimized component design.',
    link: null,
    image: `${import.meta.env.BASE_URL}ISGEC.png`
  },
  {
    title: 'Research Intern',
    company: 'Aeronautical Development Establishment (ADE)',
    location: 'Bangalore, IN',
    date: 'May 2018 - Jul 2018',
    summary: 'Performed CFD simulations of a two-element wing in ANSYS Fluent at various flow Reynolds numbers, calculated aerodynamic characteristics, and proposed a cove-tab design improving lift-to-drag ratio by 9%.',
    link: '/ADE',
    image: `${import.meta.env.BASE_URL}ade.png`
  },
  {
    title: 'Head of Design Department',
    company: 'ASME Projects Team, VIT',
    location: 'Vellore, IN',
    date: 'Jan 2017 - Jan 2019',
    summary: 'Contributed to the design and fabrication of innovative robots and radio-controlled airplanes for diverse applications. Provided strategic direction and technical expertise, leading team to win multiple aeromodelling competitions.',
    link: null,
    image: `${import.meta.env.BASE_URL}asme.png`
  }
];

const Experience = () => (
  <section id="experience" className="experience-section">
    <h2 className="experience-heading">Career History</h2>
    <VerticalTimeline lineColor="#e5e7eb" className="experience-timeline">
      {experienceData.map((exp, idx) => (
        <VerticalTimelineElement
          key={idx}
          date={<span className="exp-date">{exp.date}</span>}
          dateClassName="exp-date"
          icon={<img src={exp.image} alt={exp.company} className="exp-icon" />}
          iconStyle={{ background: '#f3f4f6', padding: 0, boxShadow: 'none' }}
          contentStyle={{ background: 'var(--content-bg)', color: 'var(--text-color)', border: '1px solid var(--border-color)' }}
          contentArrowStyle={{ borderRight: '7px solid var(--content-bg)' }}
        >
          <h3 className="exp-title">{exp.title}</h3>
          <h4 className="exp-subtitle">{exp.company}, {exp.location}</h4>
          <p className="exp-summary">{exp.summary}</p>
          {exp.link && (
            <Link to={exp.link} className="exp-link">Read more</Link>
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </section>
);

export default Experience;