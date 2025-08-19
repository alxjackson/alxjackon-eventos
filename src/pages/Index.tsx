import { useState, useEffect } from "react";
import { WelcomeModal } from "@/components/WelcomeModal";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ArtistsSection } from "@/components/ArtistsSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { LoadingScreen } from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <WelcomeModal />
      <Header />
      <HeroSection />
      <ServicesSection />
      <ArtistsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
