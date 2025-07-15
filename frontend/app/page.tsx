import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FleetPreview from "@/components/FleetPreview";
import ServicesOverview from "@/components/ServicesOverview";
import ServiceAreas from "@/components/ServiceAreas";
import FAQTeaser from "@/components/FAQTeaser";
import BookingForm from "@/components/BookingForm";
import NewsletterSignup from "@/components/NewsletterSignup";
import ThingsToSeeAndDo from "@/components/ThingsToSeeAndDo";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <FleetPreview />
      <ServicesOverview />
      <div className="bg-gray-50">
        <BookingForm />
      </div>
      <NewsletterSignup />
      <ThingsToSeeAndDo />
      <ServiceAreas />
      <FAQTeaser />
    </div>
  );
}
