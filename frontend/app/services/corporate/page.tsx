"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function CorporatePage() {
  return (
    <RideServiceLayout
      heroTitle="Corporate Transportation Service"
      heroSubtitle="Executive travel solutions for business professionals. Reliable, discreet, and always on time."
      heroImage="/assets/images/corporate-limo.jpg"
      vehicles={fleet}>
      <div className="prose max-w-none mb-8">
        <h2>Corporate Travel, Elevated</h2>
        <ul>
          <li>On-time pickups and drop-offs</li>
          <li>Comfortable, private work environment</li>
          <li>Professional, uniformed chauffeurs</li>
        </ul>
        <p>
          Impress clients and colleagues with our premium corporate
          transportation services.
        </p>
      </div>
    </RideServiceLayout>
  );
}
