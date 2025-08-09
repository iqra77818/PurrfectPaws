import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 right-0 w-full z-50 px-8 py-5 flex justify-end items-center bg-transparent relative">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-pink-500 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

     
      <ul
        className={`absolute top-full left-0 w-full md:w-auto md:static md:flex md:space-x-10 text-pink-500 font-robotoSlab text-xl rounded-md shadow-md md:shadow-none px-6 py-4 md:p-0 transition-all duration-300
        ${isOpen ? 'flex flex-col space-y-4 bg-pink-100' : 'hidden md:flex'}`}
      >
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#facts" onClick={() => setIsOpen(false)}>Facts</a></li>
        <li><a href="#catgallery" onClick={() => setIsOpen(false)}>Cat Gallery</a></li>
        <li><a href="#generator" onClick={() => setIsOpen(false)}>Generator</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;







