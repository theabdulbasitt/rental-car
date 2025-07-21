"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownCloseTimeout = useRef<NodeJS.Timeout | null>(null);

  // SEO-friendly main nav titles
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Rides", dropdown: "services" },
    { title: "Airports", dropdown: "airports" },
    { title: "Areas", dropdown: "areas" },
    { title: "Fleet", dropdown: "fleet" },
    { title: "About", dropdown: "company" },
    { title: "Contact", href: "/contact" },
  ];

  // SEO-friendly dropdowns (shuffled order)
  const servicesMenu: { name: string; href: string }[] = [
    { name: "Point to Point Limo Service", href: "/services/point-to-point" },
    { name: "Airport Transportation", href: "/services/airport-limo" },
    {
      name: "Van or Exclusive Shuttles Service",
      href: "/services/van-shuttle",
    },
    { name: "Hourly Limo Service", href: "/services/hourly-limo" },
    { name: "Corporate Transportaation Service", href: "/services/corporate" },
    { name: "City Tour", href: "/services/city-tour" },
    { name: "Group Transportation", href: "/services/group-transportation" },
    { name: "Private School Bus Service", href: "/services/school-transport" },
    { name: "Bachelor/ette Party Limo Service", href: "/services/party-limo" },
    { name: "Wedding Special", href: "/services/wedding-prom" },
    { name: "Bus Charter | Rental", href: "/services/bus-charter" },
    { name: "Exotic Car Rental", href: "/services/exotic-car" },
  ];

  const airportsMenu: { name: string; href: string }[] = [
    { name: "BWI Airport", href: "/airports/bwi" },
    { name: "DCA Airport", href: "/airports/dca" },
    { name: "Dulles Airport", href: "/airports/iad" },
    { name: "Philly Airport", href: "/airports/phl" },
  ];

  const serviceAreasMenu: { name: string; href: string }[] = [
    { name: "Washington DC", href: "/service-areas/washington-dc" },
    { name: "Baltimore", href: "/service-areas/baltimore" },
    { name: "Columbia", href: "/service-areas/columbia" },
    { name: "Frederick", href: "/service-areas/frederick" },
    { name: "Silver Spring", href: "/service-areas/silver-spring" },
    { name: "Towson", href: "/service-areas/towson" },
  ];

  const fleetMenu: { name: string; href: string }[] = [
    { name: "Executive Sedan", href: "/fleet/sedans" },
    { name: "Eco Urban Sedan", href: "/fleet/sedans" },
    { name: "Family Minivan", href: "/fleet/minivans" },
    { name: "Premium Full-Size SUV", href: "/fleet/suvs" },
    { name: "Elite S-550 Sedan", href: "/fleet/sedans" },
    { name: "14-Passenger Executive Van", href: "/fleet/vans" },
  ];

  const companyMenu: { name: string; href: string }[] = [
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a
              href="tel:+14438006300"
              className="flex items-center hover:text-[#B31942] transition-colors">
              <Phone size={16} className="mr-2" />
              Call Now: 1+(443) 800-6300
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Follow Us:</span>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-[#B31942] rounded-full flex items-center justify-center text-xs">
                f
              </div>
              <div className="w-6 h-6 bg-[#B31942] rounded-full flex items-center justify-center text-xs">
                t
              </div>
              <div className="w-6 h-6 bg-[#B31942] rounded-full flex items-center justify-center text-xs">
                i
              </div>
              <div className="w-6 h-6 bg-[#B31942] rounded-full flex items-center justify-center text-xs">
                in
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">RNH</span>
              </div>
              <div className="ml-3 hidden md:block">
                <h1 className="text-2xl font-bold text-black">
                  RNH Transportation
                </h1>
                <p className="text-sm text-gray-600">
                  Luxury Black Car Service
                </p>
              </div>
            </Link>

            {/* Desktop Navigation - SEO friendly, professional spacing */}
            <nav className="hidden lg:flex items-center">
              <div className="ml-8" />
              {navItems.map((item, idx) => (
                <div
                  key={item.title}
                  className={
                    idx === 0
                      ? "mr-4"
                      : idx === navItems.length - 1
                      ? "ml-4 mr-8"
                      : "mx-3"
                  }
                  onMouseEnter={() => {
                    if (dropdownCloseTimeout.current) {
                      clearTimeout(dropdownCloseTimeout.current);
                    }
                    setActiveDropdown(item.dropdown ?? null);
                  }}
                  onMouseLeave={() => {
                    dropdownCloseTimeout.current = setTimeout(() => {
                      setActiveDropdown(null);
                    }, 150);
                  }}
                  style={{ display: "inline-block", position: "relative" }}>
                  {item.dropdown ? (
                    <>
                      <button className="flex items-center text-black hover:text-[#B31942] font-medium transition-colors px-2 py-1">
                        {item.title} <ChevronDown size={16} className="ml-1" />
                      </button>
                      {activeDropdown === item.dropdown && (
                        <div
                          className={`absolute top-full left-0 mt-2 ${
                            item.dropdown === "airports" ? "w-96" : "w-64"
                          } bg-white shadow-xl rounded-lg py-2 z-50`}
                          onMouseEnter={() => {
                            if (dropdownCloseTimeout.current) {
                              clearTimeout(dropdownCloseTimeout.current);
                            }
                            setActiveDropdown(item.dropdown ?? null);
                          }}
                          onMouseLeave={() => {
                            dropdownCloseTimeout.current = setTimeout(() => {
                              setActiveDropdown(null);
                            }, 150);
                          }}>
                          {(item.dropdown === "services"
                            ? servicesMenu
                            : item.dropdown === "airports"
                            ? airportsMenu
                            : item.dropdown === "areas"
                            ? serviceAreasMenu
                            : item.dropdown === "fleet"
                            ? fleetMenu
                            : item.dropdown === "company"
                            ? companyMenu
                            : []
                          ).map((drop: { name: string; href: string }) => (
                            <Link
                              key={drop.href}
                              href={drop.href!}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#B31942] transition-colors whitespace-normal">
                              {drop.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className="text-black hover:text-[#B31942] font-medium transition-colors px-2 py-1">
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Reservation Button */}
            <Link href="/booking" className="hidden lg:block btn-primary">
              RESERVATION
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - SEO friendly order and titles */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <div className="container-custom py-4 space-y-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.title}>
                    <p className="font-medium text-gray-800 mb-2">
                      {item.title}
                    </p>
                    <div className="pl-4 space-y-2">
                      {(item.dropdown === "services"
                        ? servicesMenu
                        : item.dropdown === "airports"
                        ? airportsMenu
                        : item.dropdown === "areas"
                        ? serviceAreasMenu
                        : item.dropdown === "fleet"
                        ? fleetMenu
                        : item.dropdown === "company"
                        ? companyMenu
                        : []
                      ).map((drop: { name: string; href: string }) => (
                        <Link
                          key={drop.href}
                          href={drop.href!}
                          className="block text-sm text-gray-600 hover:text-[#B31942]">
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href!}
                    className="block text-black hover:text-[#B31942] font-medium">
                    {item.title}
                  </Link>
                )
              )}
              <Link href="/booking" className="block btn-primary inline-block">
                RESERVATION
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
