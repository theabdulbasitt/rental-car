"use client";
import AirportServiceLayout from "@/components/AirportServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function IADAirportPage() {
  return (
    <AirportServiceLayout
      heroTitle="Dulles Airport Transportation"
      heroSubtitle="Luxury, reliable airport transfers to and from Dulles International Airport."
      heroImage="/assets/images/iad-airport.jpg"
      vehicles={fleet}
      faq={<div />}>
      <div className="prose max-w-none mb-8">
        <h2>About Our Dulles Airport Service</h2>
        <p>
          Arrive or depart from IAD with peace of mind. Our professional drivers
          and premium vehicles ensure a smooth airport experience.
        </p>
      </div>
    </AirportServiceLayout>
  );
}
