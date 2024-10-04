import React from "react";

function Projects() {
  const projects = [
    {
      title: "NAZIH - Beauty Store",
      role: "Main React Native Developer",
      duration: "Developed and maintaining for the last 2 years",
      responsibilities: [
        "Designing and implementing new features and functionalities.",
        "Ensuring smooth performance and responsiveness of the app.",
        "Collaborating with UI/UX designers to enhance user interface.",
        "Integrating third-party APIs and services.",
        "Conducting regular testing and debugging to maintain app stability.",
        "Optimizing app for both iOS and Android platforms.",
      ],
      achievements: [
        "Successfully launched major updates and features.",
        "Improved app performance resulting in increased user satisfaction.",
        "Managed app scalability as the user base grew.",
        "Implemented security measures to protect user data.",
      ],
      skills:
        "React Native, JavaScript, API integration, debugging, UI/UX collaboration.",
      impact:
        "Contributed to the app's growth and maintained its functionality over time.",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=com.nazih&pcampaignid=web_share",
        ios: "https://apps.apple.com/us/app/nazih-beauty-store/id123456789",
      },
    },
    {
      title: "Minamin",
      role: "React Native Developer",
      duration: "Developed and maintaining for the last 1 year",
      responsibilities: [
        "Designing and implementing new features and functionalities.",
        "Ensuring smooth performance and responsiveness of the app.",
        "Collaborating with UI/UX designers to enhance user interface.",
        "Integrating third-party APIs and services.",
        "Conducting regular testing and debugging to maintain app stability.",
        "Optimizing app for both iOS and Android platforms.",
      ],
      achievements: [
        "Successfully launched major updates and features.",
        "Improved app performance resulting in increased user satisfaction.",
        "Managed app scalability as the user base grew.",
        "Implemented security measures to protect user data.",
      ],
      skills:
        "React Native, JavaScript, API integration, debugging, UI/UX collaboration.",
      impact:
        "Contributed to the app's growth and maintained its functionality over time.",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=com.minamin.app&pcampaignid=web_share",
        ios: "https://apps.apple.com/us/app/minamin/id987654321",
      },
    },
    // Add more projects similarly...
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">
                <strong>Role:</strong> {project.role}
              </p>
              <p>
                <strong>Duration:</strong> {project.duration}
              </p>
              <h4 className="mt-4 font-bold">Responsibilities:</h4>
              <ul className="list-disc list-inside">
                {project.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
              <h4 className="mt-4 font-bold">Achievements:</h4>
              <ul className="list-disc list-inside">
                {project.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <p className="mt-4">
                <strong>Skills Utilized:</strong> {project.skills}
              </p>
              <p className="mt-4">
                <strong>Impact:</strong> {project.impact}
              </p>

              {/* Links to Android and iOS */}
              <div className="mt-4">
                {project.links.android && (
                  <a
                    href={project.links.android}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 bg-teal-500 hover:bg-teal-400 text-black py-2 px-4 rounded-lg"
                  >
                    View on Android
                  </a>
                )}
                {project.links.ios && (
                  <a
                    href={project.links.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 bg-teal-500 hover:bg-teal-400 text-black py-2 px-4 rounded-lg"
                  >
                    View on iOS
                  </a>
                )}
                {/* Include a link for Web if it exists */}
                {project.links.web && (
                  <a
                    href={project.links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 bg-teal-500 hover:bg-teal-400 text-black py-2 px-4 rounded-lg"
                  >
                    View Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
