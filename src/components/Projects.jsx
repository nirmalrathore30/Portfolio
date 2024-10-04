import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS.",
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "An e-commerce platform with payment integration and product management.",
      link: "#"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map(project => (
            <div key={project.title} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-500 hover:text-blue-300">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
