import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
