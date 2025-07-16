import { Users, Luggage, Wifi } from "lucide-react";
import Link from "next/link";
import { fleet } from "./fleetData";

const FleetPreview = () => {
  const vehicles = fleet;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Fleet of Luxury Vehicles
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our premium fleet of luxury vehicles, including executive sedans,
            SUVs, limousines, and mini buses, is designed to cater to any
            occasion, providing unparalleled comfort, advanced amenities, and a
            seamless, stylish travel experience with the reliability and
            sophistication you deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-4 text-center">
                  {vehicle.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 text-[#B31942] mr-3" />
                    <span className="golden-accent font-medium">
                      {vehicle.passengers}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Luggage className="w-5 h-5 text-[#B31942] mr-3" />
                    <span className="golden-accent font-medium">
                      {vehicle.luggage}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/booking"
                    className="btn-secondary w-full inline-block">
                    RESERVE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/our-fleet" className="btn-primary">
            View Complete Fleet
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FleetPreview;
