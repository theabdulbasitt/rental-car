"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function AirportLimoPage() {
  return (
    <RideServiceLayout
      heroImage="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroTitle="AIRPORT TRANSPORTATION"
      heroSubtitle="Breathe Easy with Renowned Airport Limo Service Providers"
      vehicles={fleet}>
      {/* Main content goes here. Replace with your actual content. */}
      <div className="prose max-w-none">
        {/* ...existing content sections... */}
      </div>
    </RideServiceLayout>
  );
}
