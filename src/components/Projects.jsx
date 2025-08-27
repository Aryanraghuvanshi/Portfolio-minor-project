import React from 'react';

const Projects = () => {
  const projects = [
    // {
    //   title: "Ecommerce Platform",
    //   description: "An ecommerce platform with user authentication, product catalog, shopping cart, and payment integration.",
    //   technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    //   githubLink: "#",
    //   liveDemo: "#"
    // },
    // {
    //   title: "Task Management App",
    //   description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    //   technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
    //   githubLink: "#",
    //   liveDemo: "#"
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description: "Analytics dashboard for social media metrics with data visualization, user engagement tracking, and reporting features.",
    //   technologies: ["React", "Chart.js", "REST API", "Firebase"],
    //   githubLink: "#",
    //   liveDemo: "#"
    // }
     {
      title: "Todo App",
      description: "Feature-rich todo application with categories, due dates, drag-and-drop ordering and local sync for offline use.",
      technologies: ["React", "Redux", "Tailwind CSS", "LocalStorage"],
      githubLink: "#",
      liveDemo: "#"
    },
    {
      title: "AI Chat Bot",
      description: "Conversational AI chatbot with context-aware responses, message streaming, and optional OpenAI integration for advanced NLU.",
      technologies: ["React", "Node.js", "OpenAI API", "WebSockets"],
      githubLink: "#",
      liveDemo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Some of the projects I've worked on using the MERN stack
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-blue-200 flex items-center justify-center">
                <span className="text-5xl">📱</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.githubLink} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Code
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </a>
                  <a href={project.liveDemo} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Live Demo
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;