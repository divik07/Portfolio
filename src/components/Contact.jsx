// Contact.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import '../assets/Style/Contact.css';

// Replace with your Formspree form ID
const FORM_ENDPOINT = 'https://formspree.io/f/xnnpewpr';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const { name, email, message } = formData;

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Failed to send. Please try again later.');
      }
    } catch {
      setError('Failed to send. Please try again later.');
    }
  };

  return (
    <section id="contact">
      {/* Blobs (dark mode only) */}
      <div className="blob blob-blue" />
      <div className="blob blob-yellow" />
      <div className="blob blob-pink" />

      <div className="contact-container">
        {/* Info Panel */}
        <motion.div
          className="info-panel"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Connect
          </motion.h2>
          <p className="contact-text">
            Have a question, idea, or collaboration in mind? Fill out your details below and
            I'll get back to you shortly!
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/divik07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/divikbhargava/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:bbdivik2670244@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Form Panel */}
        <motion.div
          className="form-panel"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {submitted ? (
            <p className="success-text">Thank you! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {error && <p className="error-text">{error}</p>}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Name <span className="error-text">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="error-text">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="error-text">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                <HiOutlineMail className="icon" /> Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
