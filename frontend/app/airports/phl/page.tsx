"use client";
import AirportServiceLayout from "@/components/AirportServiceLayout";

const vehicles = [
  {
    name: "Luxury Sedan",
    image: "/assets/images/sedan.png",
    passengers: "3 passengers",
    luggage: "2 bags",
    features: ["WiFi"],
  },
  {
    name: "Executive SUV",
    image: "/assets/images/suv.png",
    passengers: "6 passengers",
    luggage: "5 bags",
    features: ["WiFi"],
  },
];

export default function PHLAirportPage() {
  return (
    <AirportServiceLayout
      heroTitle="Philly Airport Transportation"
      heroSubtitle="Professional, comfortable airport transfers to and from Philadelphia International Airport."
      heroImage="/assets/images/phl-airport.jpg"
      vehicles={vehicles}
      faq={<div />}>
      <div className="prose max-w-none mb-8">
        <h2>About Our Philly Airport Service</h2>
        <p>
          Travel to PHL with ease. Our luxury vehicles and expert chauffeurs
          provide a first-class airport transfer experience.
        </p>
      </div>
    </AirportServiceLayout>
  );
}
