import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from 'react-router-dom';

const experienceData = [
  {
    title: 'R&D Design Engineer II',
    company: 'Becton Dickinson and Company',
    location: 'Bangalore, IN',
    date: 'Jul 2020 - Aug 2023',
    summary: 'Led end-to-end mechanical design of medical devices, including syringes, needles, disinfecting caps, and electro-mechanical device. Created detailed CAD models with GD&T and performed CAE simulations to validate product functional characteristics. Planned and executed design verification activities—developing protocols, test methods, custom fixtures, and MSA plans. Applied statistical tools like Minitab for data-driven decision-making. Drove innovation in medical device design by developing novel concepts, prototyping functional models, and leading rigorous testing. Filed 9 patents and delivered 22 invention disclosures through innovative design solutions.',
    link: '/experience/bd',
    image: '/bd.png'
  },
  {
    title: 'Engineer Intern',
    company: 'ISGEC Heavy Engineering Ltd.',
    location: 'Yamunanagar, IN',
    date: 'May 2019 - Jun 2019',
    summary: 'Drove a 15% efficiency improvement in a mechanical press through strategic redesign of key components: connecting rod, gears box, and counterbalance cylinders. Minimized machine downtime, through optimized component design',
    link: null,
    image: '/ISGEC.png'
  },
  {
    title: 'Research Intern',
    company: 'Aeronautical Development Establishment (ADE)',
    location: 'Bangalore, IN',
    date: 'May 2018 - Jul 2018',
    summary: 'Performed CFD simulations of a two-element wing in ANSYS Fluent at various flow Reynolds numbers, calculated aerodynamic characteristics, and proposed a cove-tab design improving lift-to-drag ratio by 9%',
    link: '/experience/ade',
    image: '/ade.png'
  },
  {
    title: 'Head of Design Department',
    company: 'ASME Projects Team, VIT',
    location: 'Vellore, IN',
    date: 'Jan 2017 - Jan 2019',
    summary: 'Contributed to the design and fabrication of innovative robots and radio-controlled airplanes for diverse applications. Provided strategic direction and technical expertise, leading team to winning multiple aeromodelling competition',
    link: null,
    image: '/asme.png'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-screen min-h-screen bg-gradient-to-b from-slate-900 via-black to-gray-900 text-gray-100 px-6 md:px-24 py-24" style={{ marginLeft: 'calc((100% - 100vw)/2)' }}>
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-900 opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-32 right-0 w-[450px] h-[450px] bg-purple-900 opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/4 left-[25%] w-[250px] h-[250px] bg-yellow-700 opacity-20 rounded-full blur-xl"></div>
      <div className="absolute bottom-[10%] left-[0%] w-[230px] h-[230px] bg-pink-800 opacity-20 rounded-full blur-xl"></div>
      <div className="absolute top-[30%] right-[30%] w-[180px] h-[180px] bg-indigo-800 opacity-20 rounded-full blur-xl"></div>
      <div className="absolute top-[50%] left-[50%] w-[200px] h-[200px] bg-cyan-700 opacity-20 rounded-full blur-xl"></div>

      <h2 className="text-5xl font-bold text-blue-300 mb-16 text-left relative z-10">Career History</h2>
      <VerticalTimeline lineColor="#e5e7eb">
        {experienceData.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <VerticalTimelineElement
              key={idx}
              contentStyle={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(6px)', color: '#fff', border: '1px solid #374151', textAlign: 'left' }}
              contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
              date={<div className={`text-sm text-gray-400 ${!isLeft ? 'pl-95 text-left' : ''}`}>{exp.date}</div>}
              iconStyle={{ background: '#f3f4f6', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              icon={<img src={exp.image} alt={exp.company} className="w-20 h-20 rounded-full object-contain" />}
            >
              <div className="relative text-left">
                <h3 className="text-xl font-bold text-blue-200">{exp.title}</h3>
                <h4 className="text-md font-semibold text-gray-300 mb-2">{exp.company}, {exp.location}</h4>
                <p className="text-sm text-gray-400 mb-2 text-justify">{exp.summary}</p>
                {exp.link && (
                  <Link
                    to={exp.link}
                    className="text-blue-400 hover:text-blue-500 text-sm font-semibold"
                  >
                    Read more
                  </Link>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
