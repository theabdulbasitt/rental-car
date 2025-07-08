'use client';

import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/main.jpg')",
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="mb-6 fade-in">
              <span className="golden-accent text-lg font-medium tracking-wide">
                Welcome to RNH Transportation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight slide-in-left">
              LUXURY TRANSPORTATION
              <br />
              <span className="text-[#B31942]">REDEFINED</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl slide-in-right">
              Experience premium black car service with professional chauffeurs, luxury vehicles, and unmatched reliability throughout the DMV area.
            </p>

            {/* Contact Info */}
            {/* Removed phone and email links */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 fade-in">
              <Link href="/booking" className="btn-primary inline-flex items-center text-lg">
                Make a Reservation
                <ArrowRight size={20} className="ml-2" />
              </Link>
              {/* Removed 'View Our Fleet' button */}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#B31942] py-4">
        <div className="container-custom text-center">
          <p className="text-white text-lg font-semibold">
            Have an urgent request? Our team is ready 24/7 at <a href="tel:+16674470512" className="text-white underline hover:opacity-80">+1 667-447-0512</a> to assist you right away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;