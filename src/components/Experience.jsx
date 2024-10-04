import React from "react";

function Experience() {
  const experiences = [
    {
      company: "Krish Technolabs Private Limited",
      location: "Ahmedabad, GJ",
      role: "React Native Developer",
      date: "September 2022 - Present",
      responsibilities: [
        "Developed and maintained a React Native application serving hundreds of active users.",
        "Implemented features across the stack, ensuring seamless functionality and user experience.",
        "Earned trust for reliable and timely delivery of tasks and features.",
        "Collaborated with cross-functional teams to gather requirements and translate them into technical specifications.",
        "Conducted code reviews to maintain high coding standards and mentor junior developers.",
        "Utilized agile methodologies to manage project timelines and deliverables effectively.",
        "Integrated third-party libraries and services to enhance application performance and capabilities.",
        "Analyzed user feedback and implemented changes to improve the overall user experience.",
      ],
    },
    {
      company: "ITInformatix Private Limited",
      location: "Indore, MP",
      role: "React Native Developer",
      date: "June 2019 - August 2022",
      responsibilities: [
        "Led the development of mobile applications using React Native.",
        "Designed and implemented eight applications from inception to deployment.",
        "Managed projects from scratch and ensured successful launch on Play Store and App Store.",
        "Developed web applications using React JS, enhancing the team's front-end development capabilities.",
        "Collaborated with UI/UX designers to create user-friendly interfaces that improved user engagement.",
        "Utilized NoSQL databases like MongoDB and Firebase Firestore for efficient data storage and retrieval.",
        "Optimized application performance for both iOS and Android platforms, improving loading times and responsiveness.",
        "Conducted thorough testing and debugging to ensure application stability and performance.",
        "Maintained comprehensive documentation for all projects to facilitate knowledge transfer within the team.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-10">
          Professional Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-400">
                {exp.role}
              </h3>
              <p className="text-gray-400">
                {exp.company} - {exp.location}
              </p>
              <p className="text-gray-500">{exp.date}</p>
              <ul className="mt-4 text-gray-300 text-left">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
