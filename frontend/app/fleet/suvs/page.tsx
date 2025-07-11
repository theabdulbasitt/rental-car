"use client";
import FleetVehicleLayout from "@/components/FleetVehicleLayout";

const mainImage = "/assets/images/suv-main.jpg";
const galleryImages = [
  "/assets/images/suv1.jpg",
  "/assets/images/suv2.jpg",
  "/assets/images/suv3.jpg",
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

export default function SUVsPage() {
  return (
    <FleetVehicleLayout
      mainImage={mainImage}
      galleryImages={galleryImages}
      title="Exclusive SUVs"
      subtitle="Spacious, powerful, and luxurious SUVs for every journey."
      content={
        <div className="prose max-w-none mb-8">
          <h2>About Our SUVs</h2>
          <p>
            Our exclusive SUVs provide ample space, comfort, and safety for
            families, business travelers, and groups. Travel with confidence and
            style in our premium SUV fleet.
          </p>
        </div>
      }
      fleetVehicles={fleetVehicles}
    />
  );
}
