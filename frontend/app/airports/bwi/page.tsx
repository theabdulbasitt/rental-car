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

export default function BWIAirportPage() {
  return (
    <AirportServiceLayout
      heroTitle="BWI Airport Transportation"
      heroSubtitle="Reliable, comfortable, and on-time airport transfers to and from Baltimore/Washington International."
      heroImage="/assets/images/bwi-airport.jpg"
      vehicles={vehicles}
      faq={<div />}>
      <div className="prose max-w-none mb-8">
        <h2>About Our BWI Airport Service</h2>
        <p>
          Enjoy stress-free travel to and from BWI with our professional
          chauffeurs and premium vehicles. We ensure timely pickups and
          drop-offs for all your airport transportation needs.
        </p>
      </div>
    </AirportServiceLayout>
  );
}
