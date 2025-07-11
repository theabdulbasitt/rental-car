"use client";
import RideServiceLayout from "@/components/RideServiceLayout";

const vehicles = [
  {
    name: "Charter Bus",
    image: "/assets/images/charter-bus.png",
    passengers: "55 passengers",
    luggage: "Under bus storage",
    features: ["WiFi"],
  },
];

export default function BusCharterPage() {
  return (
    <RideServiceLayout
      heroTitle="Bus Charter | Rental"
      heroSubtitle="Charter a bus for your next big event. Comfortable, reliable, and perfect for large groups."
      heroImage="/assets/images/bus-charter.jpg"
      vehicles={vehicles}>
      <div className="prose max-w-none mb-8">
        <h2>Charter Services for Every Occasion</h2>
        <ul>
          <li>Modern, spacious buses</li>
          <li>Professional drivers</li>
          <li>Custom itineraries</li>
        </ul>
        <p>
          From corporate events to family reunions, our bus charters make group
          travel easy.
        </p>
      </div>
    </RideServiceLayout>
  );
}
