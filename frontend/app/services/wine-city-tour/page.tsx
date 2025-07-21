"use client";
import RideServiceLayout from "@/components/RideServiceLayout";
import { fleet } from "../../../components/fleetData";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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

export default function WineCityTourPage() {
  return (
    <RideServiceLayout
      heroImage="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroTitle="CITY TOUR"
      heroSubtitle="Experience the epitome of sophistication and convenience with our bespoke City and Brewery Tours"
      vehicles={fleet}>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">
          Ride in Elegance and Style with RNH’s Chauffeur Driven Limousine
          Service
        </h2>
        <p className="mb-4">
          Experience the epitome of sophistication and convenience with RNH’s
          bespoke City and Brewery Tours.
        </p>
        <p className="mb-4">
          Indulge in a journey meticulously tailored to your preferences as we
          whisk you away to explore the finest breweries, distilleries, and city
          attractions across Maryland, Washington DC, Virginia, and beyond. Our
          dedicated team ensures a private getaway where every detail is
          impeccably managed, allowing you to fully immerse yourself in the
          flavors and ambiance of the region's premier establishments and
          sights.
        </p>
        <p className="mb-6">
          Enjoy a seamless and stress-free City Tour experience with RNH. With
          suggested tour durations ranging from 4 to 6 hours for an enriching
          exploration of multiple locations, or 8 to 10 hours for a
          comprehensive all-day excursion, our meticulously planned itineraries
          cater to your every need. From transportation to tastings, dining,
          sightseeing, and leisurely shopping, let us curate an itinerary that
          promises unforgettable moments of relaxation and indulgence.
        </p>

        <h3 className="text-xl font-bold mb-4">Available Tour Locations</h3>
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
      </div>
    </RideServiceLayout>
  );
}
