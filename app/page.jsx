'use client';
import HeroSection from '@/components/HeroSection';
import Properties from '@/components/Properties';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Auto-sliding Background */}
      <section className="relative h-screen">
        <HeroSection id="home" />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-white to-blue-50 text-blue-950 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100 opacity-20 transform rotate-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 opacity-10 rounded-full -translate-x-1/3 translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-4xl font-bold mb-4 relative inline-block">
                About Our Agency
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-950"></span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                We've been helping people find their dream homes for over 20
                years with our expert knowledge and personalized service.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform">
                <Image
                  src="/hero1.jpg"
                  alt="Real Estate Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium bg-blue-950 px-3 py-1 rounded-full">
                    Since 2003
                  </span>
                </div>
              </div>
            </div>
          </div>

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
                className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-950 hover:translate-y-[-8px] transition-all duration-300"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="properties" className="py-16 bg-gray-50 text-blue-950">
        <Properties />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Ready to Find Your Dream Home?
              </h2>
              <p className="mb-6">
                Reach out to our team of experts who are standing by to assist
                you with all your real estate needs.
              </p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <p>Email: info@realestateagency.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-blue-950">
                Get In Touch
              </h3>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-950 hover:bg-blue-950 text-white px-6 py-3 rounded-md font-medium transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
