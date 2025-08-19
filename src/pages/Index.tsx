import { WelcomeModal } from "@/components/WelcomeModal";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WelcomeModal />
      <Header />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
