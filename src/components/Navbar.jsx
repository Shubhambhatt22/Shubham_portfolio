import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-5">
        <div className="flex items-center">
          <a href="#about" className="text-white text-2xl font-bold">
            Shubham Bhatt
          </a>
        </div>
        <div className="flex items-center space-x-4 md:space-x-8">
          <a href="#about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#skills" className="text-white hover:text-gray-300">
            Skills
          </a>
          <a href="#projects" className="text-white hover:text-gray-300">
            Projects
          </a>
          <a
            href="#contactMe"
            className="text-white bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded transition duration-300">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
