'use client';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Auto-sliding Background */}
      <section className="relative h-screen">
        <HeroSection />
      </section>

      {/* About Section */}
      <section className="py-16 bg-white text-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Our Agency</h2>
            <p className="text-gray-950 max-w-2xl mx-auto">
              We've been helping people find their dream homes for over 20 years
              with our expert knowledge and personalized service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Exclusive Properties
              </h3>
              <p className="text-gray-950">
                Access to the most exclusive properties in prime locations.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Expert Agents</h3>
              <p className="text-gray-950">
                Our agents have years of experience in the real estate market.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Personalized Service
              </h3>
              <p className="text-gray-950">
                We provide a tailored experience for each client's unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50 text-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-950 max-w-2xl mx-auto">
              Explore our selection of premium properties available for sale and
              rent.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((property) => (
              <div
                key={property}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-64">
                  <Image
                    src={`/hero${property}.jpg`}
                    alt={`Property ${property}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-950 text-white px-3 py-1 rounded">
                    For Sale
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Luxury Property
                  </h3>
                  <p className="text-gray-500 mb-4">
                    123 Real Estate Ave, City
                  </p>
                  <div className="flex justify-between text-sm mb-4">
                    <span>3 Bedrooms</span>
                    <span>2 Bathrooms</span>
                    <span>2,500 sqft</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">$850,000</span>
                    <button className="bg-blue-950 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-950 text-white">
        <div className="container mx-auto px-4">
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
                  className="w-full bg-blue-950 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
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
