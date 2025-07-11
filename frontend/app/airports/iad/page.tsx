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

export default function IADAirportPage() {
  return (
    <AirportServiceLayout
      heroTitle="Dulles Airport Transportation"
      heroSubtitle="Luxury, reliable airport transfers to and from Dulles International Airport."
      heroImage="/assets/images/iad-airport.jpg"
      vehicles={vehicles}
      faq={<div />}>
      <div className="prose max-w-none mb-8">
        <h2>About Our Dulles Airport Service</h2>
        <p>
          Arrive or depart from IAD with peace of mind. Our professional drivers
          and premium vehicles ensure a smooth airport experience.
        </p>
      </div>
    </AirportServiceLayout>
  );
}
