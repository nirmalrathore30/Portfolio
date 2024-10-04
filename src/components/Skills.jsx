import React from 'react';

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js", "Git", "Figma"];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map(skill => (
            <div key={skill} className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-xl font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
