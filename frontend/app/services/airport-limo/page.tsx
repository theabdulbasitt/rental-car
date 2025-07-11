"use client";
import RideServiceLayout from "@/components/RideServiceLayout";

const vehicles = [
  {
    name: "LINCOLN CONTINENTAL",
    image:
      "https://lirp.cdn-website.com/3ad4fc82/dms3rep/multi/opt/fleet-10-1920w.jpg",
    passengers: "3 Passengers",
    luggage: "3 Luggages",
    features: ["WiFi"],
  },
  {
    name: "CADILLAC ESCALADE",
    image:
      "https://lirp.cdn-website.com/3ad4fc82/dms3rep/multi/opt/fleet-12-1920w.jpg",
    passengers: "6 Passengers",
    luggage: "6 Luggages",
    features: ["WiFi"],
  },
  {
    name: "MERCEDES SPRINTER VAN",
    image:
      "https://lirp.cdn-website.com/3ad4fc82/dms3rep/multi/opt/fleet-11-a59231ad-1920w.jpg",
    passengers: "12 Passengers",
    luggage: "12 Luggages",
    features: ["WiFi"],
  },
];

export default function AirportLimoPage() {
  return (
    <RideServiceLayout
      heroImage="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroTitle="AIRPORT TRANSPORTATION"
      heroSubtitle="Breathe Easy with Renowned Airport Limo Service Providers"
      vehicles={vehicles}>
      {/* Main content goes here. Replace with your actual content. */}
      <div className="prose max-w-none">
        {/* ...existing content sections... */}
      </div>
    </RideServiceLayout>
  );
}
