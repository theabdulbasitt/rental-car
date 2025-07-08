import { MapPin, CheckCircle } from 'lucide-react';

const ServiceAreas = () => {
  const areas = [
    "Washington DC",
    "Baltimore", 
    "Columbia",
    "Silver Spring",
    "Frederick",
    "Towson"
  ];

  const allAreas = [
    "Washington DC", "Arlington VA", "Fairfax VA", "Maryland", 
    "Baltimore MD", "Alexandria VA", "Columbia MD", "Silver Spring MD", 
    "Frederick MD", "Towson MD", "Bethesda MD", "Rockville MD"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve the greater Washington DC metropolitan area and all locations in between
          </p>
        </div>

        {/* Featured Areas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl text-center card-hover fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MapPin className="w-8 h-8 text-[#B31942] mx-auto mb-3 group-hover:text-black transition-colors" />
              <h3 className="font-bold text-black group-hover:text-[#B31942] transition-colors">
                {area}
              </h3>
            </div>
          ))}
        </div>

        {/* Complete Areas List */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-black mb-4">
              Complete Coverage Area
            </h3>
            <p className="text-gray-600 text-lg">
              Professional transportation services throughout the DMV region
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allAreas.map((area, index) => (
              <div 
                key={index}
                className="flex items-center bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-5 h-5 text-[#B31942] mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg mb-6">
              Don't see your location? We service all areas in between our major coverage zones.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="tel:+14438006300" className="btn-primary">
                Call for Coverage Confirmation
              </a>
              <a href="/service-areas" className="btn-secondary">
                View All Service Areas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;