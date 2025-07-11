"use client";
import FleetVehicleLayout from "@/components/FleetVehicleLayout";

const mainImage = "/assets/images/sedan-main.jpg";
const galleryImages = [
  "/assets/images/sedan1.jpg",
  "/assets/images/sedan2.jpg",
  "/assets/images/sedan3.jpg",
];
const fleetVehicles = [
  {
    name: "Luxury Mercedes S550",
    image: "/assets/images/mercedes-s550.png",
    passengers: "3",
    luggage: "3",
    features: ["WiFi"],
  },
  {
    name: "Exclusive Sedan",
    image: "/assets/images/exclusive-sedan.png",
    passengers: "3",
    luggage: "3",
    features: ["WiFi"],
  },
  {
    name: "Exclusive SUV",
    image: "/assets/images/exclusive-suv.png",
    passengers: "6",
    luggage: "6",
    features: ["WiFi"],
  },
  {
    name: "Sprinter Van",
    image: "/assets/images/sprinter-van.png",
    passengers: "Call for Rates",
    luggage: "Yes",
    features: ["WiFi"],
  },
];

export default function SedansPage() {
  return (
    <FleetVehicleLayout
      mainImage={mainImage}
      galleryImages={galleryImages}
      title="Luxury Sedans"
      subtitle="Arrive in style and comfort with our premium sedan fleet."
      content={
        <div className="prose max-w-none mb-8">
          <h2>About Our Sedans</h2>
          <p>
            Our luxury sedans offer the perfect blend of comfort, style, and
            performance for any occasion. Enjoy a smooth ride with professional
            chauffeurs and top-tier amenities.
          </p>
        </div>
      }
      fleetVehicles={fleetVehicles}
    />
  );
}
