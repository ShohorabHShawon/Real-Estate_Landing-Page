'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    closeMenu();
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <nav className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center space-x-6 w-full lg:w-auto justify-between">
          <Link href="#home" className="text-2xl md:text-3xl">
            <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-black hover:from-blue-900 hover:to-purple-900 transition-all duration-300 uppercase tracking-wider">
              Estate
            </h1>
          </Link>
          <button
            onClick={toggleMenu}
            className="lg:hidden focus:outline-none bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-900 group-hover:text-gray-900 transition-colors duration-300"
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
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-end lg:items-center font-medium text-[14px]">
          <div className="space-x-2 hidden lg:flex rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-1">
            <Link
              href="#home"
              onClick={() => handlePageClick('home')}
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                currentPage === 'home'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'text-gray-900 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => handlePageClick('about')}
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                currentPage === 'about'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'text-gray-900 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              href="#properties"
              onClick={() => handlePageClick('properties')}
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                currentPage === 'properties'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'text-gray-900 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white'
              }`}
            >
              Properties
            </Link>
            <Link
              href="#contact"
              onClick={() => handlePageClick('contact')}
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                currentPage === 'contact'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'text-gray-900 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/10 backdrop-blur-xl rounded-b-2xl border-t border-white/20 text-center space-y-2 py-4 mx-4 mb-4 shadow-xl">
          <Link
            href="#home"
            className="block"
            onClick={() => handlePageClick('home')}
          >
            <span
              className={`inline-block px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                currentPage === 'home'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
              }`}
            >
              Home
            </span>
          </Link>
          <Link
            href="#about"
            className="block"
            onClick={() => handlePageClick('about')}
          >
            <span
              className={`inline-block px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                currentPage === 'about'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
              }`}
            >
              About
            </span>
          </Link>
          <Link
            href="#properties"
            className="block"
            onClick={() => handlePageClick('properties')}
          >
            <span
              className={`inline-block px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                currentPage === 'properties'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
              }`}
            >
              Properties
            </span>
          </Link>
          <Link
            href="#contact"
            className="block"
            onClick={() => handlePageClick('contact')}
          >
            <span
              className={`inline-block px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                currentPage === 'contact'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
              }`}
            >
              Contact
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
