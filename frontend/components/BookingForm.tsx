'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Luggage, Plus, Minus } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    serviceType: 'From Airport',
    pickupDate: '',
    pickupTime: '',
    pickupLocation: '',
    dropoffLocation: '',
    passengers: 1,
    luggage: 0,
    accessible: false
  });

  const serviceTypes = [
    'From Airport',
    'To Airport', 
    'Point to Point',
    'Hourly Service',
    'Wedding Service',
    'Corporate Service'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const incrementValue = (field: string) => {
    setFormData(prev => ({ ...prev, [field]: prev[field as keyof typeof prev] + 1 }));
  };

  const decrementValue = (field: string) => {
    setFormData(prev => ({ 
      ...prev, 
      [field]: Math.max(0, (prev[field as keyof typeof prev] as number) - 1) 
    }));
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Book Your Luxury Ride
              </h2>
              <p className="text-gray-600 text-lg">
                Select your preferences and we'll provide you with the perfect vehicle
              </p>
            </div>

            <form className="space-y-8">
              {/* Service Type */}
              <div>
                <label className="block text-lg font-semibold text-black mb-3">
                  Select Service Type
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => handleInputChange('serviceType', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                >
                  {serviceTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-black mb-3">
                    Pick-Up Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      value={formData.pickupDate}
                      onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-black mb-3">
                    Pick-Up Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="time"
                      value={formData.pickupTime}
                      onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-black mb-3">
                    Pick-Up Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Your pick-up location"
                      value={formData.pickupLocation}
                      onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                    />
                  </div>
                  <button 
                    type="button"
                    className="mt-2 text-[#B31942] font-medium hover:text-black transition-colors"
                  >
                    + Add Stop
                  </button>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-black mb-3">
                    Drop-Off Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Your drop-off location"
                      value={formData.dropoffLocation}
                      onChange={(e) => handleInputChange('dropoffLocation', e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Passengers and Luggage */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-black mb-3">
                    Number of Passengers
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={() => decrementValue('passengers')}
                      className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <div className="flex items-center space-x-2 bg-gray-100 px-4 py-3 rounded-lg">
                      <Users className="w-5 h-5 text-gray-600" />
                      <span className="text-xl font-semibold">{formData.passengers}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => incrementValue('passengers')}
                      className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-black mb-3">
                    Luggage Count
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={() => decrementValue('luggage')}
                      className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <div className="flex items-center space-x-2 bg-gray-100 px-4 py-3 rounded-lg">
                      <Luggage className="w-5 h-5 text-gray-600" />
                      <span className="text-xl font-semibold">{formData.luggage}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => incrementValue('luggage')}
                      className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Options */}
              <div className="space-y-4">
                <button 
                  type="button"
                  className="text-[#B31942] font-medium hover:text-black transition-colors"
                >
                  + Add Child Seat
                </button>
                
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="accessible"
                    checked={formData.accessible}
                    onChange={(e) => handleInputChange('accessible', e.target.checked)}
                    className="w-5 h-5 text-[#B31942] focus:ring-[#B31942] border-gray-300 rounded"
                  />
                  <label htmlFor="accessible" className="text-gray-700 font-medium">
                    Accessible Vehicle Required
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="btn-primary text-xl px-12 py-4 w-full md:w-auto"
                >
                  Select Vehicle
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;