"use client";
import FleetVehicleLayout from "@/components/FleetVehicleLayout";
import { fleet } from "../../../components/fleetData";

const mainImage = "/assets/images/sedan-main.jpg";
const galleryImages = [
  "/assets/images/sedan1.jpg",
  "/assets/images/sedan2.jpg",
  "/assets/images/sedan3.jpg",
];
const sedanNames = ["Executive Sedan", "Eco Urban Sedan", "Elite S-550 Sedan"];
const fleetVehicles = fleet.filter((v) => sedanNames.includes(v.name));

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
