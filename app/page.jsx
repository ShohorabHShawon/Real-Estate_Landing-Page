import HeroSection from '@/components/HeroSection';
import Properties from '@/components/Properties';
import Image from 'next/image';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative h-screen">
        <HeroSection id="home" />
      </section>
      {/* About Section */}
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
        <Properties />
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
      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-white relative overflow-hidden border-t border-white/10">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Main Footer Content */}
          <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-6">
                <span className="text-xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Real Estate Agency
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted partner in finding the perfect home. With over 20
                years of experience, we make your real estate dreams a reality.
              </p>
              <div className="flex space-x-4">
                {['📘', '📷', '🐦', '💼'].map((icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-sm">{icon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-300">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Properties', 'Contact'].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-300">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  'Property Sales',
                  'Property Rentals',
                  'Property Management',
                  'Investment Advice',
                ].map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info Bar */}
          <div className="py-8 border-t border-white/10">
            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm">📧</span>
                </div>
                <span className="text-gray-300">info@realestateagency.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm">📱</span>
                </div>
                <span className="text-gray-300">(123) 456-7890</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm">📍</span>
                </div>
                <span className="text-gray-300">Downtown Real Estate Hub</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Real Estate Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                Terms of Service
              </span>
              <span className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
