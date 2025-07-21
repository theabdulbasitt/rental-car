"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";

export default function SchoolTransportPage() {
  return (
    <RideServiceLayout
      heroTitle="Private School Bus Service"
      heroSubtitle="Safe, reliable transportation for students. Trusted by parents and schools alike."
      heroImage="/assets/images/school-bus.jpg"
      vehicles={fleet}>
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mb-6 text-[#B31942] text-center">
          Safe, Reliable, and Private School Transportation by RNH
          Transportation
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="/assets/images/school-bus.jpg"
            alt="Private School Bus Service"
            className="rounded-xl shadow-lg w-full max-w-2xl object-cover"
          />
        </div>
        <h3 className="text-2xl font-semibold mb-4">
          Student Safety Comes First
        </h3>
        <p>
          As parents, your top concern is your child’s safety — especially when
          it comes to daily travel to and from school. At{" "}
          <strong>RNH Transportation</strong>, we provide dependable, private
          school transportation services across the DMV area, offering families
          a secure, comfortable, and timely solution for student commuting.
        </p>
        <p>
          From Baltimore and Washington D.C. to Virginia and Maryland suburbs,
          our goal is simple: give parents peace of mind while ensuring students
          arrive safely and on time — whether it’s for school, daycare, or
          after-school programs.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Built Around Your Child’s Safety and Comfort
        </h4>
        <p>
          Every vehicle in our fleet is routinely inspected and maintained to
          meet the highest safety standards. We operate modern Sprinter vans and
          minibuses equipped with:
        </p>
        <ul className="mb-4">
          <li>GPS tracking and onboard cameras</li>
          <li>Child-friendly interiors and spacious seating</li>
          <li>Air conditioning and seat belts for every passenger</li>
        </ul>
        <p>
          Our drivers are carefully screened and trained, not only for driving
          expertise but also for handling children responsibly and respectfully.
          Regular background checks, drug and alcohol screenings, and customer
          service training are part of our hiring and monitoring process.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          School Transportation Services You Can Count On
        </h4>
        <p>
          We offer custom routes and flexible scheduling that work for both
          families and institutions. Whether your child attends a public,
          charter, or private school, our services are designed to adapt to your
          routine:
        </p>
        <ul className="mb-4">
          <li>Daily pickups and drop-offs</li>
          <li>Transportation to after-school programs and extracurriculars</li>
          <li>Daycare commutes and educational trips</li>
          <li>Safe rides to special school events and camps</li>
        </ul>
        <p>
          From Montgomery County and Howard County to Potomac, Silver Spring,
          and Fairfax, we proudly serve families in various neighborhoods,
          ensuring that no child is left waiting or rushed.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Trusted by Families and Schools Alike
        </h4>
        <p>
          RNH Transportation is honored to support transportation for well-known
          private schools across the DMV, including:
        </p>
        <ul className="mb-4">
          <li>Sidwell Friends and Georgetown Day School (D.C.)</li>
          <li>Holton-Arms School (Montgomery County, MD)</li>
          <li>The Potomac School (Fairfax, VA)</li>
        </ul>
        <p>
          Each route is managed with punctuality and care, and we work closely
          with schools and parents to ensure reliable coordination and
          communication.
        </p>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Why Families Choose RNH for Student Travel
        </h4>
        <ul className="mb-4">
          <li>
            <strong>Safety Comes First:</strong> Every vehicle features GPS and
            video surveillance so parents stay informed and students stay safe.
          </li>
          <li>
            <strong>Custom Routes:</strong> We adjust our services to fit your
            child&#39;s schedule — before-school, after-hours, or activity-based
            travel.
          </li>
          <li>
            <strong>Experienced Drivers:</strong> Our chauffeurs are trained to
            prioritize children’s safety and comfort throughout the ride.
          </li>
          <li>
            <strong>Flexibility:</strong> From one-time trips to full-year
            transport plans, we offer tailored solutions that fit your needs.
          </li>
        </ul>
        <h4 className="text-xl font-bold mt-8 mb-2">
          Experience the RNH Difference
        </h4>
        <p>
          Whether it’s the daily school commute or a special school outing, RNH
          Transportation delivers reliable, private transportation services with
          your child’s safety at the core. Contact us today to learn more or
          schedule a personalized transport plan.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-center">
          Ready to Book Safe School Transportation?
        </h3>
        <p className="text-center text-lg font-bold">
          Call us at{" "}
          <a href="tel:14433363333" className="text-[#B31942]">
            (443) 336-3333
          </a>{" "}
          to request a quote or speak with our team about your student’s travel
          needs.
        </p>
      </div>
    </RideServiceLayout>
  );
}
