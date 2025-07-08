import { MapPin, ExternalLink } from 'lucide-react';

const ThingsToSeeAndDo = () => {
  const attractions = [
    {
      name: "Lincoln Memorial",
      image: "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "The Great Emancipator sits on his marble throne at the western end of the National Mall and has been the site of many historic moments throughout the nation's history."
    },
    {
      name: "United States Holocaust Memorial Museum",
      image: "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "This museum's mission is to inspire citizens and leaders worldwide to confront hatred, prevent genocide, and promote human dignity."
    },
    {
      name: "Smithsonian Museum of Natural History",
      image: "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "This museum holds the world's most extensive collection of natural history specimens and human artifacts."
    },
    {
      name: "National Air and Space Museum",
      image: "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "The Smithsonian National Air and Space Museum maintains the largest collection of historic air and spacecraft in the world."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Things to See & Do in the <span className="text-[#B31942]">Baltimore-Washington</span> region
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the rich history and culture of our nation's capital with our luxury transportation services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {attractions.map((attraction, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {attraction.name.toUpperCase()}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {attraction.description}
                </p>
                <div className="mt-4 flex items-center text-[#B31942] text-sm font-medium">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Washington, DC</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-black text-white hover:bg-gray-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThingsToSeeAndDo;