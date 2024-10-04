import React from 'react';

function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 animate-gradient-xy"></div>
      <div className="z-10">
        <h1 className="text-6xl font-extrabold text-white tracking-tight animate-fade-in">
          Hey, I'm <span className="text-teal-400">[Your Name]</span>
        </h1>
        <p className="text-2xl mt-4 text-gray-300 animate-fade-in">A Passionate Frontend Developer</p>
        <a href="#projects" className="mt-10 inline-block bg-teal-500 text-black px-8 py-3 rounded-full hover:bg-teal-400 transition-transform transform hover:scale-105 shadow-xl">
          Explore My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
