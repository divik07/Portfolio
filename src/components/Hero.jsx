import React, { useState, useLayoutEffect } from 'react';
import '../assets/Style/Hero.css';
import { FaGithub, FaLinkedin, FaCogs } from 'react-icons/fa';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  // Always start in light mode
  const [darkMode, setDarkMode] = useState(false);

  // Apply or remove the 'dark' class based on state
  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Toggle dark mode on button click
  const toggle = () => {
    setDarkMode(prev => !prev);
  };

  // Smooth scroll handler
  const scrollTo = (id) => () =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero-section">
      <div className="grid-overlay" />

      <div className="gear-large"><FaCogs /></div>
      <div className="gear-small"><FaCogs /></div>

      <nav className="hero-nav">
        <ul>
          <li onClick={scrollTo('about')}>About</li>
          <li onClick={scrollTo('education')}>Education</li>
          <li onClick={scrollTo('experience')}>Experience</li>
          <li onClick={scrollTo('projects')}>Projects</li>
          <li onClick={scrollTo('contact')}>Contact</li>
          <li><a href="Resume">Resume</a></li>
        </ul>
        <button onClick={toggle} className="theme-toggle">
          {darkMode ? <SunIcon className="icon" /> : <MoonIcon className="icon" />}
        </button>
      </nav>

      {['blue','purple','teal','pink','indigo','yellow'].map((c) => (
        <div key={c} className={`blob-${c} background-blob`} />
      ))}

      <div className="hero-content">
        <img src="./profile.jpg" alt="Profile" className="profile-pic" />
        <div className="hero-text">
          <h1 className="hero-title">Divik Bhargava</h1>
          <p className="hero-subtitle">
            Mechanical Engineer | Product Designer | Innovator
          </p>
          <p className="hero-detail">
            MS in Mechanical Engineering @ UCLA | Former Mechanical Design Engineer II @ BD
          </p>
          <div className="hero-blurb">
            I turn ideas into engineered products through design, simulation, and hands-on development.
          </div>
          <div className="hero-socials">
            <a href="https://github.com/divik07" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/divikbhargava/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
