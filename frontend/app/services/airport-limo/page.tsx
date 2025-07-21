"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function AirportLimoPage() {
  return (
    <RideServiceLayout
      heroImage="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroTitle="AIRPORT TRANSPORTATION"
      heroSubtitle="Arrive Relaxed: Stress-Free Airport Transportation with RNH"
      vehicles={fleet}>
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mb-6 text-[#B31942] text-center">
          Arrive Relaxed: Stress-Free Airport Transportation with RNH
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Airport Limo Service"
            className="rounded-xl shadow-lg w-full max-w-2xl object-cover"
          />
        </div>
        <p>
          Tired of last-minute scrambles, delayed pickups, or the stress of
          navigating unfamiliar airports? RNH Transportation (RNH) makes airport
          travel more predictable and more comfortable. Whether you're flying in
          or out of BWI, DCA, IAD, or PHL, we provide tailored airport
          transportation that fits your needs—on time, every time.
        </p>
        <p>
          From corporate visits to sightseeing adventures, our service ensures
          your journey begins and ends with ease. Whether you're heading to a
          meeting near Tysons Corner, exploring Old Town Alexandria, or landing
          late at Dulles, we offer a range of vehicles suited to every type of
          traveler—from solo flyers to large groups.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Choose from a Modern Fleet
        </h3>
        <ul>
          <li>Luxury sedans for executive travel</li>
          <li>Spacious SUVs and sprinter vans for families and small groups</li>
          <li>Comfortable motorcoaches for larger parties and events</li>
        </ul>
        <p>
          Need multiple stops along the way? Our hourly service offers the
          flexibility to travel on your terms, whether you're planning an
          itinerary through Georgetown Waterfront or heading from the airport to
          your hotel with a few detours.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Simplifying the Airport Experience | BWI Transport Solutions by RNH
        </h3>
        <p>
          Navigating crowded terminals like BWI, DCA, or IAD can be
          overwhelming. Long lines, unpredictable flight times, and the stress
          of finding a ride home after a red-eye flight are all too familiar.
          That’s where RNH steps in.
        </p>
        <p>
          Our airport shuttle and limo services are designed to reduce that
          stress. We monitor real-time flight schedules, so whether you're early
          or delayed, we’re ready. Whether you're catching a connection at BWI,
          heading to Constitution Gardens, or traveling to Arlington or
          Bethesda, our experienced chauffeurs know the best routes and how to
          avoid traffic bottlenecks.
        </p>
        <p>
          For those who prefer privacy and peace, our luxury sedans and
          limousines offer a quiet ride after a long flight. Traveling with a
          team or family? Our motorcoaches and sprinter vans ensure there's
          space for everyone—plus the luggage.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Airport Pickup for Every Occasion
        </h3>
        <ul>
          <li>
            Corporate trips: Arrive at your conference or meeting—whether at The
            Ritz-Carlton or a downtown office—on time and composed.
          </li>
          <li>
            Special events: Wedding at The Willard or a gala at The Jefferson
            Hotel? We handle airport-to-venue transfers with elegance.
          </li>
          <li>
            Leisure travel: Enjoy a scenic ride to Great Falls Park or a hotel
            in Downtown D.C., all without navigating crowded transit.
          </li>
        </ul>
        <p>
          No matter your destination, our 24/7 booking system, real-time
          tracking, and customizable options make travel planning easier than
          ever.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Why Travelers Choose RNH for Airport Transfers
        </h3>
        <ul>
          <li>✅ Coverage across 750+ cities</li>
          <li>✅ Professional, background-checked chauffeurs</li>
          <li>✅ Wi-Fi enabled vehicles for on-the-go productivity</li>
          <li>✅ A fleet of clean, late-model cars, vans, and coaches</li>
          <li>✅ 24/7 customer support for assistance anytime</li>
          <li>✅ GPS-enabled dispatching and flight tracking</li>
        </ul>
        <p>
          We take care of the details so you can focus on your journey. Whether
          you’re a frequent flyer or a first-time visitor, our flexible airport
          transport options—ranging from affordable shuttles to premium black
          car service—ensure there’s something for everyone.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Book Your Ride with Confidence
        </h3>
        <p>
          No more searching for "airport limo near me" or waiting in taxi
          queues. Simply call us at{" "}
          <a href="tel:4433363333" className="text-[#B31942] font-bold">
            443-336-3333
          </a>{" "}
          or schedule online and experience the difference of reliable, refined
          airport travel with RNH.
        </p>
      </div>
    </RideServiceLayout>
  );
}
