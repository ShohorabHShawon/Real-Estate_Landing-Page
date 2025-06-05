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
      </div>

      {/* Hero Content */}
      <div
        className={`${inspiration.variable} absolute inset-0 z-20 flex items-center justify-center text-center`}
      >
        <div className="container mx-auto">
          <div className="inline-block mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Find Your{' '}
              <span
                className={`font-inspiration text-6xl text-blue-950 md:text-7xl`}
              >
                Dream
              </span>{' '}
              Home
            </h1>
            <p className="text-xl text-white mb-8">
              Discover the perfect property that matches your lifestyle
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                href="#properties"
                className="bg-blue-950 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition"
              >
                View Properties
              </Link>
              <Link
                href="#contact"
                className="bg-white hover:bg-gray-100 text-blue-950 px-6 py-3 rounded-md font-medium transition"
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
