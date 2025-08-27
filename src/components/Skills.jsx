// components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "Mongoose"]
    },
    {
      title: "Tools & Others",
      skills: ["Git",  "VS Code", "Postman","Github","Vite","Vercal"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Technical Skills</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{category.title}</h3>
              <ul className="space-y-3 flex flex-wrap gap-3 ">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center ">
                    <span className="font-semibold px-4 py-3 rounded-md bg-gray-200 hover:bg-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;