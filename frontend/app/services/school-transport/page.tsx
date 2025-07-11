"use client";
import RideServiceLayout from "@/components/RideServiceLayout";

const vehicles = [
  {
    name: "School Bus",
    image: "/assets/images/school-bus.png",
    passengers: "40 passengers",
    luggage: "N/A",
    features: [],
  },
];

export default function SchoolTransportPage() {
  return (
    <RideServiceLayout
      heroTitle="Private School Bus Service"
      heroSubtitle="Safe, reliable transportation for students. Trusted by parents and schools alike."
      heroImage="/assets/images/school-bus.jpg"
      vehicles={vehicles}>
      <div className="prose max-w-none mb-8">
        <h2>School Transportation You Can Trust</h2>
        <ul>
          <li>Background-checked drivers</li>
          <li>Modern, well-maintained buses</li>
          <li>Flexible routes and schedules</li>
        </ul>
        <p>
          We prioritize safety and punctuality for every student, every day.
        </p>
      </div>
    </RideServiceLayout>
  );
}
