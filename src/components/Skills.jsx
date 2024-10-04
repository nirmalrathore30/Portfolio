import React from "react";

function Skills() {
  const skills = [
    "React Native",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "REST APIs",
    "Google Play Console",
    "Apple Developer",
    "Android Studio",
    "Xcode",
    "Maps",
    "Firebase",
    "Redux/Context API",
    "Git",
    "BitBucket",
    "Cross-Platform Apps",
    "GraphQL",
    "HTML",
    "CSS",
    "React",
    "Tailwind",
    "Figma",
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-10">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-xl font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
