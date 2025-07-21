"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function PointToPointPage() {
  return (
    <RideServiceLayout
      heroImage="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroTitle="POINT TO POINT LIMO SERVICE"
      heroSubtitle="Travel in Luxury & Style with RNH’s Point-to-Point Transport"
      vehicles={fleet}>
      {/* Main content goes here. Replace with your actual content. */}
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mb-6 text-[#B31942] text-center">
          Travel in Style with Our Point-to-Point Limo Service
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Luxury Limousine"
            className="rounded-xl shadow-lg w-full max-w-2xl object-cover"
          />
        </div>
        <h3 className="text-2xl font-semibold mb-4">
          Travel Comfortably and Confidently with RNH’s Point-to-Point Transport
          Services
        </h3>
        <p>
          Looking for a hassle-free limo or point-to-point transportation
          service? RNH Transportation (RNH) offers a dependable way to travel
          across the DMV region in style. Whether you're heading to a business
          meeting or a night out, our fleet—ranging from full-size sedans and
          minivans to sprinter vans and motor coaches—ensures there's a ride
          suited for every occasion.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Explore the DMV in Comfort
        </h4>
        <p>
          Explore the historical charm of Baltimore, the landmarks of Washington
          D.C., or the scenic beauty of Virginia and Maryland, all from the
          comfort of our chauffeured vehicles. Cruise past iconic spots like
          Fells Point, the National Mall, or Shenandoah National Park without
          the stress of traffic or parking. We pride ourselves on reliable,
          on-time service that makes every journey feel effortless.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Corporate & Hourly Services
        </h4>
        <p>
          Need transport for a corporate event? Our clean, executive-class
          vehicles offer a professional environment ideal for business travel.
          If you prefer to explore at your own pace, our hourly service can take
          you through spots like Annapolis or across the Bay Bridge, making
          spontaneous stops or scenic detours whenever you choose.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Flexible Options & Modern Amenities
        </h4>
        <p>
          Whether you're traveling solo or with a group, we offer flexible
          transport options, and DMV residents can enjoy exclusive local
          discounts. Inside our vehicles, you’ll find modern amenities including
          entertainment systems, onboard Wi-Fi, and refreshments—so your ride is
          never just a ride.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          24/7 Availability & Safety First
        </h4>
        <p>
          Available 24/7, RNH is ready whenever you are. Last-minute plans or
          pre-scheduled rides? We’ve got you covered. All vehicles are regularly
          inspected, fully insured, and maintained with your comfort and safety
          in mind. Whether you're seeking a quiet commute or a celebratory ride,
          we tailor the experience to fit your needs.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          BWI Transport & Corporate Travel, Simplified
        </h3>
        <p>
          Tired of traffic delays and parking challenges? With our
          point-to-point services, you can leave those worries behind. Perfect
          for daily commutes, corporate drop-offs, or group events, RNH helps
          streamline your travel so you can focus on what matters most.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Special Events & Airport Runs
        </h4>
        <p>
          Planning something special? From birthdays and proms to weddings and
          anniversaries, our services bring an added layer of sophistication to
          your events. Our corporate limo options ensure you arrive at meetings,
          conferences, or presentations relaxed and on time—making the right
          impression every time.
        </p>
        <p>
          Airport runs don’t need to be stressful either. Whether you’re flying
          through BWI, IAD, or DCA, we provide timely airport pickups, luggage
          assistance, and smooth drop-offs. Just schedule your ride and let us
          handle the rest.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Your Trusted DMV Transportation Partner
        </h4>
        <p>
          Choose RNH as your go-to transportation partner across Washington
          D.C., Maryland, and Virginia. We’re committed to making every ride
          smooth, safe, and memorable—whether it’s your daily commute or a
          once-in-a-lifetime event.
        </p>
      </div>
    </RideServiceLayout>
  );
}
