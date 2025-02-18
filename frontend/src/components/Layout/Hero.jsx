import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import heroImg from '../../assets/hero.webp';

const Hero = () => {
  return (
    <section className='relative'>
      {/* Hero Image */}
      <img
        src={heroImg}
        alt='hero'
        className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover'
      />

      {/* Overlay Content */}
      <div className='absolute inset-0 bg-opacity-5 flex items-center justify-center'>
        <div className='text-center text-white p-6'>
          {/* Heading */}
          <h1 className='text-4xl md:text-9xl text-white font-bold tracking-tighter uppercase mb-4'>
            Buy <br/> Paradise
          </h1>

          {/* Description */}
          <p className='text-sm tracking-tighter md:text-lg mb-6'>
          Discover vacation-ready styles with quick global delivery.
          </p>

          {/* Shop Now Button */}
          <Link
            to="/collections/all"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;