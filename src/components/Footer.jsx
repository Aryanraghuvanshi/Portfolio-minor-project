// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="border-t border-gray-700 mt-2 text-center text-gray-400">
        </div>
      </div>
    </footer>
  );
};

export default Footer;