import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative w-screen min-h-screen bg-gradient-to-b from-slate-900 via-black to-gray-900 text-gray-100 px-6 md:px-24 py-24"
      style={{ marginLeft: 'calc((100% - 100vw)/2)' }}
    >
      {/* Background Blobs (non-interactive) */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-900 opacity-30 rounded-full blur-2xl pointer-events-none z-0"></div>
      <div className="absolute top-1/4 right-[15%] w-[300px] h-[300px] bg-yellow-700 opacity-10 rounded-full blur-xl pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[40%] w-[260px] h-[260px] bg-pink-800 opacity-10 rounded-full blur-xl pointer-events-none z-0"></div>

      <motion.h2
        className="relative z-10 text-5xl sm:text-6xl md:text-7xl font-bold text-blue-300 mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.h2>

      <div className="relative z-10 flex flex-col items-center overflow-y-auto">
        {submitted ? (
          <motion.p
            className="text-green-400 font-semibold text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thank you! I'll get back to you soon.
          </motion.p>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white/5 p-8 sm:p-10 md:p-12 rounded-xl backdrop-blur-md border border-gray-700 shadow-lg space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label htmlFor="name" className="block text-base md:text-lg font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-md bg-transparent border border-gray-600 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-base md:text-lg font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-md bg-transparent border border-gray-600 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-base md:text-lg font-medium text-gray-200">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-md bg-transparent border border-gray-600 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl font-medium rounded-md transition"
            >
              <HiOutlineMail className="mr-3 h-6 w-6 md:h-7 md:w-7" /> Send Message
            </button>
          </motion.form>
        )}

        {/* Social Links */}
        <motion.div
          className="relative z-10 mt-12 flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="https://github.com/divik07" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400 transition z-20">
            <FaGithub className="h-8 w-8 md:h-10 md:w-10" />
          </a>
          <a href="https://www.linkedin.com/in/divikbhargava/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400 transition z-20">
            <FaLinkedin className="h-8 w-8 md:h-10 md:w-10" />
          </a>
          <a href="mailto:bbdivik2670244@gmail.com" className="text-gray-200 hover:text-blue-400 transition z-20">
            <FaEnvelope className="h-8 w-8 md:h-10 md:w-10" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
