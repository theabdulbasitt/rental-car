import { Phone } from "lucide-react";

interface NeedHelpBookingProps {
  phone?: string;
  bookingUrl?: string;
  className?: string;
}

export default function NeedHelpBooking({
  phone = "+1 (443) 336-3333",
  bookingUrl = "https://www.rnhlimo.com/booking",
  className = "",
}: NeedHelpBookingProps) {
  return (
    <div className={`my-8 ${className}`}>
      <div className="rounded-xl bg-gray-50 border border-gray-200 shadow-sm p-6 flex flex-col items-center max-w-xl mx-auto">
        <h2 className="text-lg font-semibold mb-2 text-gray-900">
          Need Help? For Booking a Ride
        </h2>
        <div className="flex items-center gap-2 mb-4">
          <Phone className="w-5 h-5 text-red-600" />
          <span className="text-xl font-bold text-red-600">{phone}</span>
        </div>
        <a
          href={bookingUrl}
          className="mt-2 inline-block bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md px-6 py-3 transition-colors shadow">
          Online Reservation
        </a>
      </div>
    </div>
  );
}
