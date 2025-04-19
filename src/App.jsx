import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import BDDetail from './components/BDDetail';
import ADEDetail from './components/ADEDetail';
import Projects from './components/Projects';
import CHOPP from './components/CHOPP';
import SQUARE from './components/square';
import BIONIC from './components/bionic';
import CATAPULT from './components/Catapult';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/Portfolio">
      <main className="font-sans">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Education />
                <Experience />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/BD" element={<BDDetail />} />
          <Route path="/ADE" element={<ADEDetail />} />
          <Route path="/CHOPP" element={<CHOPP />} />
          <Route path="/SQUARE" element={<SQUARE />} />
          <Route path="/Bionic" element={<BIONIC />} />
          <Route path="/Catapult" element={<CATAPULT />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
