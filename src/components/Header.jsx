import React, { useState } from 'react'



const Header = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <header className='bg-white/50 shadow-md fixed w-full z-10'>
    <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Aryan Raghuvanshi</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 text-xl hover:text-blue-600 font-medium">Home</a>
          <a href="#about" className="text-gray-600 text-xl hover:text-blue-600 font-medium">About</a>
          <a href="#skills" className="text-gray-600 text-xl hover:text-blue-600 font-medium">Skills</a>
          <a href="#projects" className="text-gray-600 text-xl hover:text-blue-600 font-medium">Projects</a>
          <a href="#contact" className="text-gray-600 text-xl hover:text-blue-600 font-medium">Contact</a>
        </nav>

          {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            // Cross Icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 bg-red-600">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Menu Icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 hover:bg-green-600 hover:text-white m-3">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
    </div>

     {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 font-medium">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 font-medium">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
          </div>
        </div>
      )}

    </header>
  )
}

export default Header
