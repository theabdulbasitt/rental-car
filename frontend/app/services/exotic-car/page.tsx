"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function ExoticCarPage() {
  return (
    <RideServiceLayout
      heroTitle="Exotic Car Rental"
      heroSubtitle="Drive your dream car. Choose from our fleet of high-end, exotic vehicles for any occasion."
      heroImage="/assets/images/exotic-car.jpg"
      vehicles={fleet}>
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mb-6 text-[#B31942] text-center">
          Make a Lasting Impression with RNH Transportation’s Exotic Car Rentals
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="/assets/images/exotic-car.jpg"
            alt="Exotic Car Rental"
            className="rounded-xl shadow-lg w-full max-w-2xl object-cover"
          />
        </div>
        <h3 className="text-2xl font-semibold mb-4">
          Ride in Style Across D.C., Maryland, and Virginia
        </h3>
        <p>
          Turn your ordinary journey into an extraordinary adventure with{" "}
          <strong>RNH Transportation’s Exotic Car Rental Services</strong> in
          the DMV area. Drive with luxury, power, and style—and feel the thrill
          of commanding attention wherever the road takes you.
        </p>
        <p>
          Imagine gliding through the iconic streets of Washington D.C.,
          Virginia, and Maryland in a sleek luxury sedan. Whether you’re pulling
          up to a high-profile business meeting or stepping out at an elegant
          gala, our Exotic and Luxury Car Rental service ensures you make a
          lasting impression.
        </p>
        <p>
          Perfect for corporate events, airport transfers (BWI, DCA, IAD), city
          tours, or special celebrations like weddings, proms, and date
          nights—RNH Transportation’s fleet includes Rolls Royce, stretch
          limousines, luxury SUVs, and black car sedans that balance elegance
          with high performance.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Exotic City Tours in Premium Cars
        </h4>
        <p>
          Cruise through scenic routes with a powerful engine beneath you and
          top-tier amenities all around. Love scenic drives through Bethesda or
          Annapolis? Whether you need a family sedan for a relaxing D.C. visit
          or a high-performance vehicle for a thrilling joyride, every
          detail—from plush leather interiors to premium sound systems—is
          designed to elevate your travel experience.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Luxury Rentals for Special Events
        </h4>
        <h5 className="text-lg font-semibold mt-6 mb-1">💍 Weddings</h5>
        <p>
          Make your big day unforgettable. Picture yourself arriving at
          Greektown Square & Event Centre in Baltimore or The Willard
          InterContinental in D.C. in an exquisite Rolls Royce or luxury black
          car. Maximum elegance, unmatched comfort.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">🎓 Graduations</h5>
        <p>
          Celebrate your achievement in style. Arrive at your graduation venue
          in a posh sedan or Rolls Royce and make the day truly special with our
          DMV-wide exotic car rental services.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">🎉 Proms</h5>
        <p>
          Show up in a sleek limousine or stylish exotic car and create lifelong
          memories. Whether you&#39;re heading to Tysons Corner, Silver Spring,
          or downtown Baltimore, our luxurious rides add glamour to your prom
          night.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">🥂 Date Nights</h5>
        <p>
          Make any evening unforgettable with a romantic drive in a Rolls Royce,
          luxury sedan, or SUV. Explore Washington D.C. or the charming streets
          of Alexandria, Virginia—with style and grace.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">🎈 Birthday Parties</h5>
        <p>
          Party like royalty. Whether it&#39;s a night out at The Stalking Horse
          Tavern or any popular DMV hotspot, arrive in a luxurious SUV or black
          car sedan and make your birthday unforgettable.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">
          🎉 Bachelor Parties & Night Outs
        </h5>
        <p>
          Plan an epic celebration with stretch limousines or exotic car
          rentals. Hit up venues like Jack Rose Dining Saloon or Howl at the
          Moon in complete luxury.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">Experience the Fleet</h4>
        <ul className="mb-4">
          <li>BMW 7 Series – Sleek, smooth, and sophisticated</li>
          <li>Mercedes-Benz S-Class – Where luxury meets innovation</li>
          <li>Porsche Panamera – Pure power with a sporty edge</li>
          <li>Range Rover Autobiography – Rugged meets luxury</li>
          <li>Cadillac Escalade – Spacious and stylish for larger groups</li>
          <li>Rolls Royce Phantom & Ghost – Unrivaled opulence</li>
        </ul>
        <p>
          Our fleet is maintained to perfection, ensuring a smooth, stylish, and
          unforgettable ride every time.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Why Choose RNH Transportation?
        </h4>
        <ul className="mb-4">
          <li>No parking hassle or route worries</li>
          <li>Chauffeurs who know DMV inside-out</li>
          <li>Immaculate, high-performance fleet</li>
          <li>Luxurious comfort with every mile</li>
          <li>Custom-tailored experience for every occasion</li>
        </ul>
        <p>
          From Maryland Exotic Car Rentals to Washington D.C. Luxury Car Hires,
          we are your go-to partner for transportation that’s as memorable as
          the event itself.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-center">
          Reserve Your Luxury Ride Today
        </h3>
        <p className="text-center text-lg font-bold">
          📞 Call us now at{" "}
          <a href="tel:14433363333" className="text-[#B31942]">
            (443) 336-3333
          </a>{" "}
          for a free quote and make your reservation.
          <br />
          Don’t just travel—travel in luxury.
        </p>
      </div>
    </RideServiceLayout>
  );
}
