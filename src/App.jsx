import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import BDDetail from './components/BDDetail';
import ADEDetail from './components/ADEDetail';
import Projects from './components/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CHOPPDetail from './components/CHOPP';
import SQUARE from './components/square';
import BIONIC from './components/bionic';
import CATAPULT from './components/Catapult';

function App() {
  return (
    <Router>
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
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="experience/BD" element={<BDDetail />} />
          <Route path= "experience/ADE" element ={<ADEDetail />} />
          <Route path="Projects/CHOPP" element ={<CHOPPDetail />} />
          <Route path = "Projects/SQUARE" element={<SQUARE />} />
          <Route path = "Projects/Bionic" element={<BIONIC />} />
          <Route path = "Projects/Catapult" element={<CATAPULT />} />
          {/* Add more routes like /experience/bd if needed */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
