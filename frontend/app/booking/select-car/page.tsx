"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { fleet } from "@/components/fleetData";
import { useMemo } from "react";

export default function CarSelectionPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

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

  const handleSelectCar = (carName: string) => {
    // Pass all booking data + selected car to next step as query params
    const params = new URLSearchParams({
      ...bookingData,
      selectedCar: carName,
    });
    router.push(`/booking/confirm?${params.toString()}`);
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
        {filteredFleet.length === 0 ? (
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
