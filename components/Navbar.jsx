'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 text-black md:p-2 font-medium">
      {' '}
      {/* bg-white/5 backdrop-blur-md border-b border-gray-200/30 shadow-sm */}
      <nav className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center space-x-6 w-full lg:w-auto justify-between">
          <Link href="#home" className="text-3xl md:text-4xl">
            <h1 className="text-blue-950 font-extrabold hover:text-blue-800 uppercase">
              Estate
            </h1>
          </Link>
          <button
            onClick={toggleMenu}
            className="lg:hidden focus:outline-none bg-white/50 backdrop-blur-md rounded-2xl p-2 border border-gray-200 hover:bg-blue-700 hover:text-white transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-950 hover:text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Options */}
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-end lg:items-center font-semibold text-[18px] p-1">
          <div className="space-x-12 hidden lg:flex rounded-full bg-white/50 backdrop-blur-md border-b border-gray-200/30 shadow-sm">
            <Link
              href="#home"
              className="text-md hover:bg-blue-950 hover:text-white px-3 py-1 rounded-full ease-in-out duration-300"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-md hover:bg-blue-950 hover:text-white px-3 py-1 rounded-full ease-in-out duration-300"
            >
              About
            </Link>
            <Link
              href="#properties"
              className="text-md hover:bg-blue-950 hover:text-white px-3 py-1 rounded-full ease-in-out duration-300"
            >
              Properties
            </Link>

            <Link
              href="#contact"
              className="bg-blue-950 rounded-full text-white text-md hover:bg-blue-700 hover:text-white px-3 py-1 ease-in-out duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/50 backdrop-blur-md rounded-md border border-gray-100 text-black text-center space-y-4 py-10">
          <Link
            href="#home"
            className="block hover:underline"
            onClick={closeMenu}
          >
            <span className="bg-blue-950 text-white px-4 p-2 rounded-full font-bold hover:bg-blue-700">
              Home
            </span>
          </Link>
          <Link
            href="#about"
            className="block hover:underline"
            onClick={closeMenu}
          >
            <span className="bg-blue-950 text-white px-4 p-2 rounded-full font-bold hover:bg-blue-700">
              About
            </span>
          </Link>
          <Link
            href="#properties"
            className="block hover:underline"
            onClick={closeMenu}
          >
            <span className="bg-blue-950 text-white px-4 p-2 rounded-full font-bold hover:bg-blue-700">
              Properties
            </span>
          </Link>
          <Link
            href="#contact"
            className="block hover:underline"
            onClick={closeMenu}
          >
            <span className="bg-blue-950 text-white px-4 p-2 rounded-full font-bold hover:bg-blue-700">
              Contact
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
