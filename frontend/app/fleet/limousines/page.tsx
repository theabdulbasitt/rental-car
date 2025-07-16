import FleetVehicleLayout from "../../../components/FleetVehicleLayout";
import { fleet } from "../../../components/fleetData";

const mainImage = "/assets/images/limousine-main.jpg";
const galleryImages = [
  "/assets/images/limousine-1.jpg",
  "/assets/images/limousine-2.jpg",
  "/assets/images/limousine-3.jpg",
];
const subtitle =
  "Classic stretch limousines for special occasions and luxury travel.";
const content = (
  <>
    <p className="mb-4">
      Our limousines offer the ultimate in luxury and style, perfect for
      weddings, proms, and special events. Enjoy a memorable ride with premium
      amenities and professional chauffeurs.
    </p>
    <ul className="list-disc pl-5 mb-4">
      <li>Seating for up to 10 passengers</li>
      <li>Bar, LED lighting, and privacy partition</li>
      <li>Premium sound system</li>
      <li>Professional, courteous drivers</li>
    </ul>
    <p>
      Make your event unforgettable with our classic stretch limousines. Contact
      us for packages and reservations.
    </p>
  </>
);
const fleetVehicles: any[] = [];

export default function LimousinesPage() {
  return (
    <FleetVehicleLayout
      title="Limousines"
      subtitle={subtitle}
      mainImage={mainImage}
      galleryImages={galleryImages}
      content={content}
      fleetVehicles={fleetVehicles}
    />
  );
}
