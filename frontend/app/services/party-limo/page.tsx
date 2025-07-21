"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function PartyLimoPage() {
  return (
    <RideServiceLayout
      heroTitle="Bachelor/ette Party Limo Service"
      heroSubtitle="Celebrate in style with our luxury limos for bachelor and bachelorette parties. Safe, fun, and unforgettable."
      heroImage="/assets/images/party-limo.jpg"
      vehicles={fleet}>
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mb-6 text-[#B31942] text-center">
          Celebrate Big with RNH Transportation’s Bachelor Party Ride Services
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="/assets/images/party-limo.jpg"
            alt="Bachelor Party Limo Service"
            className="rounded-xl shadow-lg w-full max-w-2xl object-cover"
          />
        </div>
        <h3 className="text-2xl font-semibold mb-4">
          Turn Heads. Ride Smooth. Party Hard.
        </h3>
        <p>
          When it comes to throwing an unforgettable bachelor party, your ride
          should set the tone — bold, stylish, and hassle-free. At{" "}
          <strong>RNH Transportation</strong>, we bring you bachelor party
          travel options that match the excitement of your celebration. From
          sleek sedans to spacious party buses, we’ll make sure you and your
          crew roll through Washington D.C., Baltimore, Virginia, or Maryland
          with unmatched comfort and class.
        </p>
        <p>
          Whether you&#39;re hopping bars in Adams Morgan, clubbing at The
          Wharf, or doing a brewery crawl through Northern Virginia — we provide
          a ride experience that keeps the night moving without a hitch.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Ride Like a VIP from Start to Finish
        </h4>
        <p>Our vehicles are built for the occasion. Equipped with:</p>
        <ul className="mb-4">
          <li>Luxurious interiors with leather seats</li>
          <li>Mood lighting and ambient LED setups</li>
          <li>High-end speakers and entertainment systems</li>
          <li>Mini-bars and refreshment stations</li>
        </ul>
        <p>We offer a wide range of vehicles to accommodate any group size:</p>
        <ul className="mb-4">
          <li>Private sedans and SUVs for smaller, intimate outings</li>
          <li>
            Stretch limos and party buses for full-scale bachelor night parties
          </li>
        </ul>
        <p>
          Our bachelor party rentals allow multiple stops, hourly options, and
          custom itineraries — all designed to keep your night flowing as
          planned (or unplanned).
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Chauffeurs Who Know the Nightlife
        </h4>
        <p>
          Our trained and licensed drivers are more than just chauffeurs —
          they’re your local navigators and timekeepers. They know the best
          routes, the trendiest venues, and how to get your group where they
          need to be on time, safely, and in style. Whether it’s club-hopping in
          D.C. or enjoying lounges in Arlington, our drivers adapt to your vibe
          and schedule.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Transport That Matches the Occasion
        </h4>
        <ul className="mb-4">
          <li>
            Bachelor parties with full-night rentals and door-to-door pickups
          </li>
          <li>Out-of-town guests arriving via BWI, IAD, or DCA airports</li>
          <li>Shuttle services for friends coming from different areas</li>
          <li>Late-night drop-offs and after-party returns</li>
        </ul>
        <p>
          From pre-party pickups to last-call drop-offs, we ensure the journey
          is just as fun as the destination.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Planning a Bigger Celebration? We&#39;ve Got You Covered
        </h4>
        <ul className="mb-4">
          <li>Airport pick-up for guests</li>
          <li>Group shuttles between venues</li>
          <li>Flexible schedules for extended nights out</li>
          <li>
            Smooth transitions between breweries, clubs, or even hotel drop-offs
          </li>
        </ul>
        <p>
          No more splitting into multiple cars or dealing with parking headaches
          — keep everyone together and let the celebration roll on.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Not Just Bachelor Parties…
        </h4>
        <ul className="mb-4">
          <li>Weddings: Elegant wedding day shuttles and guest transport</li>
          <li>Prom &amp; Birthdays: Ride in style on your special day</li>
          <li>Wine &amp; Brewery Tours: Explore the DMV’s best craft spots</li>
          <li>
            Airport Transport: Reliable pickups and drop-offs at all major
            airports
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-center">
          Book Early. Party Smart.
        </h3>
        <p className="text-center text-lg font-bold">
          📞 Call us now at{" "}
          <a href="tel:14433363333" className="text-[#B31942]">
            (443) 336-3333
          </a>{" "}
          to book your custom ride package.
          <br />
          🚐 Vehicles fill quickly on weekends — reserve in advance!
        </p>
      </div>
    </RideServiceLayout>
  );
}
