import { Users, Luggage, Wifi, Music, Car } from 'lucide-react';
import Link from 'next/link';

export default function OurFleetPage() {
  const vehicles = [
    {
      name: "Luxury Mercedes S550",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      passengers: 3,
      luggage: 3,
      features: ["Wi-Fi", "Premium Sound", "Climate Control", "Leather Interior"],
      description: "Executive luxury sedan perfect for business travel and airport transfers."
    },
    {
      name: "Exclusive Sedan (Lincoln Town Car)",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      passengers: 3,
      luggage: 3,
      features: ["Wi-Fi", "Premium Sound", "Climate Control"],
      description: "Classic luxury sedan offering comfort and style for any occasion."
    },
    {
      name: "Exclusive SUV",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
      passengers: 6,
      luggage: 6,
      features: ["Wi-Fi", "Premium Sound", "Climate Control", "Extra Space"],
      description: "Spacious luxury SUV ideal for families and group transportation."
    },
    {
      name: "Sprinter Van",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800",
      passengers: 14,
      luggage: 12,
      features: ["Wi-Fi", "Premium Sound", "Climate Control", "Standing Room"],
      description: "Premium van service for medium-sized groups and events."
    },
    {
      name: "Stretch Limousine",
      image: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800",
      passengers: 10,
      luggage: 6,
      features: ["Wi-Fi", "Premium Sound", "Bar", "LED Lighting", "Privacy Partition"],
      description: "Classic stretch limousine perfect for weddings, proms, and special events."
    },
    {
      name: "Party Bus",
      image: "https://images.pexels.com/photos/1488485/pexels-photo-1488485.jpeg?auto=compress&cs=tinysrgb&w=800",
      passengers: 20,
      luggage: 10,
      features: ["Wi-Fi", "Premium Sound System", "LED Lighting", "Dance Floor", "Bar"],
      description: "Ultimate party vehicle for celebrations and group entertainment."
    },
    {
      name: "Luxury Mini Coach",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800",
      passengers: 30,
      luggage: 24,
      features: ["Wi-Fi", "Premium Sound", "Climate Control", "Reclining Seats"],
      description: "Comfortable coach service for medium-sized groups and tours."
    },
    {
      name: "Motor Coach",
      image: "https://images.pexels.com/photos/1488485/pexels-photo-1488485.jpeg?auto=compress&cs=tinysrgb&w=800",
      passengers: 50,
      luggage: 56,
      features: ["Wi-Fi", "Premium Sound", "Restroom", "TV", "Climate Control"],
      description: "Full-size luxury coach for large groups and long-distance travel."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        ></div>
        <div className="relative z-10 container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our Luxury <span className="text-[#B31942]">Fleet</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Premium vehicles equipped with modern amenities for every occasion
          </p>
          <div className="mt-8">
            <a href="tel:+14438006300" className="btn-primary text-xl">
              Call (443) 800-6300
            </a>
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Modern Fleet for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our premium fleet of luxury vehicles, including executive sedans, SUVs, limousines, and mini buses, is designed to cater to any occasion, providing unparalleled comfort, advanced amenities, and a seamless, stylish travel experience with the reliability and sophistication you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {vehicles.map((vehicle, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Car className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-black mb-4">
                    {vehicle.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {vehicle.description}
                  </p>
                  
                  {/* Capacity Info */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="flex items-center">
                      <Users className="w-6 h-6 text-[#B31942] mr-3" />
                      <div>
                        <span className="golden-accent font-bold text-lg">{vehicle.passengers}</span>
                        <p className="text-sm text-gray-600">Passengers</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Luggage className="w-6 h-6 text-[#B31942] mr-3" />
                      <div>
                        <span className="golden-accent font-bold text-lg">{vehicle.luggage}</span>
                        <p className="text-sm text-gray-600">Luggage</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-bold text-black mb-3">Premium Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Link href="/booking" className="btn-primary flex-1 text-center">
                      Reserve Now
                    </Link>
                    <a href="tel:+14438006300" className="btn-secondary flex-1 text-center">
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Premium Amenities in Every Vehicle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our vehicles come equipped with luxury features to ensure your comfort and convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg card-hover">
              <Wifi className="w-12 h-12 text-[#B31942] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Complimentary Wi-Fi</h3>
              <p className="text-gray-600">Stay connected with high-speed internet in all vehicles</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg card-hover">
              <Music className="w-12 h-12 text-[#B31942] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Premium Sound</h3>
              <p className="text-gray-600">High-quality audio systems for your entertainment</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg card-hover">
              <Car className="w-12 h-12 text-[#B31942] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Climate Control</h3>
              <p className="text-gray-600">Individual climate control for optimal comfort</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg card-hover">
              <Users className="w-12 h-12 text-[#B31942] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Professional Service</h3>
              <p className="text-gray-600">Experienced chauffeurs trained in hospitality</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Our Fleet?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Choose from our diverse selection of luxury vehicles and book your premium transportation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/booking" className="btn-primary text-xl">
              Book Online Now
            </Link>
            <a href="tel:+14438006300" className="bg-white text-black hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-xl">
              Call (443) 800-6300
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}