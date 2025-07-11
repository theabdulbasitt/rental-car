"use client";
import RideServiceLayout from "@/components/RideServiceLayout";

const vehicles = [
  {
    name: "Luxury Sedan",
    image: "/assets/images/sedan.png",
    passengers: "3 passengers",
    luggage: "2 bags",
    features: ["WiFi"],
  },
];

export default function HourlyLimoPage() {
  return (
    <RideServiceLayout
      heroTitle="Hourly Limo Service"
      heroSubtitle="Flexible, on-demand luxury transportation for any occasion. Book by the hour and enjoy professional service tailored to your schedule."
      heroImage="/assets/images/hourly-limo.jpg"
      vehicles={vehicles}>
      <div className="prose max-w-none mb-8">
        <h2>Why Choose Our Hourly Limo Service?</h2>
        <ul>
          <li>Perfect for business meetings, events, or nights out</li>
          <li>Professional chauffeurs, luxury vehicles</li>
          <li>Stay on your schedule, unlimited stops</li>
        </ul>
        <p>
          Book by the hour and enjoy the freedom to go wherever you need,
          whenever you need.
        </p>
      </div>
    </RideServiceLayout>
  );
}
