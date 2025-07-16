"use client";
import FleetVehicleLayout from "@/components/FleetVehicleLayout";
import { fleet } from "../../../components/fleetData";

const mainImage = "/assets/images/suv-main.jpg";
const galleryImages = [
  "/assets/images/suv1.jpg",
  "/assets/images/suv2.jpg",
  "/assets/images/suv3.jpg",
];
const fleetVehicles = fleet.filter((v) => v.name === "Premium Full-Size SUV");

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
