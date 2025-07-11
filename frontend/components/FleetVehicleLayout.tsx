import Partners from "@/components/Partners";
import { ReactNode } from "react";

interface FleetVehicle {
  name: string;
  image: string;
  passengers: string;
  luggage: string;
  features?: string[];
}

interface FleetVehicleLayoutProps {
  mainImage: string;
  galleryImages: string[];
  title: string;
  subtitle: string;
  content: ReactNode;
  fleetVehicles: FleetVehicle[];
  children?: ReactNode;
}

export default function FleetVehicleLayout({
  mainImage,
  galleryImages,
  title,
  subtitle,
  content,
  fleetVehicles,
  children,
}: FleetVehicleLayoutProps) {
  return (
    <>
      {/* Main Vehicle Photo */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <img
          src={mainImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto drop-shadow">
            {subtitle}
          </p>
        </div>
      </section>
      {/* Gallery Row */}
      <div className="flex flex-wrap justify-center gap-4 my-8">
        {galleryImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={title + " gallery " + (idx + 1)}
            className="w-48 h-32 object-cover rounded-lg shadow border-2 border-white hover:border-[#B31942] transition"
          />
        ))}
      </div>
      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-4 mb-12">
        {content}
        {children}
      </main>
      {/* Fleet Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Fleet</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {fleetVehicles.map((vehicle, idx) => (
            <div
              key={vehicle.name}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center border border-gray-200 hover:shadow-lg transition">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-bold text-center mb-2 text-[#B31942] uppercase">
                {vehicle.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 text-sm mb-2">
                <span className="flex items-center gap-1">
                  <span role="img" aria-label="passengers">
                    👤
                  </span>{" "}
                  {vehicle.passengers}
                </span>
                <span className="flex items-center gap-1">
                  <span role="img" aria-label="luggage">
                    🧳
                  </span>{" "}
                  {vehicle.luggage}
                </span>
                {vehicle.features?.includes("WiFi") && (
                  <span className="flex items-center gap-1">
                    <span role="img" aria-label="wifi">
                      📶
                    </span>{" "}
                    Yes
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Partners Section */}
      <Partners />
    </>
  );
}
