'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import { Inspiration } from 'next/font/google';
import Link from 'next/link';

const inspiration = Inspiration({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inspiration',
});

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'hero1.jpg',
    'hero2.jpg',
    'hero4.jpg',
    'hero5.jpg',
    'hero6.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Background Image Slider */}
      <div className="relative h-full w-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentImage === index ? 1 : 0,
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        ))}
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Hero Content */}
      <div
        className={`${inspiration.variable} absolute inset-0 z-20 flex items-center justify-center text-center`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              Find Your{' '}
              <span
                className={`font-inspiration text-6xl md:text-8xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent`}
              >
                Dream
              </span>{' '}
              Home
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover exceptional properties that perfectly match your
              lifestyle and dreams
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="#properties"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  View Properties
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="#contact"
                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
