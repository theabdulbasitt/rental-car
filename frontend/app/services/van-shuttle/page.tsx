"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function VanShuttlePage() {
  return (
    <RideServiceLayout
      heroTitle="Van & Exclusive Shuttle Service"
      heroSubtitle="Exhale Stress, Embrace Comfort: Trust AirportShuttles4Less for seamless group travel, airport transfers, and more across the DMV area."
      heroImage="https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&w=1600"
      vehicles={fleet}>
      <section className="mb-8">
        <img
          src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Shuttle Service"
          className="rounded-xl shadow-lg mb-6 w-full max-h-72 object-cover"
        />
        <h2 className="text-2xl font-bold mb-2">
          Exhale Stress, Embrace Comfort: Trust AirportShuttles4Less
        </h2>
        <p className="mb-2">
          To go to the bustling DMV area need not be anxiety riddled and time
          wasting anymore. AirportShuttles4Less offers Exclusive shuttle
          services and Sprinter Van services that redefine your travel
          experience. Whether you are a solo traveler, or a family coming over
          for a vacation, or just a group going into an important corporate
          event, all could benefit from our affordable shuttle service and
          seamless van services.
        </p>
        <p className="mb-2">
          Our versatile Fleet features premium SUVs, Sedans, Vans, and
          Motorcoaches to cater to your every need, providing both comfort and
          efficiency. Each vehicle is regularly maintained to ensure your
          comfort, guaranteeing an effortless journey no matter what your
          destination or schedule is. We are serving major airports like BWI,
          IAD and DCA plus our services also extend to destinations across
          Washington D.C, Baltimore, Maryland, Virginia and beyond.
        </p>
        {/* Add more unique content as needed */}
      </section>
    </RideServiceLayout>
  );
}
