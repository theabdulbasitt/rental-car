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

const ServicesOverview = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Point-to-Point & Hourly",
      description: "Luxury transportation for any destination with flexible hourly options",
      href: "/services/point-to-point"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Airport Transfers",
      description: "Professional airport pickup and drop-off service with flight monitoring",
      href: "/services/airport-limo"
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Exclusive Shuttle",
      description: "Premium shuttle service for events, hotels, and corporate needs",
      href: "/services/exclusive-shuttle"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Sedan & Car Service",
      description: "Executive sedan service for business and personal transportation",
      href: "/services/sedan-car"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Van Service",
      description: "Spacious van transportation for groups and luggage",
      href: "/services/van-service"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Corporate Service",
      description: "Professional corporate transportation solutions",
      href: "/services/corporate"
    },
    {
      icon: <Wine className="w-8 h-8" />,
      title: "Wine & City Tour",
      description: "Luxury wine tours and city sightseeing experiences",
      href: "/services/wine-city-tour"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Washington DC Tour",
      description: "Comprehensive sightseeing tours of the nation's capital",
      href: "/services/dc-tours"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "School Transportation",
      description: "Safe and reliable transportation for students",
      href: "/services/school-transport"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Limousine Rental",
      description: "Luxury limousine service for special occasions",
      href: "/services/limousine-rental"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Party Bus Rental",
      description: "Fun and safe party bus service for celebrations",
      href: "/services/party-bus"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Motor Coaches",
      description: "Large group transportation with luxury motor coaches",
      href: "/services/motor-coaches"
    }
  ];

  const tourLocations = [
    "Lincoln Memorial",
    "Holocaust Museum", 
    "Natural History Museum",
    "Air & Space Museum"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Services Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional luxury transportation services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl card-hover fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#B31942] rounded-lg flex items-center justify-center text-white group-hover:bg-black transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black ml-4 group-hover:text-[#B31942] transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link 
                href={service.href} 
                className="text-[#B31942] font-semibold hover:text-black transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* Tour Locations */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-black mb-4">
              Popular DC Tour Destinations
            </h3>
            <p className="text-gray-600 text-lg">
              Discover the nation's capital with our expert guided tours
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {tourLocations.map((location, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <MapPin className="w-6 h-6 text-[#B31942] mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-800">{location}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/services/dc-tours" className="btn-primary">
              View More Destinations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;