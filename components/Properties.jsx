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
    <section className="py-20 bg-gray-50" id="properties">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-blue-600">Properties</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our selection of premium properties available for sale and
            rent.
          </p>
        </div>

        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            background-color: rgba(23, 37, 84, 0.8);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 18px;
          }

          .swiper-pagination-bullet-active {
            background-color: #172554;
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
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl h-full">
                <div className="relative h-64 ">
                  <Image
                    src={`/hero${
                      ((property.id - 1) % AVAILABLE_IMAGES) + 1
                    }.jpg`}
                    alt={`Property ${property.id}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-950 text-white px-3 py-1 rounded">
                    {property.type}
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
                    <span className="text-xl font-bold">{property.price}</span>
                    <button className="bg-blue-950 hover:bg-blue-950 text-white px-4 py-2 rounded text-sm">
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
