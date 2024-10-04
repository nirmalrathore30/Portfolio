import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-teal-400 mb-10">Get in Touch</h2>
        <p className="text-gray-400 mb-6">I'm open to collaborating on projects or discussing opportunities.</p>
        
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <FaEnvelope className="text-teal-400" size={24} />
            <a href="mailto:nirmalrathore3011@gmail.com" className="text-gray-300 text-lg hover:text-teal-300">
              nirmalrathore3011@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaPhone className="text-teal-400" size={24} />
            <a href="tel:+919111365071" className="text-gray-300 text-lg hover:text-teal-300">
              +91 9111365071
            </a>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaLinkedin className="text-teal-400" size={24} />
            <a href="https://www.linkedin.com/in/nirmal-rathore-94b025159" className="text-gray-300 text-lg hover:text-teal-300" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10">
          <a href="mailto:nirmalrathore3011@gmail.com" className="px-6 py-3 bg-teal-500 text-black rounded-lg shadow-lg hover:bg-teal-400">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
