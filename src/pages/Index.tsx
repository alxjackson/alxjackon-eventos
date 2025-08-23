import { useState, useEffect } from "react";
import { WelcomeModal } from '@/components/WelcomeModal';
import { UpdateModal } from '@/components/UpdateModal';
import { PermissionsModal } from '@/components/PermissionsModal';
import { useVersionCheck } from '@/hooks/useVersionCheck';
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
  const [showPermissionsModal, setShowPermissionsModal] = useState(false);
  const [permissionsChecked, setPermissionsChecked] = useState(false);
  const isNativeApp = Capacitor.isNativePlatform();
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const showAndroidAppButton = !isNativeApp; // Show on all web browsers, not just mobile
  
  // Version check hook
  const { 
    currentVersion, 
    updateInfo, 
    showModal, 
    dismissUpdate 
  } = useVersionCheck();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Mostrar modal de permisos SOLO en APK, NO en web
      if (!permissionsChecked && isNativeApp) {
        setShowPermissionsModal(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [permissionsChecked, isNativeApp]);

  const handlePermissionsComplete = (success: boolean) => {
    setShowPermissionsModal(false);
    setPermissionsChecked(true);
    if (!success) {
      console.log('Permisos no concedidos, continuando con funcionalidad limitada');
    }
  };

  const handleDownloadAndroidApp = () => {
    const downloadUrl = updateInfo?.downloadUrl || 
      `https://github.com/alxjackson/alxjackon-eventos/releases/latest/download/app-release.apk`;
    window.open(downloadUrl, '_blank');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <WelcomeModal />
      
      {/* Update Modal */}
      {showModal && updateInfo && (
        <UpdateModal
          isOpen={showModal}
          onClose={dismissUpdate}
          currentVersion={currentVersion}
          newVersion={updateInfo.version}
          changelog={updateInfo.changelog || []}
          downloadUrl={updateInfo.downloadUrl}
        />
      )}
      
      {/* Permissions Modal */}
      <PermissionsModal
        isOpen={showPermissionsModal}
        onComplete={handlePermissionsComplete}
      />
      
      <Header />
      
      {/* Download Android App Banner - Only show on web browsers, not in native app */}
      {showAndroidAppButton && (
        <div className="bg-gradient-to-r from-green-600 to-blue-600 py-3 px-4 text-center">
          <div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Smartphone className="w-5 h-5 text-white animate-pulse" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-white font-medium">¡Descarga nuestra App Nativa!</span>
            </div>
            <Button 
              onClick={handleDownloadAndroidApp}
              size="sm"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              <div className="relative">
                <Smartphone className="w-4 h-4 animate-bounce" />
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              Aplicación para Android
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
