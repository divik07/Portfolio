// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import BDDetail from './components/BDDetail';
import ADEDetail from './components/ADEDetail';
import Projects from './components/Projects';
import CHOPP from './components/CHOPP';
import SQUARE from './components/square';
import BIONIC from './components/bionic';
import Catapult from './components/Catapult';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <ThemeProvider>
      <Router basename="/Portfolio">
        <main className="font-sans">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Education />
                  <Experience />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/about"      element={<About />} />
            <Route path="/education"  element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/BD"         element={<BDDetail />} />
            <Route path="/ADE"        element={<ADEDetail />} />
            <Route path="/CHOPP"      element={<CHOPP />} />
            <Route path="/SQUARE"     element={<SQUARE />} />
            <Route path="/Bionic"     element={<BIONIC />} />
            <Route path="/Catapult"   element={<Catapult />} />
            <Route path="/Contact"    element={<Contact />} />
            <Route path="/resume"     element={<Resume />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
