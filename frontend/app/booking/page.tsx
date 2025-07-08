'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Luggage, Plus, Minus, Phone } from 'lucide-react';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    serviceType: 'From Airport',
    pickupDate: '',
    pickupTime: '',
    pickupLocation: '',
    dropoffLocation: '',
    passengers: 1,
    luggage: 0,
    accessible: false,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const serviceTypes = [
    'From Airport',
    'To Airport', 
    'Point to Point',
    'Hourly Service',
    'Wedding Service',
    'Corporate Service',
    'Wine Tour',
    'DC Sightseeing',
    'Party Bus',
    'Limousine Rental'
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/main.jpg')",
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        {/* Call to Action Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#B31942] py-4">
          <div className="container-custom text-center">
            <p className="text-white text-lg font-semibold">
              Have an urgent request? Our team is ready 24/7 at <a href="tel:+16674470512" className="text-white underline hover:opacity-80">+1 667-447-0512</a> to assist you right away.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Online Reservation
                </h2>
                <p className="text-gray-600 text-lg">
                  We encourage both advance and last-minute bookings to ensure your transportation needs are met
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Service Type */}
                <div>
                  <label className="block text-lg font-semibold text-black mb-3">
                    Service Type *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => handleInputChange('serviceType', e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                    required
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
                      Pick-Up Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        value={formData.pickupDate}
                        onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-black mb-3">
                      Pick-Up Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="time"
                        value={formData.pickupTime}
                        onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Locations */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-semibold text-black mb-3">
                      Pick-Up Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Enter your pick-up location"
                        value={formData.pickupLocation}
                        onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-black mb-3">
                      Drop-Off Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Enter your drop-off location"
                        value={formData.dropoffLocation}
                        onChange={(e) => handleInputChange('dropoffLocation', e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Passengers and Luggage */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-black mb-3">
                      Number of Passengers *
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

                {/* Contact Information */}
                <div className="border-t pt-8">
                  <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-black mb-3">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-semibold text-black mb-3">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-lg font-semibold text-black mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-semibold text-black mb-3">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-lg font-semibold text-black mb-3">
                    Special Requests
                  </label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Any special requests or additional information..."
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                  />
                </div>

                {/* Additional Options */}
                <div className="space-y-4">
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
                    Submit Reservation Request
                  </button>
                  <p className="text-gray-600 mt-4">
                    We will contact you within 30 minutes to confirm your reservation
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="section-padding bg-[#B31942]">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prefer to Book by Phone?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Have an urgent request? Our team is ready 24/7 at <a href="tel:+16674470512" className="text-white underline hover:opacity-80">+1 667-447-0512</a> to assist you right away.
          </p>
          <a href="tel:+16674470512" className="bg-white text-[#B31942] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-xl inline-flex items-center">
            <Phone className="mr-2" size={20} />
            Call (667) 447-0512 Now
          </a>
        </div>
      </section>
    </div>
  );
}