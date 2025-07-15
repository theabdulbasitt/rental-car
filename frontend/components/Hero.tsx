"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BookingForm from "./BookingForm";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[70vh] flex flex-col md:flex-row overflow-hidden bg-white">
      {/* Left: Image + Text + Banner */}
      <div className="relative w-full md:[width:70%] flex flex-col justify-between min-h-[400px] md:min-h-[70vh]">
        <div className="flex-1 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/images/main.jpg')",
            }}>
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="relative z-10 p-8 md:p-16 max-w-2xl">
            <span className="golden-accent text-lg font-medium tracking-wide block mb-4">
              Welcome to RNH Transportation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              LUXURY TRANSPORTATION
              <br />
              <span className="text-[#B31942]">REDEFINED</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl">
              Experience premium black car service with professional chauffeurs,
              luxury vehicles, and unmatched reliability throughout the DMV
              area.
            </p>
            <Link
              href="/booking"
              className="btn-primary inline-flex items-center text-lg">
              Make a Reservation
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
        {/* Red Banner inside left column */}
        <div className="relative z-10 w-full">
          <div className="bg-[#B31942] py-4 px-4 md:px-8">
            <div className="container-custom text-center">
              <p className="text-white text-lg font-semibold">
                Have an urgent request? Our team is ready 24/7 at{" "}
                <a
                  href="tel:+16674470512"
                  className="text-white underline hover:opacity-80">
                  +1 667-447-0512
                </a>{" "}
                to assist you right away.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Booking Form Panel */}
      <div className="w-full md:[width:30%] flex items-center justify-center bg-white z-20 shadow-xl md:shadow-none md:border-l md:border-gray-200 min-h-[400px] md:min-h-[70vh] p-6 md:p-6">
        <div className="w-full max-w-xs">
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
