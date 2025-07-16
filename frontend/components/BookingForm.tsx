"use client";

import { useState } from "react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Validate date and time
    if (!formData.pickupDate || !formData.pickupTime) {
      setError("Please select both date and time.");
      return;
    }
    const now = new Date();
    const selected = new Date(`${formData.pickupDate}T${formData.pickupTime}`);
    if (selected < now) {
      setError("Please select a future date and time.");
      return;
    }
    // Redirect to car selection with all form data as query params
    const params = new URLSearchParams({
      ...Object.fromEntries(
        Object.entries(formData).map(([k, v]) => [k, String(v)])
      ),
    });
    router.push(`/booking/select-car?${params.toString()}`);
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && (
                <div className="text-red-600 text-sm mb-2">{error}</div>
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
              {/* Pick-Up Location (label changes for From Airport) */}
              <div>
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
                  onChange={(e) =>
                    handleInputChange("pickupLocation", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-sm"
                />
              </div>
              {/* Drop-Off Location (label changes for To Airport) */}
              <div>
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
                  onChange={(e) =>
                    handleInputChange("dropoffLocation", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-sm"
                />
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
