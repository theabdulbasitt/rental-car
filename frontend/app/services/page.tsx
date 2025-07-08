import { 
  Car, 
  Plane, 
  Bus, 
  Building, 
  GraduationCap, 
  Heart,
  Wine,
  MapPin,
  Users,
  Crown,
  Music,
  Truck
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: <Car className="w-12 h-12" />,
      title: "Point-to-Point & Hourly",
      description: "Luxury transportation for any destination with flexible hourly options. Perfect for business meetings, special events, or personal travel needs.",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/services/point-to-point"
    },
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Airport Limo Service",
      description: "Professional airport pickup and drop-off service with flight monitoring, meet & greet service, and global coverage in over 750 cities.",
      image: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/services/airport-limo"
    },
    {
      icon: <Bus className="w-12 h-12" />,
      title: "Exclusive Shuttle",
      description: "Premium shuttle service for events, hotels, and corporate needs. Reliable group transportation with luxury amenities.",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/services/exclusive-shuttle"
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Sedan & Car Service",
      description: "Executive sedan service for business and personal transportation. Professional chauffeurs and premium vehicles.",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/services/sedan-car"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Van Service",
      description: "Spacious van transportation for groups and luggage. Perfect for family trips, group events, and airport transfers.",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/services/van-service"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Corporate Service",
      description: "Professional corporate transportation solutions with real-time updates, custom itineraries, and executive-level service.",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/services/corporate"
    },
    {
      icon: <Wine className="w-12 h-12" />,
      title: "Wine & City Tour",
      description: "Luxury wine tours and city sightseeing experiences. Discover local vineyards and attractions in comfort and style.",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/services/wine-city-tour"
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Washington DC Tours",
      description: "Comprehensive sightseeing tours of the nation's capital. Visit iconic monuments, museums, and historical landmarks.",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/services/dc-tours"
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Private School Transportation",
      description: "Safe and reliable transportation for students. Professional drivers with background checks and safety training.",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/services/school-transport"
    },
    {
      icon: <Crown className="w-12 h-12" />,
      title: "Limousine Rental",
      description: "Luxury limousine service for weddings, birthdays, proms, anniversaries, and special occasions. Make every moment memorable.",
      image: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/services/limousine-rental"
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: "Party Bus Rental",
      description: "Fun and safe party bus service for celebrations, bachelor/bachelorette parties, and group entertainment.",
      image: "https://images.pexels.com/photos/1488485/pexels-photo-1488485.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/services/party-bus"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Motor Coaches",
      description: "Large group transportation with luxury motor coaches. Perfect for corporate events, tours, and group travel.",
      image: "https://images.pexels.com/photos/1488485/pexels-photo-1488485.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/services/motor-coaches"
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
            Our Premium <span className="text-[#B31942]">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Professional luxury transportation solutions for every occasion
          </p>
          <div className="mt-8">
            <a href="tel:+14438006300" className="btn-primary text-xl">
              Call (443) 800-6300
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#B31942] rounded-lg flex items-center justify-center text-white mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-black">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={service.href}
                    className="btn-primary w-full inline-block text-center"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book your premium transportation service today and discover why discerning clients choose RNH Transportation for excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/booking" className="btn-primary text-xl">
                Book Online Now
              </Link>
              <a href="tel:+14438006300" className="btn-secondary text-xl">
                Call (443) 800-6300
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}