"use client";
import RideServiceLayout from "@/components/RideServiceLayout";

const vehicles = [
  {
    name: "Stretch Limo",
    image: "/assets/images/limousine.png",
    passengers: "10 passengers",
    luggage: "4 bags",
    features: ["WiFi"],
  },
];

export default function PartyLimoPage() {
  return (
    <RideServiceLayout
      heroTitle="Bachelor/ette Party Limo Service"
      heroSubtitle="Celebrate in style with our luxury limos for bachelor and bachelorette parties. Safe, fun, and unforgettable."
      heroImage="/assets/images/party-limo.jpg"
      vehicles={vehicles}>
      <div className="prose max-w-none mb-8">
        <h2>Party On the Move</h2>
        <ul>
          <li>Spacious, party-ready limos</li>
          <li>Professional, discreet chauffeurs</li>
          <li>Customizable routes and stops</li>
        </ul>
        <p>
          Make your last night out as a single unforgettable with our party limo
          service.
        </p>
      </div>
    </RideServiceLayout>
  );
}
