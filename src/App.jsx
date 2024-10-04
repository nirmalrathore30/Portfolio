import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-white bg-gray-900">
      <header className="fixed top-0 left-0 w-full p-4 bg-gray-800 z-50 shadow-lg">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="mt-16">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
