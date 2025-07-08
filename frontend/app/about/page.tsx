import { Star, Clock, Shield, Car, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const pillars = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Network",
      description: "Extensive coverage across the DMV region with strategic partnerships"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Fleet",
      description: "Modern luxury vehicles maintained to the highest standards"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Service",
      description: "Exceptional customer service with attention to every detail"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Punctuality",
      description: "On-time performance with real-time tracking and monitoring"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Experience",
      description: "Over two decades of luxury transportation expertise"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Simplicity",
      description: "Easy booking process with transparent pricing and policies"
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
            About <span className="text-[#B31942]">RNH Transportation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Your premier luxury transportation service since 2002
          </p>
          <div className="mt-8">
            <a href="tel:+14438006300" className="btn-primary text-xl">
              Call (443) 800-6300
            </a>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury sedan"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  RNH Transportation was founded in 2002 by Ali Hassnain with a vision to provide exceptional luxury transportation services to the DMV area. For over two decades, we have been the trusted choice for discerning clients who demand excellence.
                </p>
                <p>
                  When our beloved founder passed in 2022, his family continued his legacy of excellence. We have since expanded our services to include BWI & Frederick Shuttle services and private school transportation, always maintaining the high standards that Ali established.
                </p>
                <p>
                  Today, we operate 24/7 with an up-to-date luxury fleet equipped with the latest technology. Our commitment to punctuality, professionalism, and luxury remains unwavering as we continue to serve the Washington DC metropolitan area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Foundation Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six core principles that guide everything we do at RNH Transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-[#B31942] rounded-xl flex items-center justify-center text-white mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                Why Choose RNH Transportation?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#B31942] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">24/7 Availability</h4>
                    <p className="text-gray-600">Round-the-clock service to meet your transportation needs anytime, anywhere.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#B31942] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">Modern Fleet</h4>
                    <p className="text-gray-600">Up-to-date luxury vehicles equipped with the latest technology and amenities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#B31942] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">Professional Chauffeurs</h4>
                    <p className="text-gray-600">Experienced, licensed, and background-checked drivers committed to your safety and comfort.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#B31942] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">Advanced Technology</h4>
                    <p className="text-gray-600">Real-time tracking, flight monitoring, and seamless booking technology.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional chauffeur"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#B31942]">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the RNH Difference
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied clients who trust RNH Transportation for their luxury travel needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/booking" className="bg-white text-[#B31942] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-xl">
              Book Your Ride
            </Link>
            <a href="tel:+14438006300" className="bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-xl">
              Call (443) 800-6300
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}