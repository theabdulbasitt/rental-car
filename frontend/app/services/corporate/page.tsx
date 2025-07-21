"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function CorporatePage() {
  return (
    <RideServiceLayout
      heroTitle="Corporate Transportation Service"
      heroSubtitle="Elevate Corporate Travel with RNH Transportation (RNH)"
      heroImage="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600"
      vehicles={fleet}>
      <div className="prose max-w-none mb-8">
        <h2 className="text-3xl font-bold mb-4 text-[#B31942] text-center">
          Elevate Corporate Travel with RNH Transportation (RNH)
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Corporate Limo Service"
            className="rounded-xl shadow-lg w-full max-w-2xl object-cover"
          />
        </div>
        <p>
          In today’s high-paced business world, every detail counts—including
          how you arrive. At RNH Transportation (RNH), we understand that
          corporate transportation is more than just getting from point A to B.
          It's about presenting yourself professionally, staying efficient, and
          arriving in comfort. That’s why our corporate transportation services
          across Washington D.C., Maryland, Virginia, and beyond are tailored to
          meet the needs of modern professionals.
        </p>
        <p>
          From airport pickups to board meetings, executive retreats, and client
          entertainment, we provide dependable transportation that complements
          your schedule, supports your goals, and reflects your standards.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Reliable, Professional, and Flexible
        </h3>
        <p>
          With RNH, you don’t just get a ride—you gain a transportation partner.
          Our experienced chauffeurs and modern fleet deliver reliable service
          with a focus on punctuality, discretion, and comfort. Whether you're
          attending an event at the Walter E. Washington Convention Center,
          hosting a meeting at the Ronald Reagan Building, or entertaining
          clients at The Ritz-Carlton in Pentagon City, our team ensures smooth,
          worry-free travel.
        </p>
        <p>
          Need to organize transport for a corporate retreat at Salamander
          Resort in Virginia? Or shuttle services for a conference at The
          International Trade Center? We handle the logistics while you focus on
          what matters most—your business.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Executive Airport Transfers & Daily Corporate Travel
        </h3>
        <p>
          We offer seamless transfers to and from major airports including BWI,
          IAD, and DCA. With real-time tracking and prompt service, your team
          will never miss a flight or important meeting. Our hourly limo
          services are ideal for daily business needs, city errands, or VIP
          client transport.
        </p>
        <p>
          For larger groups, we provide spacious motorcoaches and executive vans
          to handle team movements during major events or conferences. Whether
          you need luxury sedans for executives or shuttles for an entire
          department, we’ll match the right vehicle to your itinerary.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Specialized Roadshow Services
        </h3>
        <p>
          RNH also manages executive roadshows, built around demanding
          schedules. Whether you’re an investment banker, business executive, or
          consultant with multiple meetings in a day, we provide:
        </p>
        <ul>
          <li>Precision planning</li>
          <li>Coordinated routing across cities</li>
          <li>On-the-go schedule adjustments</li>
        </ul>
        <p>
          Our team collaborates closely with you or your assistant to ensure
          efficient, discreet, and productive travel—domestically and
          internationally.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Corporate Travel Advantages with RNH
        </h3>
        <ol>
          <li>
            <strong>Professional Chauffeurs</strong>
            <br />
            Our drivers are trained in corporate etiquette, route planning, and
            local knowledge. They navigate with confidence, adapt to changing
            schedules, and uphold discretion at all times.
          </li>
          <li>
            <strong>Customized Itineraries</strong>
            <br />
            We create travel plans tailored to your business needs—whether for a
            multi-stop roadshow or time-sensitive meetings across the DMV. Need
            back-to-back rides or scheduled pickups? We’ve got it covered.
          </li>
          <li>
            <strong>Safety & Security</strong>
            <br />
            We maintain our vehicles to the highest standards and offer
            additional VIP protocols upon request. For high-profile clients,
            armored vehicles and discreet protocols are available.
          </li>
          <li>
            <strong>Real-Time Flexibility</strong>
            <br />
            Business plans can change without notice. That’s why our 24/7
            support ensures updates, modifications, and on-demand
            service—whenever and wherever you need.
          </li>
          <li>
            <strong>Premium Onboard Features</strong>
            <br />
            Stay productive with Wi-Fi, charging ports, and privacy-friendly
            interiors. Each vehicle includes climate control, plush seating, and
            entertainment systems to make your journey as efficient as your
            meetings.
          </li>
        </ol>
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Serving All Your Business Travel Needs
        </h3>
        <ul>
          <li>Business meetings and boardrooms</li>
          <li>Conferences and summits</li>
          <li>Site inspections and trade shows</li>
          <li>Client dinners and networking events</li>
          <li>Airport transfers and city tours</li>
        </ul>
        <p>
          Whether you're heading to a wedding at The Four Seasons, organizing a
          group event at IMF or World Bank, or coordinating team transport for a
          Baltimore convention, our team offers end-to-end solutions to keep
          your day running smoothly. Our services are ideal for all your
          business travel needs.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Experience the RNH Difference
        </h3>
        <p>
          With RNH, you’re not just booking a ride—you’re investing in
          reliability, image, and peace of mind. Our corporate clients trust us
          for consistency, attention to detail, and smooth coordination no
          matter how complex the schedule.
        </p>
        <p>
          We serve Baltimore, Washington D.C., Virginia, and select cities
          worldwide with the same commitment to excellence.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Book Your Corporate Ride Today
        </h3>
        <p>
          📞 Call{" "}
          <a href="tel:4433363333" className="text-[#B31942] font-bold">
            443-336-3333
          </a>{" "}
          to speak with our team and request a custom quote for your next trip
          or event.
        </p>
        <p>
          Whether you need corporate transportation in Baltimore, an airport
          limo in D.C., or support for a multi-day roadshow, RNH delivers on
          every promise—quietly, professionally, and efficiently.
        </p>
        <p>Let us handle the logistics while you focus on your business.</p>
      </div>
    </RideServiceLayout>
  );
}
