import Partners from "@/components/Partners";
import { ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Users, Luggage, Wifi } from "lucide-react";
import Link from "next/link";

interface Vehicle {
  name: string;
  image: string;
  passengers: string;
  luggage: string;
  features?: string[];
}

interface AirportServiceLayoutProps {
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  vehicles: Vehicle[];
  faq?: ReactNode;
  children: ReactNode;
}

export default function AirportServiceLayout({
  heroImage,
  heroTitle,
  heroSubtitle,
  vehicles,
  faq,
  children,
}: AirportServiceLayoutProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <img
          src={heroImage}
          alt={heroTitle}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            {heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto drop-shadow">
            {heroSubtitle}
          </p>
        </div>
      </section>
      {/* Main Content Grid */}
      <main className="min-h-screen bg-white py-8 px-2 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Page Content */}
          <div className="lg:col-span-2">{children}</div>
          {/* Right: (No Booking Form) */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-8 h-fit"></div>
        </div>
        {/* FAQ Section */}
        {faq && (
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            {faq}
          </div>
        )}
        {/* Fleet Section */}
        <div className="my-16 flex justify-center items-center w-full">
          <div className="flex flex-col items-center w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-2">Fleet</h2>
            <p className="text-center mb-8 text-gray-600">
              Premium Vehicles for Every Occasion, Combining Comfort, Style, and
              Reliability.
            </p>
            <Carousel className="w-full flex justify-center items-center">
              <CarouselContent>
                {vehicles.map((vehicle, idx) => (
                  <CarouselItem
                    key={vehicle.name}
                    className="flex flex-col items-center justify-center px-4">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="h-48 object-contain mb-4"
                    />
                    <h3 className="text-xl font-bold text-center mb-2">
                      {vehicle.name}
                    </h3>
                    <div className="flex flex-col items-center gap-1 mb-2">
                      <span className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#B31942]" />
                        {vehicle.passengers}
                      </span>
                      <span className="flex items-center gap-2">
                        <Luggage className="w-5 h-5 text-[#B31942]" />
                        {vehicle.luggage}
                      </span>
                      {vehicle.features?.includes("WiFi") && (
                        <span className="flex items-center gap-2">
                          <Wifi className="w-5 h-5 text-[#B31942]" />
                          WiFi
                        </span>
                      )}
                    </div>
                    <Link
                      href="/booking"
                      className="bg-black text-white px-6 py-2 rounded font-semibold mt-2">
                      Book a Ride
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        {/* Partners Section */}
        <Partners />
      </main>
    </>
  );
}
