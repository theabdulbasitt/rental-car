"use client";
import FleetVehicleLayout from "../../../components/FleetVehicleLayout";

const mainImage = "/assets/images/mini-bus-main.jpg";
const galleryImages = [
  "/assets/images/mini-bus-1.jpg",
  "/assets/images/mini-bus-2.jpg",
  "/assets/images/mini-bus-3.jpg",
];
const subtitle = "Perfect for medium-sized groups and events.";
const content = (
  <>
    <p className="mb-4">
      Our mini buses are perfect for group travel, offering comfort, safety, and
      ample space for passengers and luggage. Ideal for corporate events, tours,
      and airport transfers.
    </p>
    <ul className="list-disc pl-5 mb-4">
      <li>Seating for up to 28 passengers</li>
      <li>Spacious interiors and luggage compartments</li>
      <li>Onboard amenities for comfort</li>
      <li>Professional, experienced drivers</li>
    </ul>
    <p>
      Whether you need transportation for a business outing or a family reunion,
      our mini buses provide a reliable and enjoyable ride. Contact us for
      custom quotes and availability.
    </p>
  </>
);
const fleetVehicles: any[] = [];

export default function MiniBusesPage() {
  return (
    <FleetVehicleLayout
      title="Mini Buses"
      subtitle={subtitle}
      mainImage={mainImage}
      galleryImages={galleryImages}
      content={content}
      fleetVehicles={fleetVehicles}
    />
  );
}
