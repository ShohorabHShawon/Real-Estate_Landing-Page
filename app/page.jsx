'use client';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
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
    <main className="min-h-screen">
      {/* Hero Section with Auto-sliding Background */}
      <section className="relative h-screen">
        <HeroSection id="home" />
        {/* About Section */}
      </section>
      <section
        id="about"
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
              <span className="text-2xl">🏢</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Our Agency
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We've been helping people find their dream homes for over 20 years
              with our expert knowledge and personalized service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Content */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">
                Our Story
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Since 2003, we've built our reputation on trust, expertise, and
                exceptional service. Our team of dedicated professionals
                understands that buying or selling a home is one of life's most
                important decisions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With deep market knowledge and a commitment to excellence, we
                guide our clients through every step of their real estate
                journey, ensuring they achieve their goals with confidence.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero1.jpg"
                alt="Real Estate Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full">
                  Since 2003
                </span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Exclusive Properties',
                description:
                  'Access to the most exclusive properties in prime locations.',
                icon: '🏡',
              },
              {
                title: 'Expert Agents',
                description:
                  'Our agents have years of experience in the real estate market.',
                icon: '👥',
              },
              {
                title: 'Personalized Service',
                description:
                  "We provide a tailored experience for each client's unique needs.",
                icon: '✨',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Properties Section */}
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

      <section
        id="contact"
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
              <span className="text-2xl">💬</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to turn your real estate dreams into reality? Our team is
              here to guide you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-300">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-lg">📧</span>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <p className="text-white font-medium">
                        info@realestateagency.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-lg">📱</span>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <p className="text-white font-medium">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Office</p>
                      <p className="text-white font-medium">
                        Downtown Real Estate Hub
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-400/20 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-300">20+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-400/20 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-300">500+</div>
                  <div className="text-gray-300 text-sm">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Modern Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <input
                      type="text"
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
                      placeholder="First Name"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-focus-within:opacity-100 transition-opacity -z-10"></div>
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
                      placeholder="Last Name"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-focus-within:opacity-100 transition-opacity -z-10"></div>
                  </div>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
                    placeholder="Email Address"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-focus-within:opacity-100 transition-opacity -z-10"></div>
                </div>

                <div className="relative group">
                  <select className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all">
                    <option value="" className="bg-gray-800">
                      I'm interested in...
                    </option>
                    <option value="buying" className="bg-gray-800">
                      Buying a Property
                    </option>
                    <option value="selling" className="bg-gray-800">
                      Selling a Property
                    </option>
                    <option value="renting" className="bg-gray-800">
                      Renting a Property
                    </option>
                    <option value="investment" className="bg-gray-800">
                      Investment Opportunities
                    </option>
                  </select>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-focus-within:opacity-100 transition-opacity -z-10"></div>
                </div>

                <div className="relative group">
                  <textarea
                    rows="4"
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all resize-none"
                    placeholder="Tell us about your real estate needs..."
                  ></textarea>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-focus-within:opacity-100 transition-opacity -z-10"></div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 hover:from-blue-600 hover:via-purple-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25 relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
