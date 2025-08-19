import { useState, useEffect } from "react";
import { WelcomeModal } from '@/components/WelcomeModal';
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ArtistsSection } from '@/components/ArtistsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { EventsSection } from '@/components/EventsSection';
import { PricingSection } from '@/components/PricingSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import CalendarBooking from '@/components/CalendarBooking';
import { Footer } from "@/components/Footer";
import { LoadingScreen } from '@/components/LoadingScreen';
import { Button } from '@/components/ui/button';
import { Download, Smartphone } from 'lucide-react';
import { Capacitor } from '@capacitor/core';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isNativeApp = Capacitor.isNativePlatform();
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const showAPKButton = !isNativeApp; // Show on all web browsers, not just mobile

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadAPK = () => {
    window.open('https://github.com/alxjackson/alxjackon-eventos/releases/download/v.1.1.0/app-release.apk', '_blank');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <WelcomeModal />
      <Header />
      
      {/* Download APK Banner - Only show on web browsers, not in native app */}
      {showAPKButton && (
        <div className="bg-gradient-to-r from-green-600 to-blue-600 py-3 px-4 text-center">
          <div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-white" />
              <span className="text-white font-medium">¡Descarga nuestra App Nativa!</span>
            </div>
            <Button 
              onClick={handleDownloadAPK}
              size="sm"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold transition-all duration-200 hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar APK
            </Button>
          </div>
        </div>
      )}
      
      <HeroSection />
      <ArtistsSection />
      <ServicesSection />
      <EventsSection />
      <PricingSection />
      <CalendarBooking />
      <TestimonialsSection />
      <ContactSection />
      <FloatingActionButton />
      <Footer />
    </div>
  );
};

export default Index;
