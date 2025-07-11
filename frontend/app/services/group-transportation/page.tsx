"use client";
import RideServiceLayout from "@/components/RideServiceLayout";

const vehicles = [
  {
    name: "Sprinter Van",
    image: "/assets/images/sprinter-van.png",
    passengers: "14 passengers",
    luggage: "10 bags",
    features: ["WiFi"],
  },
];

export default function GroupTransportationPage() {
  return (
    <RideServiceLayout
      heroTitle="Group Transportation"
      heroSubtitle="Seamless travel for groups of any size. Perfect for events, tours, and corporate outings."
      heroImage="/assets/images/group-transportation.jpg"
      vehicles={vehicles}>
      <div className="prose max-w-none mb-8">
        <h2>Travel Together, Arrive Together</h2>
        <ul>
          <li>Spacious vehicles for groups</li>
          <li>Coordinated pickups and drop-offs</li>
          <li>Safe, comfortable, and reliable</li>
        </ul>
        <p>
          Let us handle the logistics so your group can focus on the experience.
        </p>
      </div>
    </RideServiceLayout>
  );
}
