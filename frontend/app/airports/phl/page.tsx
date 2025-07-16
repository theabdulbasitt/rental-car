"use client";
import AirportServiceLayout from "@/components/AirportServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function PHLAirportPage() {
  return (
    <AirportServiceLayout
      heroTitle="Philly Airport Transportation"
      heroSubtitle="Professional, comfortable airport transfers to and from Philadelphia International Airport."
      heroImage="/assets/images/phl-airport.jpg"
      vehicles={fleet}
      faq={<div />}>
      <div className="prose max-w-none mb-8">
        <h2>About Our Philly Airport Service</h2>
        <p>
          Travel to PHL with ease. Our luxury vehicles and expert chauffeurs
          provide a first-class airport transfer experience.
        </p>
      </div>
    </AirportServiceLayout>
  );
}
