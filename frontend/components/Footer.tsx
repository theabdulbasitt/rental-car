import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Point to Point", href: "/services/point-to-point" },
    { name: "Airport Limo Service", href: "/services/airport-limo" },
    { name: "Exclusive Shuttle Service", href: "/services/exclusive-shuttle" },
    { name: "Sedan & Car Services", href: "/services/sedan-car" },
    { name: "Corporate Limo Service", href: "/services/corporate" },
    { name: "Wine & City Tour", href: "/services/wine-city-tour" },
    { name: "Washington D.C Tours", href: "/services/dc-tours" },
    {
      name: "Private School Transportation",
      href: "/services/school-transport",
    },
    { name: "Wedding & Prom Limo", href: "/services/wedding-prom" },
    { name: "Limousine Rental", href: "/services/limousine-rental" },
    { name: "Party Bus Rental", href: "/services/party-bus" },
    { name: "Motor Coaches", href: "/services/motor-coaches" },
  ];

  const serviceAreas = [
    { name: "Baltimore, MD", href: "/service-areas/baltimore" },
    { name: "Columbia, MD", href: "/service-areas/columbia" },
    { name: "Frederick, MD", href: "/service-areas/frederick" },
    { name: "Silver Spring, MD", href: "/service-areas/silver-spring" },
    { name: "Towson, MD", href: "/service-areas/towson" },
    { name: "Washington, DC", href: "/service-areas/washington-dc" },
  ];

  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Fleet", href: "/our-fleet" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Last Minute Reservation Section */}
      <div className="border-b border-gray-800 py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center mb-6 lg:mb-0">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mr-6">
                <span className="text-black font-bold text-2xl">RNH</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Last-Minute Reservation?
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl">
                  Our top priority is transporting you to your destination,
                  whether you book a reservation a month in advance or at the
                  last minute. Are you searching for car service near me?
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href="tel:+14438006300"
                className="bg-[#FFD700] text-black hover:bg-yellow-400 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center text-lg">
                <Phone className="mr-2" size={20} />
                Call Us (443) 800-6300
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Company */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-[#B31942]">
                About Company
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                RnH is committed to delivering outstanding black car services,
                making sure that each journey combines luxury, comfort, and
                professionalism. Whether you require city-to-city transport,
                airport transfers, or dependable shuttle service, we customize
                every ride to suit your specific needs.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-[#B31942] rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:bg-white hover:text-[#B31942] transition-colors">
                  f
                </div>
                <div className="w-8 h-8 bg-[#B31942] rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:bg-white hover:text-[#B31942] transition-colors">
                  X
                </div>
                <div className="w-8 h-8 bg-[#B31942] rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:bg-white hover:text-[#B31942] transition-colors">
                  @
                </div>
                <div className="w-8 h-8 bg-[#B31942] rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:bg-white hover:text-[#B31942] transition-colors">
                  in
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-[#B31942]">
                Service Area
              </h4>
              <ul className="space-y-3">
                {serviceAreas.map((area) => (
                  <li key={area.href}>
                    <Link
                      href={area.href}
                      className="text-gray-300 hover:text-white transition-colors">
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-[#B31942]">
                Services
              </h4>
              <ul className="space-y-3">
                {services.slice(0, 13).map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links & Contact */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-[#B31942]">
                Useful Links
              </h4>
              <ul className="space-y-3 mb-8">
                {usefulLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div>
                <h5 className="text-lg font-bold mb-4 text-white">
                  Get In touch
                </h5>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-300">Maryland, USA</p>
                  <a
                    href="tel:+14438006300"
                    className="text-gray-300 hover:text-[#B31942] transition-colors block">
                    (443) 800-6300
                  </a>
                  <a
                    href="mailto:info@rnhtransportation.com"
                    className="text-gray-300 hover:text-[#B31942] transition-colors block">
                    info@rnhtransportation.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>
                &copy; {currentYear} All Rights Reserved | RnH Transportation
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Designed by</span>
              <span className="text-[#B31942] font-semibold">
                Limo Anywhere
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
