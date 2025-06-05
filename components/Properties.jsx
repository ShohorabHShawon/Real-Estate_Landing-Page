'use client';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Properties() {
  // More property data
  const properties = [
    { id: 1, type: 'For Sale', price: '$850,000' },
    { id: 2, type: 'For Rent', price: '$3,500/mo' },
    { id: 3, type: 'For Sale', price: '$925,000' },
    { id: 4, type: 'For Rent', price: '$4,200/mo' },
    { id: 5, type: 'For Sale', price: '$780,000' },
    { id: 6, type: 'For Rent', price: '$2,800/mo' },
  ];

  const AVAILABLE_IMAGES = 6;

  return (
    <section
      id="properties"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-400 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <span className="text-2xl">🏡</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our selection of premium properties available for sale and
            rent in the most desirable locations.
          </p>
        </div>

        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            background-color: rgba(59, 130, 246, 0.8);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 18px;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background-color: rgba(147, 51, 234, 0.8);
            transform: scale(1.1);
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet {
            background-color: rgba(255, 255, 255, 0.3);
            width: 12px;
            height: 12px;
          }

          .swiper-pagination-bullet-active {
            background: linear-gradient(45deg, #3b82f6, #9333ea);
            transform: scale(1.2);
          }
        `}</style>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl h-full hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative h-64">
                  <Image
                    src={`/hero${
                      ((property.id - 1) % AVAILABLE_IMAGES) + 1
                    }.jpg`}
                    alt={`Property ${property.id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">
                    Luxury Property
                  </h3>
                  <p className="text-gray-300 mb-4 flex items-center">
                    <span className="text-lg mr-2">📍</span>
                    123 Real Estate Ave, City
                  </p>
                  <div className="flex justify-between text-sm mb-4 text-gray-300">
                    <span className="flex items-center">
                      <span className="mr-1">🛏️</span> 3 Beds
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">🚿</span> 2 Baths
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">📐</span> 2,500 sqft
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {property.price}
                    </span>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
