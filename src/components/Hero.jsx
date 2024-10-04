import React from "react";

function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 animate-gradient-xy"></div>
      <div className="z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight animate-fade-in">
          Nirmal Rathore
        </h1>
        <p className="text-lg sm:text-2xl mt-4 text-gray-300 animate-fade-in">
          React Native Developer | React JS | 5 Years Experience
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/nirmalrathore30"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200"
          >
            GitHub
          </a>
        </div>
        <p className="text-sm sm:text-lg text-gray-400 mt-2">
          Indore, MP | nirmalrathore3011@gmail.com | +91 9111365071
        </p>
        <a
          href="#projects"
          className="mt-10 inline-block bg-teal-500 text-black px-8 py-3 rounded-full hover:bg-teal-400 transition-transform transform hover:scale-105 shadow-xl"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
