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

export default function DCAAirportPage() {
  return (
    <AirportServiceLayout
      heroTitle="DCA Airport Transportation"
      heroSubtitle="Seamless, luxury airport transfers to and from Ronald Reagan Washington National Airport."
      heroImage="/assets/images/dca-airport.jpg"
      vehicles={vehicles}
      faq={<div />}>
      <div className="prose max-w-none mb-8">
        <h2>About Our DCA Airport Service</h2>
        <p>
          Travel to DCA in style and comfort. Our chauffeurs provide prompt,
          courteous service for all your airport transportation needs.
        </p>
      </div>
    </AirportServiceLayout>
  );
}
