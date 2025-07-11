"use client";
import RideServiceLayout from "@/components/RideServiceLayout";

const vehicles = [
  {
    name: "Executive SUV",
    image: "/assets/images/suv.png",
    passengers: "6 passengers",
    luggage: "5 bags",
    features: ["WiFi"],
  },
];

export default function CorporatePage() {
  return (
    <RideServiceLayout
      heroTitle="Corporate Transportation Service"
      heroSubtitle="Executive travel solutions for business professionals. Reliable, discreet, and always on time."
      heroImage="/assets/images/corporate-limo.jpg"
      vehicles={vehicles}>
      <div className="prose max-w-none mb-8">
        <h2>Corporate Travel, Elevated</h2>
        <ul>
          <li>On-time pickups and drop-offs</li>
          <li>Comfortable, private work environment</li>
          <li>Professional, uniformed chauffeurs</li>
        </ul>
        <p>
          Impress clients and colleagues with our premium corporate
          transportation services.
        </p>
      </div>
    </RideServiceLayout>
  );
}
