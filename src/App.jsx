import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="text-white bg-gray-900">
      <header className="fixed top-0 left-0 w-full p-4 bg-gray-800 z-50 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Nirmal Rathore</h1>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
          <ul
            className={`flex-col md:flex md:flex-row md:space-x-6 md:items-center absolute md:static bg-gray-800 w-full md:w-auto transition-transform duration-300 ${
              isMenuOpen ? "top-16 left-0" : "top-[-200px]"
            }`}
          >
            <li>
              <a
                href="#skills"
                className="block p-2 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block p-2 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block p-2 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block p-2 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mt-16">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
