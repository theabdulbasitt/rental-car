"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const EXTRA_CHARGES = [
  { label: "Mingle", value: 30, key: "mingle" },
  { label: "Pet", value: 25, key: "pet" },
  { label: "Snow", value: 10, key: "snow", perKm: true },
  { label: "Child Seat (Infant)", value: 20, key: "infant" },
  { label: "Child Seat (Toddler)", value: 20, key: "toddler" },
];
const TIP_OPTIONS = [10, 15, 20, 30, 40, 50];
const BASE_FARE_PER_KM = 2;
const LATE_NIGHT_START = 0; // 12am
const LATE_NIGHT_END = 5; // 5am
const LATE_NIGHT_CHARGE = 20; // Flat fee

type ExtrasState = {
  [key: string]: boolean;
  mingle: boolean;
  pet: boolean;
  snow: boolean;
  infant: boolean;
  toddler: boolean;
};

export default function FinalizeBookingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [extras, setExtras] = useState<ExtrasState>({
    mingle: false,
    pet: false,
    snow: false,
    infant: false,
    toddler: false,
  });
  const [tip, setTip] = useState(10);
  const [distance, setDistance] = useState(0);
  const [lateNight, setLateNight] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0);
  const [error, setError] = useState("");

  // Collect all booking data from query params
  useEffect(() => {
    if (!searchParams) return;
    const dist = parseFloat(searchParams.get("distance") || "0");
    setDistance(dist);
    // Check for late night
    const pickupTime = searchParams.get("pickupTime") || "";
    if (pickupTime) {
      const hour = parseInt(pickupTime.split(":")[0], 10);
      if (hour >= LATE_NIGHT_START && hour < LATE_NIGHT_END) setLateNight(true);
    }
  }, [searchParams]);

  useEffect(() => {
    // Calculate grand total
    let total = distance * BASE_FARE_PER_KM;
    EXTRA_CHARGES.forEach((item) => {
      if (extras[item.key]) {
        if (item.perKm) {
          total += item.value * distance;
        } else {
          total += item.value;
        }
      }
    });
    if (lateNight) total += LATE_NIGHT_CHARGE;
    total += tip;
    setGrandTotal(total);
  }, [distance, extras, tip, lateNight]);

  const handlePersonalChange = (field: string, value: string) => {
    setPersonal((prev) => ({ ...prev, [field]: value }));
  };
  const handleExtrasChange = (key: string, checked: boolean) => {
    setExtras((prev) => ({ ...prev, [key]: checked }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const validatePhone = (phone: string) => {
    // Accepts numbers, spaces, dashes, parentheses, and must be at least 7 digits
    return /^[0-9\s\-()+]{7,}$/.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(personal.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!validatePhone(personal.phone)) {
      setError("Please enter a valid phone number.");
      return;
    }
    try {
      const res = await fetch("/api/sendBookingEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: personal.email,
          name: personal.name,
          phone: personal.phone,
          comments: personal.comments,
          distance,
          extras,
          tip,
          lateNight,
          grandTotal,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Booking submitted! Confirmation email sent.");
        // Optionally redirect or show confirmation
      } else {
        setError(data.error || "Failed to send booking email.");
      }
    } catch (err: any) {
      setError("An error occurred while sending the booking email.");
    }
  };

  return (
    <section className="py-8">
      <div className="container-custom max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Finalize Your Booking
        </h2>
        <div className="text-center text-lg mb-4 text-gray-700">
          <b>Distance:</b> {distance} km
        </div>
        {error && <div className="text-red-600 text-center mb-2">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Personal Details</h3>
            <input
              type="text"
              placeholder="Name"
              value={personal.name}
              onChange={(e) => handlePersonalChange("name", e.target.value)}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={personal.email}
              onChange={(e) => handlePersonalChange("email", e.target.value)}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={personal.phone}
              onChange={(e) => handlePersonalChange("phone", e.target.value)}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <textarea
              placeholder="Any comments?"
              value={personal.comments}
              onChange={(e) => handlePersonalChange("comments", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Extras & Charges</h3>
            {EXTRA_CHARGES.map((item) => (
              <div key={item.key} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={item.key}
                  checked={extras[item.key]}
                  onChange={(e) =>
                    handleExtrasChange(item.key, e.target.checked)
                  }
                  className="mr-2"
                />
                <label htmlFor={item.key}>
                  {item.label}{" "}
                  {item.perKm ? `($${item.value}/km)` : `($${item.value})`}
                </label>
              </div>
            ))}
            {lateNight && (
              <div className="text-red-600 font-medium mt-2">
                Late Night Charges: ${LATE_NIGHT_CHARGE}
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tip</h3>
            <select
              value={tip}
              onChange={(e) => setTip(Number(e.target.value))}
              className="w-full p-2 border rounded">
              {TIP_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  ${opt}
                </option>
              ))}
            </select>
          </div>
          <div className="text-xl font-bold text-center mt-4">
            Grand Total: ${grandTotal.toFixed(2)}
          </div>
          <button type="submit" className="btn-primary w-full py-2 mt-4">
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
}
