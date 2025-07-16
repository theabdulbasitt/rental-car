"use client";
import AirportServiceLayout from "@/components/AirportServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function BWIAirportPage() {
  return (
    <AirportServiceLayout
      heroTitle="BWI Airport Transportation"
      heroSubtitle="Reliable, comfortable, and on-time airport transfers to and from Baltimore/Washington International."
      heroImage="/assets/images/bwi-airport.jpg"
      vehicles={fleet}
      faq={<div />}>
      <div className="prose max-w-none mb-8">
        <h2>About Our BWI Airport Service</h2>
        <p>
          Enjoy stress-free travel to and from BWI with our professional
          chauffeurs and premium vehicles. We ensure timely pickups and
          drop-offs for all your airport transportation needs.
        </p>
      </div>
    </AirportServiceLayout>
  );
}
