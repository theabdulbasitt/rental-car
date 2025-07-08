"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Users, Luggage, Wifi } from "lucide-react";
import Link from "next/link";

const countyTours = [
  {
    county: "Anne Arundal County Tour Locations",
    locations: [
      "Chesepiooc Real Ale Brewing",
      "Crooked Crab Brewing Co",
      "Forward Brewing",
      "Great Frogs Winery",
      "Pherm Brewing Co",
      "Thanksgiving Farm Winery – The Vineyards at Dodon",
    ],
  },
  {
    county: "Baltimore County Tour Locations",
    locations: [
      "B.C. Brewery",
      "Basignani Winery",
      "Big Truck Farm Brewery",
      "Boordy Vineyards",
      "DeJon Vineyards",
      "DuClaw Brewing",
      "Farmacy Brewing",
      "Guinness Open Gate Brewery",
      "Heavy Seas Beer",
      "Inverness Brewing",
      "Key Brewing Co",
      "Loveton Farms Distillery",
      "Pooles Island Brewing",
      "Royal Rabbit Vineyards",
    ],
  },
  { county: "Carroll County Tour Locations", locations: [] },
  { county: "Frederick County Tour Locations", locations: [] },
  { county: "Harford County Tour Locations", locations: [] },
  { county: "Howard County Tour Locations", locations: [] },
  { county: "Montgomery County Tour Locations", locations: [] },
  { county: "Washington DC Tour Locations", locations: [] },
  { county: "North Virginia Tour Locations", locations: [] },
];

const vehicles = [
  {
    name: "MERCEDES EXECUTIVE SPRINTER",
    image:
      "https://lirp.cdn-website.com/3ad4fc82/dms3rep/multi/opt/fleet-11-a59231ad-1920w.jpg",
    passengers: "12 Passengers",
    luggage: "12 Luggages",
    features: ["WiFi"],
  },
  {
    name: "MERCEDES LIMO SPRINTER",
    image:
      "https://lirp.cdn-website.com/3ad4fc82/dms3rep/multi/opt/fleet-14-258d4e3e-1920w.png",
    passengers: "13 Passengers",
    luggage: "12 Luggages",
    features: ["WiFi"],
  },
  {
    name: "LINCOLN MKT LIMOUSINE",
    image:
      "https://lirp.cdn-website.com/3ad4fc82/dms3rep/multi/opt/fleet-15-be81418e-1920w.png",
    passengers: "8 Passengers",
    luggage: "0 Luggages",
    features: ["WiFi"],
  },
  // Add more vehicles as needed
];

function ConnectForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    passengers: "",
    tripType: "",
    vehicleType: "",
    details: "",
  });
  return (
    <form className="bg-[#f5f5f5] p-8 rounded shadow flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center mb-4">Connect With Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="border-b p-2 bg-transparent"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
        <input
          className="border-b p-2 bg-transparent"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
        />
        <input
          className="border-b p-2 bg-transparent md:col-span-2"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
        <input
          className="border-b p-2 bg-transparent"
          placeholder="Pick Up Date"
          type="date"
          value={form.date}
          onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
        />
        <input
          className="border-b p-2 bg-transparent"
          placeholder="# of Passengers"
          type="number"
          value={form.passengers}
          onChange={(e) =>
            setForm((f) => ({ ...f, passengers: e.target.value }))
          }
        />
        <input
          className="border-b p-2 bg-transparent md:col-span-2"
          placeholder="Trip Type"
          value={form.tripType}
          onChange={(e) => setForm((f) => ({ ...f, tripType: e.target.value }))}
        />
        <input
          className="border-b p-2 bg-transparent md:col-span-2"
          placeholder="Vehicle Type"
          value={form.vehicleType}
          onChange={(e) =>
            setForm((f) => ({ ...f, vehicleType: e.target.value }))
          }
        />
        <textarea
          className="border-b p-2 bg-transparent md:col-span-2"
          placeholder="Details"
          value={form.details}
          onChange={(e) => setForm((f) => ({ ...f, details: e.target.value }))}
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white font-semibold py-2 mt-4">
        Send Message
      </button>
    </form>
  );
}

export default function WineCityTourPage() {
  return (
    <main className="min-h-screen bg-white py-8 px-2 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Main Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-2">
            Ride in Elegance and Style with RnH Worldwide Chauffeur Driven
            Limousine Service
          </h2>
          <p className="mb-2">
            Experience the epitome of sophistication and convenience with RnH
            Worldwide Limo&apos;s bespoke Winery and Brewery Tours.
          </p>
          <p className="mb-2">
            Indulge in a journey meticulously tailored to your preferences as we
            whisk you away to explore the finest breweries, distilleries, and
            vineyards across Maryland, Washington DC, Virginia, and beyond. Our
            dedicated team at RnH Worldwide Limo ensures a private getaway where
            every detail is impeccably managed, allowing you to fully immerse
            yourself in the flavors and ambiance of the region&apos;s premier
            establishments.
          </p>
          <p className="mb-6">
            Enjoy a seamless and stress-free Winery Tour experience with RnH
            Worldwide Limo. With suggested tour durations ranging from 4 to 6
            hours for an enriching exploration of multiple locations, or 8 to 10
            hours for a comprehensive all-day excursion, our meticulously
            planned itineraries cater to your every need. From transportation to
            tastings, dining, and leisurely shopping, let us curate an itinerary
            that promises unforgettable moments of relaxation and indulgence.
            Trust RnH Worldwide Limo to elevate your Winery and Brewery Tours to
            new heights of sophistication and refinement.
          </p>
          <Accordion type="single" collapsible className="w-full">
            {countyTours.map((county, idx) => (
              <AccordionItem key={county.county} value={county.county}>
                <AccordionTrigger className="text-lg font-bold uppercase tracking-wide">
                  {county.county}
                </AccordionTrigger>
                <AccordionContent>
                  {county.locations.length > 0 ? (
                    <ul className="list-disc list-inside ml-4">
                      {county.locations.map((loc) => (
                        <li key={loc}>{loc}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-500">Coming soon...</span>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {/* Car/Fleet Slider */}
          <div className="my-16 flex justify-center items-center w-full">
            <div className="flex flex-col items-center w-full max-w-4xl">
              <h2 className="text-3xl font-bold text-center mb-2">Fleet</h2>
              <p className="text-center mb-8 text-gray-600">
                Premium Vehicles for Every Occasion, Combining Comfort, Style,
                and Reliability.
              </p>
              <Carousel className="w-full flex justify-center items-center">
                <CarouselContent>
                  {vehicles.map((vehicle, idx) => (
                    <CarouselItem
                      key={vehicle.name}
                      className="flex flex-col items-center justify-center px-4">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="h-48 object-contain mb-4"
                      />
                      <h3 className="text-xl font-bold text-center mb-2">
                        {vehicle.name}
                      </h3>
                      <div className="flex flex-col items-center gap-1 mb-2">
                        <span className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-[#B31942]" />
                          {vehicle.passengers}
                        </span>
                        <span className="flex items-center gap-2">
                          <Luggage className="w-5 h-5 text-[#B31942]" />
                          {vehicle.luggage}
                        </span>
                        <span className="flex items-center gap-2">
                          <Wifi className="w-5 h-5 text-[#B31942]" />
                          WiFi
                        </span>
                      </div>
                      <Link
                        href="/booking"
                        className="bg-black text-white px-6 py-2 rounded font-semibold mt-2">
                        Book a Ride
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
        {/* Right: Sidebar */}
        <div className="flex flex-col gap-4">
          <a
            href="https://www.rnhlimo.com/booking"
            className="block bg-black text-white text-center font-bold py-3 mb-2">
            Book Now
          </a>
          <a
            href="https://www.rnhlimo.com/our-fleet939e955b"
            className="block bg-gray-300 text-black text-center font-bold py-3 mb-4">
            View Our Fleet
          </a>
          <ConnectForm />
        </div>
      </div>
    </main>
  );
}
