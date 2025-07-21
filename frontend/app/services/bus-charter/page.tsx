"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function BusCharterPage() {
  return (
    <RideServiceLayout
      heroTitle="Bus Charter | Rental"
      heroSubtitle="Charter a bus for your next big event. Comfortable, reliable, and perfect for large groups."
      heroImage="/assets/images/bus-charter.jpg"
      vehicles={fleet}>
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mb-6 text-[#B31942] text-center">
          Luxury on Wheels: Premium Charter Bus Rentals for Groups by RNH
          Transportation
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="/assets/images/bus-charter.jpg"
            alt="Charter Bus Rental"
            className="rounded-xl shadow-lg w-full max-w-2xl object-cover"
          />
        </div>
        <h3 className="text-2xl font-semibold mb-4">
          Effortless Group Travel, Every Time
        </h3>
        <p>
          Planning and organizing transportation for an entire group trip or
          gathering can be time-consuming and exhausting.{" "}
          <strong>RNH Transportation</strong> makes trip planning less tiresome
          by providing luxurious charter bus rentals with state-of-the-art buses
          for corporate retreats, wedding parties, out-of-state travels, city
          tours, and family reunions.
        </p>
        <p>
          Imagine traveling together in comfort and style — luxury motor coach
          rentals that offer ample space and high-end amenities, driven by
          professional drivers dedicated to making your journey smooth and
          stress-free. We make group travel effortless between BWI, IAD, and DCA
          airports, with tailored charter solutions to match every client’s
          unique needs.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Serving Washington D.C., Maryland, Virginia & Beyond
        </h4>
        <p>
          Our fleet is dedicated to serving Washington D.C., Baltimore,
          Maryland, Virginia, and neighboring states across the country. RNH
          Transportation offers a diverse fleet suitable for any group size,
          always prioritizing comfort, style, and reliability.
        </p>
        <ul className="mb-4">
          <li>
            <strong>Coach Buses:</strong> Perfect for large groups and corporate
            events — seats up to 56 passengers
          </li>
          <li>
            <strong>Executive Mini Buses:</strong> Ideal for mid-sized groups —
            seats up to 27 passengers
          </li>
          <li>
            <strong>Mercedes Executive Sprinters:</strong> Great for small
            groups — seats 12 passengers
          </li>
          <li>
            <strong>Jet Sprinters:</strong> Luxury on a smaller scale — seats 8
            passengers
          </li>
        </ul>
        <p>
          All vehicles come equipped with modern amenities such as reclining
          seats, air-conditioning, Wi-Fi, and luggage space to make every ride
          pleasant — no matter the distance.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          A Bus for Every Occasion: Where Luxury Meets Versatility
        </h4>
        <h5 className="text-lg font-semibold mt-6 mb-1">
          Out-of-State Group Travel
        </h5>
        <p>
          Looking to travel beyond Maryland or D.C.? RNH Transportation offers
          reliable and comfortable charter buses for destinations like
          Pennsylvania, New Jersey, North Carolina, and Ohio. Our 56-passenger
          and 27-passenger motorcoaches ensure a smooth, stylish, and safe ride
          with ample legroom and luggage storage.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">
          City Sightseeing Tours
        </h5>
        <p>
          Explore the nation&#39;s capital or Baltimore with our sightseeing
          charters. Whether you&#39;re touring The White House, Tidal Basin,
          Baltimore Museum of Art, or Fell&#39;s Point, we make your city
          experience memorable. Our minibuses and coach buses allow your group
          to travel together in comfort while avoiding parking and navigation
          hassles.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">
          Destination Weddings
        </h5>
        <p>
          From historic sites in Baltimore to vineyards in Virginia, RNH
          Transportation makes wedding day logistics simple and stylish. Your
          guests will arrive on time and in high spirits thanks to our spacious,
          luxurious buses.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">
          Corporate Retreats & Conferences
        </h5>
        <p>
          Planning a retreat or conference in Maryland, D.C., or Northern
          Virginia? Our professional drivers ensure your team travels together,
          arrives on schedule, and stays refreshed for a productive day at
          venues like the Washington DC Convention Center.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">
          Family Gatherings & Celebrations
        </h5>
        <p>
          Family reunions become more fun with RNH Transportation. Let your trip
          become part of the celebration as relatives relax, share stories, and
          create lasting memories on the road to locations like Chesapeake Bay
          or other local landmarks.
        </p>
        <h4 className="text-xl font-bold mt-10 mb-2">
          Let’s Hit the Road — Together
        </h4>
        <p>
          So, what’s your next adventure? Whether it’s touring historic cities,
          celebrating love in the countryside, or connecting with family, RNH
          Transportation is ready to take you there.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-center">
          Ready to Book Your Charter Bus?
        </h3>
        <p className="text-center text-lg font-bold">
          📞 Call us at{" "}
          <a href="tel:14433363333" className="text-[#B31942]">
            (443) 336-3333
          </a>{" "}
          for a free quote, to explore our fleet, or to book your next ride.
          <br />
          RNH Transportation — Where every mile becomes a memory.
        </p>
      </div>
    </RideServiceLayout>
  );
}
