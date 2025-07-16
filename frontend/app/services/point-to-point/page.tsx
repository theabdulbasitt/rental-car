"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function PointToPointPage() {
  return (
    <RideServiceLayout
      heroImage="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroTitle="POINT TO POINT LIMO SERVICE"
      heroSubtitle="Travel in Luxury & Style with AS4L’s Point-to-Point Transport"
      vehicles={fleet}>
      {/* Main content goes here. Replace with your actual content. */}
      <div className="prose max-w-none">
        {/* ...existing content sections... */}
      </div>
    </RideServiceLayout>
  );
}
