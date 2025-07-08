'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
    setPhone('');
  };

  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury limousine interior with professional passengers"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          </div>

          {/* Right side - Newsletter Form */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Sign Up to get <span className="text-[#B31942]">Exclusive Offers</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Be the first to know about special promotions, new services, and exclusive deals. Join our VIP list for priority booking and member-only benefits.
              </p>

              {isSubscribed ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-green-800 font-medium">Thank you for subscribing! Check your email for exclusive offers.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B31942] focus:border-transparent text-lg"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                  >
                    Subscribe for Exclusive Offers
                  </button>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    By providing your number and email address, you consent to and are opting-in to receive text messaging and emails from RnH Transportation and/or its affiliates in connection with your request. Up to 24 messages per month. Consent is not required to buy goods or services. Limit: One offer per cell number. Offer not valid with any other coupons & only good while supplies last. Message and data rates apply. By clicking SUBMIT, you are agreeing to our <span className="text-[#B31942]">Terms & Conditions</span> and <span className="text-[#B31942]">Privacy Policy</span>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;