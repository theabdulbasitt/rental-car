"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function GroupTransportationPage() {
  return (
    <RideServiceLayout
      heroTitle="Group Transportation"
      heroSubtitle="Seamless travel for groups of any size. Perfect for events, tours, and corporate outings."
      heroImage="/assets/images/group-transportation.jpg"
      vehicles={fleet}>
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mb-6 text-[#B31942] text-center">
          Travel Together, Travel Better — Group Transportation by RNH
          Transportation
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="/assets/images/group-transportation.jpg"
            alt="Group Transportation"
            className="rounded-xl shadow-lg w-full max-w-2xl object-cover"
          />
        </div>
        <h3 className="text-2xl font-semibold mb-4">
          Seamless Group Travel Across the DMV
        </h3>
        <p>
          Looking to make your group travel more enjoyable and stress-free?{" "}
          <strong>RNH Transportation</strong> offers premium group travel
          solutions across the DMV region, designed for comfort, convenience,
          and a touch of luxury. Whether you&#39;re heading to a business
          conference, a family gathering, a campus trip, or catching a flight
          from BWI, IAD, or DCA, we’ve got you covered with reliable group
          transportation services.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Spacious, Modern Vehicles for Every Group
        </h4>
        <p>
          Our Sprinter vans, Mercedes vans, charter buses, and minibuses are
          equipped with the latest features to make your journey safe and
          enjoyable. Travel together in comfort and style, with plenty of room
          for everyone.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Professional Drivers, Punctual Service
        </h4>
        <p>
          Our experienced drivers are committed to safety and timeliness, so you
          can relax and focus on your event or destination. We handle the
          logistics, you enjoy the ride.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Why Choose RNH for Group Transportation?
        </h4>
        <h5 className="text-lg font-semibold mt-6 mb-1">Airport Transfers</h5>
        <p>
          Start or end your trip with ease. We offer direct group transport to
          and from BWI, DCA, and IAD airports—no delays, no hassle.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">Corporate Travel</h5>
        <p>
          Arrive together and on time for team meetings, conferences, and work
          events. Whether it’s the Gaylord National Harbor or the Reagan
          Building, we’ll get your team there efficiently.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">
          School & College Trips
        </h5>
        <p>
          Safe and comfortable transport for student outings, field trips, and
          college visits. We serve educational institutions across D.C.,
          Maryland, and Virginia.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">Weddings & Events</h5>
        <p>
          Make your big day even smoother by letting us handle group
          transportation for guests. From elegant city venues to countryside
          ceremonies, we manage the logistics so you don’t have to.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">Sports & Concerts</h5>
        <p>
          Heading to a big game or event at Capital One Arena or Audi Field?
          We’ll take care of the ride so you can focus on the experience.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">City Tours</h5>
        <p>
          Discover the best of the DMV region with our guided group tours—from
          historical landmarks in D.C. to hidden gems across Virginia and
          Maryland.
        </p>
        <h5 className="text-lg font-semibold mt-6 mb-1">Interstate Travel</h5>
        <p>
          Planning a trip beyond the DMV? Our long-distance transport services
          ensure comfort on the road—whether you&#39;re headed to New York,
          Pennsylvania, North Carolina, or beyond.
        </p>
        <h4 className="text-xl font-bold mt-10 mb-2">
          A Group Ride You Can Count On
        </h4>
        <p>
          Group travel doesn’t need to be chaotic. With RNH Transportation,
          every trip is organized, timely, and comfortable. Our team focuses on
          making your experience as smooth as possible—from the first mile to
          the last.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-center">
          Ready to Plan Your Group Trip?
        </h3>
        <p className="text-center text-lg font-bold">
          Call us at{" "}
          <a href="tel:14433363333" className="text-[#B31942]">
            (443) 336-3333
          </a>{" "}
          to request a quote or speak with our team about your specific travel
          needs.
        </p>
      </div>
    </RideServiceLayout>
  );
}
