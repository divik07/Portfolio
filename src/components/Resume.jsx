import React from 'react';
import { motion } from 'framer-motion';
import resumePdf from '../assets/Resume.pdf';

const Resume = () => (
  <motion.section
    id="resume"
    className="relative w-screen h-screen bg-gray-100"
    style={{ marginLeft: "calc((100% - 100vw)/2)" }}

    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    {/* Fullscreen PDF embed */}
    <object
      data={resumePdf}
      type="application/pdf"
      className="w-full h-full"
    >
      <p className="p-4 text-center text-gray-600">
        Your browser does not support PDFs.{' '}
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Download Resume
        </a>
      </p>
    </object>
  </motion.section>
);

export default Resume;
