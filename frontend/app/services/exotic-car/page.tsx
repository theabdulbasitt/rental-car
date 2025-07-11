"use client";
import RideServiceLayout from "@/components/RideServiceLayout";

const vehicles = [
  {
    name: "Exotic Car",
    image: "/assets/images/exotic-car.png",
    passengers: "2 passengers",
    luggage: "1 bag",
    features: ["WiFi"],
  },
];

export default function ExoticCarPage() {
  return (
    <RideServiceLayout
      heroTitle="Exotic Car Rental"
      heroSubtitle="Drive your dream car. Choose from our fleet of high-end, exotic vehicles for any occasion."
      heroImage="/assets/images/exotic-car.jpg"
      vehicles={vehicles}>
      <div className="prose max-w-none mb-8">
        <h2>Experience the Extraordinary</h2>
        <ul>
          <li>Luxury and exotic car options</li>
          <li>Impress at any event</li>
          <li>Flexible rental terms</li>
        </ul>
        <p>
          Turn heads and make memories with our exclusive exotic car rentals.
        </p>
      </div>
    </RideServiceLayout>
  );
}
