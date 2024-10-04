import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>
        <p className="mb-6">Feel free to reach out if you want to collaborate on a project or just say hello!</p>
        <a href="mailto:youremail@example.com" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          Send an Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
