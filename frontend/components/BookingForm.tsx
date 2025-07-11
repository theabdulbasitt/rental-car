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

const BookingForm = () => {
  const [formData, setFormData] = useState({
    serviceType: "From Airport",
    pickupDate: "",
    pickupTime: "",
    pickupLocation: "",
    dropoffLocation: "",
    passengers: 1,
    luggage: 0,
    accessible: false,
  });

  const serviceTypes = [
    "From Airport",
    "To Airport",
    "Point to Point",
    "Hourly Service",
    "Wedding Service",
    "Corporate Service",
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
            <form className="space-y-4">
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
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Pick-Up Location
                </label>
                <input
                  type="text"
                  placeholder="Pick-up location"
                  value={formData.pickupLocation}
                  onChange={(e) =>
                    handleInputChange("pickupLocation", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Drop-Off Location
                </label>
                <input
                  type="text"
                  placeholder="Drop-off location"
                  value={formData.dropoffLocation}
                  onChange={(e) =>
                    handleInputChange("dropoffLocation", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-sm"
                />
              </div>
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
