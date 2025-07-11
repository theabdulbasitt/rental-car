import FleetVehicleLayout from "../../../components/FleetVehicleLayout";

const mainImage = "/assets/images/sprinter-van-main.jpg";
const galleryImages = [
  "/assets/images/sprinter-van-1.jpg",
  "/assets/images/sprinter-van-2.jpg",
  "/assets/images/sprinter-van-3.jpg",
];
const subtitle =
  "Versatile sprinter vans for group travel and executive transport.";
const content = (
  <>
    <p className="mb-4">
      Our sprinter vans are ideal for group transportation, offering spacious
      interiors, comfort, and flexibility. Perfect for airport transfers,
      corporate events, and family outings.
    </p>
    <ul className="list-disc pl-5 mb-4">
      <li>Seating for up to 14 passengers</li>
      <li>Ample luggage space</li>
      <li>Modern amenities and WiFi</li>
      <li>Professional, reliable drivers</li>
    </ul>
    <p>
      Enjoy a smooth and convenient ride in our premium sprinter vans. Contact
      us for group rates and availability.
    </p>
  </>
);
const fleetVehicles: any[] = [];

export default function SprinterVansPage() {
  return (
    <FleetVehicleLayout
      title="Sprinter Vans"
      subtitle={subtitle}
      mainImage={mainImage}
      galleryImages={galleryImages}
      content={content}
      fleetVehicles={fleetVehicles}
    />
  );
}
