"use client";
import RideServiceLayout from "@/components/RideServiceLayout";

const vehicles = [
  {
    name: "MERCEDES EXECUTIVE SPRINTER",
    image:
      "https://lirp.cdn-website.com/3ad4fc82/dms3rep/multi/opt/fleet-11-a59231ad-1920w.jpg",
    passengers: "12 Passengers",
    luggage: "12 Luggages",
    features: ["WiFi"],
  },
  {
    name: "MERCEDES LIMO SPRINTER",
    image:
      "https://lirp.cdn-website.com/3ad4fc82/dms3rep/multi/opt/fleet-14-258d4e3e-1920w.png",
    passengers: "13 Passengers",
    luggage: "12 Luggages",
    features: ["WiFi"],
  },
  {
    name: "LINCOLN MKT LIMOUSINE",
    image:
      "https://lirp.cdn-website.com/3ad4fc82/dms3rep/multi/opt/fleet-15-be81418e-1920w.png",
    passengers: "8 Passengers",
    luggage: "0 Luggages",
    features: ["WiFi"],
  },
];

export default function PointToPointPage() {
  return (
    <RideServiceLayout
      heroImage="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroTitle="POINT TO POINT LIMO SERVICE"
      heroSubtitle="Travel in Luxury & Style with AS4L’s Point-to-Point Transport"
      vehicles={vehicles}>
      {/* Main content goes here. Replace with your actual content. */}
      <div className="prose max-w-none">
        {/* ...existing content sections... */}
      </div>
    </RideServiceLayout>
  );
}
