import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center ">
          <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-2 py-4 tracking-tight bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Passionate MERN stack developer crafting modern web applications with MongoDB, Express.js, React.js, and Node.js
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <a href="#contact">Get in Touch</a>
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;