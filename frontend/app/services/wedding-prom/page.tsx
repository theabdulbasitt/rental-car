"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function WeddingPromPage() {
  return (
    <RideServiceLayout
      heroTitle="Wedding & Prom Limo"
      heroSubtitle="Make your special day or prom night unforgettable with RnH Worldwide Limousine Service. Safe, reliable, and luxurious transportation for your most important celebrations."
      heroImage="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
      vehicles={fleet}>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          Make Your Prom Night Unforgettable with RnH Worldwide Limousine
          Service
        </h2>
        <p className="mb-2">
          Prom night is a special occasion for high school seniors to celebrate
          their accomplishments and create lasting memories. At RnH Worldwide
          Limousine Service, we understand the importance of this milestone
          event and strive to provide safe, reliable, and luxurious
          transportation to ensure an unforgettable experience.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Our Promise</h3>
        <p className="mb-2">
          At RnH Worldwide Limousine Service, we are committed to making your
          prom night a truly memorable and hassle-free experience. Our fleet of
          beautiful luxury limousines, driven by professional chauffeurs, is the
          perfect way to stand out and make a grand entrance at the prom venue.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Why Choose Us</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            Safety First: Your children’s safety is our top priority. Rest
            assured that our experienced chauffeurs will ensure a safe and
            secure journey to and from the prom venue.
          </li>
          <li>
            Luxurious Experience: Arrive in style with our sleek, black stretch
            limousines. Our vehicles are meticulously maintained to provide the
            utmost comfort and elegance, allowing your children to feel like
            VIPs on their special night.
          </li>
          <li>
            Value-Packed Packages: Our prom packages offer exceptional value,
            ensuring that you receive top-notch service at an affordable price.
            Enjoy peace of mind knowing that your children are in good hands.
          </li>
        </ul>
        {/* Add more unique content as needed */}
      </section>
    </RideServiceLayout>
  );
}
