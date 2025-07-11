"use client";
import FleetVehicleLayout from "../../../components/FleetVehicleLayout";

const mainImage = "/assets/images/coach-main.jpg";
const galleryImages = [
  "/assets/images/coach-1.jpg",
  "/assets/images/coach-2.jpg",
  "/assets/images/coach-3.jpg",
];
const subtitle = "Spacious coaches for large groups and long-distance travel.";
const content = (
  <>
    <p className="mb-4">
      Our coaches are designed for long-distance travel and large groups,
      providing luxury, comfort, and advanced amenities. Perfect for tours,
      conferences, and special events.
    </p>
    <ul className="list-disc pl-5 mb-4">
      <li>Seating for up to 56 passengers</li>
      <li>Reclining seats and climate control</li>
      <li>Onboard restrooms and entertainment systems</li>
      <li>Spacious luggage storage</li>
    </ul>
    <p>
      Travel in style and comfort with our modern coaches. Our professional
      drivers ensure a safe and pleasant journey for every passenger. Contact us
      for group rates and reservations.
    </p>
  </>
);
const fleetVehicles: any[] = [];

export default function CoachesPage() {
  return (
    <FleetVehicleLayout
      title="Coaches"
      subtitle={subtitle}
      mainImage={mainImage}
      galleryImages={galleryImages}
      content={content}
      fleetVehicles={fleetVehicles}
    />
  );
}
