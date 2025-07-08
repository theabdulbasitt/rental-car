import { Phone, Clock } from 'lucide-react';

const LastMinuteReservation = () => {
  return (
    <section className="bg-black py-12">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Logo and Text */}
          <div className="flex items-center mb-6 lg:mb-0">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mr-6">
              <span className="text-black font-bold text-2xl">RNH</span>
            </div>
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Last-Minute Reservation?
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl">
                Our top priority is transporting you to your destination, whether you book a reservation a month in advance or at the last minute. Are you searching for car service near me?
              </p>
            </div>
          </div>

          {/* Call Button */}
          <div className="flex-shrink-0">
            <a 
              href="tel:+14438006300"
              className="bg-[#FFD700] text-black hover:bg-yellow-400 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center text-lg"
            >
              <Phone className="mr-2" size={20} />
              Call Us (443) 800-6300
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastMinuteReservation;