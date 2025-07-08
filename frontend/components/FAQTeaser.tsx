import { HelpCircle, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const FAQTeaser = () => {
  const faqs = [
    {
      question: "How do I make a booking?",
      answer: "You can book online through our reservation system or call us directly at (443) 800-6300."
    },
    {
      question: "What vehicles do you offer?",
      answer: "We offer executive sedans, SUVs, limousines, party buses, sprinter vans, and motor coaches."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require 4 hours notice for standard vehicles and 72 hours for minibus/coach cancellations."
    },
    {
      question: "Are your drivers professionally trained?",
      answer: "Yes, all our chauffeurs are professionally trained, licensed, and background checked."
    },
    {
      question: "Do you provide special amenities?",
      answer: "Our vehicles come equipped with Wi-Fi, premium sound systems, and luxury amenities."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick answers to common questions about our luxury transportation services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm card-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-4">
                <HelpCircle className="w-6 h-6 text-[#B31942] mr-4 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-black">
                  {faq.question}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed ml-10">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/faq" 
            className="btn-primary inline-flex items-center"
          >
            View More FAQ
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQTeaser;