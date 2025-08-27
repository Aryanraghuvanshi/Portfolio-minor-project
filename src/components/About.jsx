// components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          About Me
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/3 flex justify-center mb-10 lg:mb-0">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg flex items-center justify-center shadow-2xl">
              <span className="text-8xl sm:text-9xl transform ">👨‍💻</span>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              <b>Hi</b> I'm <b>Aryan Raghuvanshi</b> a passionate full-stack developer specializing in the MERN stack dedicated to creating efficient and user-friendly web applications.
            </p>
            
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Fresh Graduate, Fresh Perspective</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              As a recent computer science graduate, I bring enthusiasm and modern development practices to every project. My journey with the <b>MERN stack</b> began during my studies and has grown into a passion for creating full-stack applications.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technology trends. My goal is to create impactful software while growing as a developer in a collaborative environment.
            </p>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="text-blue-500 text-4xl mb-3">💻</div>
                <h4 className="font-bold text-slate-700 mb-2">Clean Code</h4>
                <p className="text-slate-500 text-sm">Writing maintainable and scalable code following best practices.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="text-blue-500 text-4xl mb-3">🔍</div>
                <h4 className="font-bold text-slate-700 mb-2">Problem Solver</h4>
                <p className="text-slate-500 text-sm">Love breaking down problems and implementing effective solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="text-blue-500 text-4xl mb-3">👥</div>
                <h4 className="font-bold text-slate-700 mb-2">Team Player</h4>
                <p className="text-slate-500 text-sm">Excellent communication skills and collaborative mindset.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;