"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { fleet } from "@/components/fleetData";
import { useMemo, useState } from "react";

const ORS_API_KEY = process.env.NEXT_PUBLIC_ORS_API_KEY;

async function geocodeAddress(address: string): Promise<[number, number]> {
  const url = `https://api.openrouteservice.org/geocode/search?api_key=${ORS_API_KEY}&text=${encodeURIComponent(
    address
  )}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.features && data.features.length > 0) {
    return data.features[0].geometry.coordinates; // [lng, lat]
  }
  throw new Error("Address not found");
}

async function getDistance(start: [number, number], end: [number, number]) {
  const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${ORS_API_KEY}`;
  const body = {
    coordinates: [start, end],
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (data.routes && data.routes[0]) {
    return data.routes[0].summary.distance; // in meters
  }
  throw new Error("Distance calculation failed");
}

export default function CarSelectionPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Get all booking data from query params
  const bookingData = useMemo(() => {
    const obj: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }, [searchParams]);

  // Parse passengers and luggage as numbers
  const passengers = parseInt(bookingData.passengers || "1", 10);
  const luggage = parseInt(bookingData.luggage || "0", 10);

  // Filter fleet by requirements
  const filteredFleet = fleet.filter(
    (car) =>
      parseInt(car.passengers, 10) >= passengers &&
      parseInt(car.luggage, 10) >= luggage
  );

  const handleSelectCar = async (carName: string) => {
    setLoading(true);
    setError("");
    try {
      // Geocode pickup and dropoff
      const [pickupLng, pickupLat] = await geocodeAddress(
        bookingData.pickupLocation
      );
      const [dropoffLng, dropoffLat] = await geocodeAddress(
        bookingData.dropoffLocation
      );
      // Get distance in meters
      const distance = await getDistance(
        [pickupLng, pickupLat],
        [dropoffLng, dropoffLat]
      );
      // Pass all booking data + selected car + distance to next step as query params
      const params = new URLSearchParams({
        ...bookingData,
        selectedCar: carName,
        distance: String((distance / 1000).toFixed(2)), // convert to km
      });
      router.push(`/booking/finalize?${params.toString()}`);
    } catch (err: any) {
      setError(err.message || "Error calculating distance.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Select Your Vehicle
        </h1>
        <p className="text-center mb-8 text-gray-600">
          Showing vehicles for <b>{passengers}</b> passenger(s) and{" "}
          <b>{luggage}</b> luggage(s)
        </p>
        {error && (
          <div className="text-center text-red-600 font-semibold">{error}</div>
        )}
        {loading ? (
          <div className="text-center text-lg py-8">
            Calculating distance...
          </div>
        ) : filteredFleet.length === 0 ? (
          <div className="text-center text-red-600 font-semibold">
            No vehicles available for your requirements. Please go back and
            adjust your selection.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredFleet.map((car) => (
              <div
                key={car.name}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-200 hover:shadow-xl transition cursor-pointer"
                onClick={() => handleSelectCar(car.name)}>
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-40 object-contain mb-4"
                />
                <h2 className="text-xl font-bold mb-2 text-[#B31942] text-center">
                  {car.name}
                </h2>
                <div className="flex flex-wrap justify-center gap-2 text-sm mb-2">
                  <span>👤 {car.passengers} Passengers</span>
                  <span>🧳 {car.luggage} Luggage</span>
                </div>
                <div className="mb-2 text-center text-gray-600 text-sm">
                  {car.description}
                </div>
                <button className="btn-primary w-full mt-2">Select</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
