import React from "react";

// Use random placeholder logos for now
const partners = [
  {
    name: "Partner 1",
    logo: "https://via.placeholder.com/120x60?text=Partner+1",
  },
  {
    name: "Partner 2",
    logo: "https://via.placeholder.com/120x60?text=Partner+2",
  },
  {
    name: "Partner 3",
    logo: "https://via.placeholder.com/120x60?text=Partner+3",
  },
  {
    name: "Partner 4",
    logo: "https://via.placeholder.com/120x60?text=Partner+4",
  },
];

export default function Partners() {
  return (
    <section className="bg-gray-50 py-10 border-t border-b border-gray-200">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 tracking-wide">
          Our Trusted Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain mb-2 grayscale hover:grayscale-0 transition"
              />
              <span className="text-gray-600 text-sm font-medium">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
