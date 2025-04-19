import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaCogs } from 'react-icons/fa';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { MdPrecisionManufacturing } from 'react-icons/md';

const Hero = () => {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <section
      className="relative w-screen min-h-screen overflow-hidden bg-gradient-to-b from-blue-100 via-blue-200 to-[#0a1d2b] dark:from-gray-900 dark:via-gray-800 dark:to-black"
      style={{ marginLeft: "calc((100% - 100vw)/2)" }}
       >
      {/* Blueprint Grid Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      ></div>

      {/* Spinning Gears */}
      <div className="absolute top-[5%] right-[2%] text-white/10 dark:text-white/10 text-[180px] md:text-[260px] z-0 animate-[spin_25s_linear_infinite]">
        <FaCogs />
      </div>
      <div className="absolute bottom-[5%] left-[3%] text-white/10 dark:text-white/10 text-[120px] md:text-[170px] z-0 animate-[spin_35s_linear_infinite]">
        <FaCogs />
      </div>

      {/* Robotic Arm - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-[3%] right-[5%] text-white/10 dark:text-white/10 text-[400px] z-0 scale-x-[-1]">
        <MdPrecisionManufacturing />
      </div>

      {/* Navbar - Sticky and responsive */}
      <nav className="sticky top-0 left-0 w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-y-2 px-4 py-4 md:px-6 z-30 bg-transparent text-xs sm:text-sm md:text-lg font-semibold text-gray-700 dark:text-gray-200">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#education" className="hover:text-blue-500 transition">Education</a>
          <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? <SunIcon className="h-4 w-4 md:h-5 md:w-5" /> : <MoonIcon className="h-4 w-4 md:h-5 md:w-5" />}
        </button>
      </nav>

      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200 dark:bg-blue-900 opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-32 right-0 w-[450px] h-[450px] bg-purple-200 dark:bg-purple-900 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-[10%] w-[300px] h-[300px] bg-teal-100 dark:bg-teal-800 opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-[10%] left-[40%] w-[250px] h-[250px] bg-pink-100 dark:bg-pink-900 opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-indigo-100 dark:bg-indigo-900 opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-[5%] right-[5%] w-[350px] h-[350px] bg-yellow-100 dark:bg-yellow-900 opacity-10 rounded-full blur-2xl"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 px-4 md:px-16 pt-30">
        {/* Profile Image Container */}
        <div className="flex-shrink-0">
          <img
            src="./profile.jpg"
            alt="Profile"
            className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-xl"
          />
        </div>

        {/* Text Content Container */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-blue-900 dark:text-blue-300 leading-tight">
            Divik Bhargava
          </h1>

          <p className="text-sm sm:text-lg md:text-3xl text-gray-600 dark:text-gray-400 font-semibold tracking-wide uppercase">
            Mechanical Engineer <span className="mx-2 text-gray-400">|</span> Product Designer <span className="mx-2 text-gray-400">|</span> Innovator
          </p>

          <p className="text-sm sm:text-base md:text-xl text-gray-700 dark:text-gray-300 tracking-tight">
            MS in Mechanical Engineering @ UCLA <span className="mx-2 text-gray-400">|</span> Former Mechanical Design Engineer II @ BD
          </p>

          <div className="mt-4 p-4 rounded-xl bg-white/10 dark:bg-white/10 border border-gray-200 dark:border-gray-700 shadow-md relative overflow-hidden max-w-3xl md:max-w-xl lg:max-w-2xl">
            <p className="relative text-sm sm:text-base md:text-xl text-gray-800 dark:text-gray-100 font-medium italic">
              I turn ideas into engineered products through design, simulation, and hands-on development.
            </p>
          </div>

          <div className="flex space-x-6 mt-4">
            <a href="https://github.com/divik07" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-700 dark:text-white hover:text-blue-500 transition text-[22px] md:text-[28px]" />
            </a>
            <a href="https://www.linkedin.com/in/divikbhargava/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-700 dark:text-white hover:text-blue-500 transition text-[22px] md:text-[28px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
