"use client";

import { useState, useRef } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Luggage,
  Plus,
  Minus,
} from "lucide-react";
import { useRouter } from "next/navigation";
const ORS_API_KEY =
  process.env.NEXT_PUBLIC_ORS_API_KEY || process.env.ORS_API_KEY;

function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  return (...args: any[]) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => callback(...args), delay);
  };
}

async function fetchORSAutocomplete(query: string) {
  if (!query) return [];
  const url = `https://api.openrouteservice.org/geocode/autocomplete?api_key=${ORS_API_KEY}&text=${encodeURIComponent(
    query
  )}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.features) {
    return data.features.map((f: any) => f.properties.label);
  }
  return [];
}

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

async function snapToNearestRoad([lng, lat]: [number, number]): Promise<
  [number, number]
> {
  const url = `/api/ors-nearest?lng=${lng}&lat=${lat}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data && data.coordinates && data.coordinates.length > 0) {
    return data.coordinates[0]; // [lng, lat]
  }
  throw new Error("Could not snap to nearest road");
}

async function getDistanceFrontend(
  start: [number, number],
  end: [number, number]
) {
  if (!ORS_API_KEY) throw new Error("OpenRouteService API key is missing.");
  const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${ORS_API_KEY}`;
  const body = {
    coordinates: [start, end],
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || "Distance calculation failed (ORS API error)"
    );
  }
  const data = await res.json();
  if (data.routes && data.routes[0]) {
    return {
      distance_meters: data.routes[0].summary.distance,
      duration_seconds: data.routes[0].summary.duration,
    };
  }
  throw new Error("Distance calculation failed (no route found)");
}

async function getDistanceWithFallback(
  start: [number, number],
  end: [number, number]
): Promise<{ distance_meters: number; duration_seconds: number }> {
  try {
    // Try Directions API first
    return await getDistanceFrontend(start, end);
  } catch (err: any) {
    // If error is about routable point, try snapping to nearest road
    if (err.message && err.message.includes("routable point")) {
      const snappedStart = await snapToNearestRoad(start);
      const snappedEnd = await snapToNearestRoad(end);
      return await getDistanceFrontend(snappedStart, snappedEnd);
    }
    throw err;
  }
}

const BookingForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    serviceType: "To Airport",
    pickupDate: "",
    pickupTime: "",
    pickupLocation: "",
    dropoffLocation: "",
    passengers: 1,
    luggage: 0,
    accessible: false,
    hours: 1,
  });
  const [error, setError] = useState("");
  const [distance, setDistance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [pickupSuggestions, setPickupSuggestions] = useState<string[]>([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState<string[]>([]);

  const debouncedPickup = useDebounce(async (query: string) => {
    setPickupSuggestions(await fetchORSAutocomplete(query));
  }, 300);
  const debouncedDropoff = useDebounce(async (query: string) => {
    setDropoffSuggestions(await fetchORSAutocomplete(query));
  }, 300);

  const serviceTypes = [
    "To Airport",
    "From Airport",
    "Place to Place",
    "Hour Wise",
    "Special Service",
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const incrementValue = (field: string) => {
    setFormData((prev) => {
      if (typeof prev[field as keyof typeof prev] === "number") {
        return {
          ...prev,
          [field]: (prev[field as keyof typeof prev] as number) + 1,
        };
      }
      return prev;
    });
  };

  const decrementValue = (field: string) => {
    setFormData((prev) => {
      if (typeof prev[field as keyof typeof prev] === "number") {
        return {
          ...prev,
          [field]: Math.max(
            0,
            (prev[field as keyof typeof prev] as number) - 1
          ),
        };
      }
      return prev;
    });
  };

  // Helper to get today's date in yyyy-mm-dd format
  const getToday = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // Validate date and time
      if (!formData.pickupDate || !formData.pickupTime) {
        setError("Please select both date and time.");
        setLoading(false);
        return;
      }
      const now = new Date();
      const selected = new Date(
        `${formData.pickupDate}T${formData.pickupTime}`
      );
      if (selected < now) {
        setError("Please select a future date and time.");
        setLoading(false);
        return;
      }
      // Geocode addresses
      const [pickupLng, pickupLat] = await geocodeAddress(
        formData.pickupLocation
      );
      const [dropoffLng, dropoffLat] = await geocodeAddress(
        formData.dropoffLocation
      );
      // Try Directions API, fallback to /nearest if needed
      const distData = await getDistanceWithFallback(
        [pickupLng, pickupLat],
        [dropoffLng, dropoffLat]
      );
      setDistance(distData.distance_meters);
      // Redirect to car selection with all form data and distance as query params
      const params = new URLSearchParams({
        ...Object.fromEntries(
          Object.entries(formData).map(([k, v]) => [k, String(v)])
        ),
        distance: String(distData.distance_meters),
        duration: String(distData.duration_seconds),
      });
      router.push(`/booking/select-car?${params.toString()}`);
    } catch (err: any) {
      setError(err.message || "Error calculating distance.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-4">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-black mb-2">
                Book Your Ride
              </h2>
              <p className="text-gray-600 text-sm">
                Quick booking for your next journey
              </p>
            </div>
            <form
              className="space-y-4"
              onSubmit={handleSubmit}
              autoComplete="off">
              {error && (
                <div className="text-red-600 text-sm mb-2">{error}</div>
              )}
              {loading && (
                <div className="text-center py-4">
                  <p>Calculating distance...</p>
                </div>
              )}
              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Service Type
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) =>
                    handleInputChange("serviceType", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-sm">
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.pickupDate}
                    min={getToday()}
                    onChange={(e) =>
                      handleInputChange("pickupDate", e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    value={formData.pickupTime}
                    onChange={(e) =>
                      handleInputChange("pickupTime", e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-sm"
                  />
                </div>
              </div>
              {/* Locations */}
              {/* Pick-Up Location (with autocomplete) */}
              <div className="relative">
                <label className="block text-sm font-medium text-black mb-1">
                  {formData.serviceType === "From Airport"
                    ? "Airport"
                    : "Pick-Up Location"}
                </label>
                <input
                  type="text"
                  placeholder={
                    formData.serviceType === "From Airport"
                      ? "Airport"
                      : "Pick-up location"
                  }
                  value={formData.pickupLocation}
                  onChange={(e) => {
                    handleInputChange("pickupLocation", e.target.value);
                    debouncedPickup(e.target.value);
                  }}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-sm"
                  autoComplete="off"
                />
                {pickupSuggestions.length > 0 && (
                  <ul className="absolute z-10 bg-white border border-gray-200 w-full mt-1 rounded shadow max-h-40 overflow-y-auto">
                    {pickupSuggestions.map((suggestion, idx) => (
                      <li
                        key={idx}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => {
                          handleInputChange("pickupLocation", suggestion);
                          setPickupSuggestions([]);
                        }}>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Drop-Off Location (with autocomplete) */}
              <div className="relative">
                <label className="block text-sm font-medium text-black mb-1">
                  {formData.serviceType === "To Airport"
                    ? "Airport"
                    : "Drop-Off Location"}
                </label>
                <input
                  type="text"
                  placeholder={
                    formData.serviceType === "To Airport"
                      ? "Airport"
                      : "Drop-off location"
                  }
                  value={formData.dropoffLocation}
                  onChange={(e) => {
                    handleInputChange("dropoffLocation", e.target.value);
                    debouncedDropoff(e.target.value);
                  }}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-sm"
                  autoComplete="off"
                />
                {dropoffSuggestions.length > 0 && (
                  <ul className="absolute z-10 bg-white border border-gray-200 w-full mt-1 rounded shadow max-h-40 overflow-y-auto">
                    {dropoffSuggestions.map((suggestion, idx) => (
                      <li
                        key={idx}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => {
                          handleInputChange("dropoffLocation", suggestion);
                          setDropoffSuggestions([]);
                        }}>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Hours field for Hour Wise service */}
              {formData.serviceType === "Hour Wise" && (
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Hours
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={formData.hours}
                    onChange={(e) =>
                      handleInputChange("hours", Number(e.target.value))
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-sm"
                  />
                </div>
              )}
              {/* Passengers and Luggage */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Passengers
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={formData.passengers}
                    onChange={(e) =>
                      handleInputChange("passengers", Number(e.target.value))
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Luggage
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={formData.luggage}
                    onChange={(e) =>
                      handleInputChange("luggage", Number(e.target.value))
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-sm"
                  />
                </div>
              </div>
              {/* Accessible Option */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="accessible"
                  checked={formData.accessible}
                  onChange={(e) =>
                    handleInputChange("accessible", e.target.checked)
                  }
                  className="w-4 h-4 text-[#B31942] focus:ring-[#B31942] border-gray-300 rounded"
                />
                <label htmlFor="accessible" className="text-gray-700 text-sm">
                  Accessible Vehicle
                </label>
              </div>
              {/* Submit Button */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="btn-primary text-base px-6 py-2 w-full md:w-auto">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
