"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function VanShuttlePage() {
  return (
    <RideServiceLayout
      heroTitle="Van & Executive Shuttle Service"
      heroSubtitle="Exhale the Stress, Embrace the Comfort: Group & Airport Travel Made Simple by RNH Transportation (RNH)"
      heroImage="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1600"
      vehicles={fleet}>
      <section className="mb-8">
        <img
          src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Executive Shuttle Van"
          className="rounded-xl shadow-lg mb-6 w-full max-h-72 object-cover"
        />
        <h2 className="text-3xl font-bold mb-4 text-[#B31942] text-center">
          Exhale the Stress, Embrace the Comfort
        </h2>
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Group & Airport Travel Made Simple by RNH Transportation (RNH)
        </h3>
        <p>
          Traveling in the busy DMV area doesn’t have to be a hassle. Whether
          you’re flying into BWI, heading to a conference in Washington D.C., or
          planning a day trip to Virginia wine country, RNH Transportation (RNH)
          makes the entire journey smoother with convenient shuttle and Sprinter
          van services built for comfort, reliability, and value.
        </p>
        <p>
          From solo travelers to families on vacation or business groups on the
          move, our services are designed to meet a wide variety of travel
          needs. Our well-maintained fleet includes sedans, SUVs, sprinter vans,
          and motorcoaches—ready to take you anywhere across Maryland, D.C.,
          Virginia, and nearby regions.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Smooth Transfers to and from the DMV’s Major Airports
        </h4>
        <p>
          Navigating airport traffic and timing doesn’t need to be stressful. We
          offer non-stop shuttle service to all major airports in the area,
          including:
        </p>
        <ul>
          <li>BWI (Baltimore/Washington International)</li>
          <li>DCA (Reagan National Airport)</li>
          <li>IAD (Washington Dulles International Airport)</li>
        </ul>
        <p>
          With options like private car service, sprinter vans, or economy
          shuttles, we make airport pickups and drop-offs seamless and on time.
          No need to wait in long taxi lines or worry about delays—our team
          tracks your flight so we’re there when you need us.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Beyond the Airport: Explore the DMV with Ease
        </h4>
        <p>
          Use RNH’s shuttle service to reach popular spots like the National
          Mall, Lincoln Memorial, or Smithsonian Museums in Washington, D.C.
          Planning a Baltimore visit? We’ll get you to the Inner Harbor, Camden
          Yards, or National Aquarium without the headache of parking.
        </p>
        <p>
          Traveling with a large group to Tysons Corner for a corporate meeting?
          Our Sprinter vans are ideal for teams who need efficient, comfortable
          group transport with onboard Wi-Fi, entertainment systems, and
          spacious interiors. Whether you’re attending a wedding, a weekend
          getaway, or a business function, RNH has a ride ready.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Reliable Shuttle Services for Every Occasion
        </h4>
        <p>
          We don’t just handle airport travel. DMV residents and visitors also
          rely on RNH for:
        </p>
        <ul>
          <li>🎓 School field trips & educational tours</li>
          <li>🎉 Concerts & sporting events (FedExField, Capital One Arena)</li>
          <li>🍷 Winery tours across Loudoun County & Virginia</li>
          <li>🏞️ Countryside weddings and private parties</li>
          <li>🏢 Corporate outings and conferences</li>
        </ul>
        <p>
          Enjoy door-to-door service, flexible scheduling, and transportation
          tailored to both small and large groups. From early morning airport
          runs to late-night concert rides, we’re here 24/7 to support your
          plans.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Group Travel Made Easy with Our Sprinter Vans
        </h4>
        <p>
          Traveling as a group? Our Sprinter vans offer the perfect blend of
          luxury and practicality. With high-end seating, sound systems, Wi-Fi,
          and plenty of space, they’re a great choice for:
        </p>
        <ul>
          <li>Family reunions</li>
          <li>Business retreats</li>
          <li>Local sightseeing trips</li>
          <li>Special events and more</li>
        </ul>
        <p>
          Thinking about a day at Six Flags, a winery in Virginia, or a concert
          at Merriweather Post Pavilion? Let us take care of the driving so you
          can enjoy the day with your group from start to finish.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">Why Riders Choose RNH</h4>
        <ul>
          <li>✔ 24/7 Availability</li>
          <li>✔ Trained, professional chauffeurs</li>
          <li>✔ Modern fleet with premium amenities</li>
          <li>✔ Easy booking & real-time flight tracking</li>
          <li>✔ Affordable pricing with custom packages</li>
        </ul>
        <p>
          From everyday errands to once-in-a-lifetime celebrations, we’re
          committed to making your transportation experience smooth, dependable,
          and enjoyable.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">Ready to Ride?</h4>
        <p>
          Book your shuttle or van service today and discover why travelers
          across the DMV trust RNH. For a free quote or to schedule your next
          trip, call us at{" "}
          <a href="tel:4433363333" className="text-[#B31942] font-bold">
            (443) 336-3333
          </a>{" "}
          or visit our website.
        </p>
        <p>Let us handle the logistics—you just enjoy the ride.</p>
      </section>
    </RideServiceLayout>
  );
}
