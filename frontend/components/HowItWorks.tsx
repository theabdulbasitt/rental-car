import { Clock, Car, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Clock className="w-12 h-12 text-[#B31942]" />,
      title: "Choose Your Time",
      description: "Select the perfect time that fits your schedule",
      color: "text-[#FFD700]"
    },
    {
      icon: <Car className="w-12 h-12 text-[#B31942]" />,
      title: "SELECT A VEHICLE",
      description: "Pick the luxury car that suits your style and needs",
      color: "text-[#FFD700]"
    },
    {
      icon: <Star className="w-12 h-12 text-[#B31942]" />,
      title: "Ride in Luxury",
      description: "Sit back, relax, and enjoy a first-class experience",
      color: "text-[#FFD700]"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About RNH Transportation
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            RnH is dedicated to providing exceptional black car services, ensuring every journey is a blend of luxury, comfort, and professionalism. Whether you need city-to-city transportation, airport transfers, or reliable shuttles, we tailor each ride to meet your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center fade-in card-hover bg-gray-50 p-8 rounded-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;