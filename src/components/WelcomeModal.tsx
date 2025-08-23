import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Download, Music, Calendar, Users, Star, Smartphone, AlertTriangle, Sparkles } from "lucide-react";
import { Capacitor } from "@capacitor/core";

export const WelcomeModal = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isNativeApp = Capacitor.isNativePlatform();
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  useEffect(() => {
    // Show modal on first visit
    const hasSeenWelcome = localStorage.getItem("alxjackson-welcome-seen");
    if (!hasSeenWelcome) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("alxjackson-welcome-seen", "true");
      setOpen(false);
      setIsLoading(false);
    }, 1500);
  };

  const handleDownloadAndroidApp = () => {
    window.open('https://github.com/alxjackson/alxjackon-eventos/releases/download/v.1.1.0/app-release.apk', '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-purple-500/30 shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 animate-bounce">
            <Music className="w-10 h-10 text-white animate-pulse" />
          </div>
          <DialogTitle className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            ¡Bienvenido a AlxJackson!
          </DialogTitle>
          <DialogDescription className="text-xl text-gray-300 animate-fade-in-delay">
            Tu plataforma de entretenimiento premium para eventos únicos ✨
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-6">
          <div className="grid gap-6">
            <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">Shows Únicos</h3>
                <p className="text-gray-300">
                  Interpretaciones de Freddy Mercury, Michael Jackson, Alex Vitor, Carmelo y Paul, y muchos más personajes icónicos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-blue-500/20 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">Reserva tu Evento</h3>
                <p className="text-gray-300">
                  Regístrate, consulta precios, reserva tu fecha y recibe tu código QR de confirmación único.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-red-500/10 p-4 rounded-xl border border-red-500/30 hover:bg-red-500/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg animate-pulse">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">Política de Cancelación</h3>
                <p className="text-red-300 font-semibold">
                  ⚠️ IMPORTANTE: Una vez hecha la reservación no se puede cancelar y si existe anticipo no hay devoluciones.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30 shadow-lg">
            <h4 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
              🎭 Tipos de Eventos:
            </h4>
            <p className="text-gray-300 text-lg">
              Fiestas infantiles • Bodas • XV Años • Eventos en clubes y bares • Celebraciones privadas
            </p>
          </div>
        </div>

        {/* Download Android App Section - Only show on web browsers, not in native app */}
        {!isNativeApp && isMobile && (
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-green-500/30 shadow-lg mb-6">
            <h4 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
              <div className="relative">
                <Smartphone className="w-5 h-5 text-green-400 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              📱 Descarga Nuestra App
            </h4>
            <p className="text-white/80 text-sm mb-4">
              Obtén la mejor experiencia con nuestra aplicación nativa para Android
            </p>
            <Button 
              onClick={handleDownloadAndroidApp}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <div className="relative">
                <Smartphone className="w-5 h-5 animate-bounce" />
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
              </div>
              Aplicación para Android (v1.1.0)
            </Button>
          </div>
        )}

        <div className="flex justify-center pt-6">
          <Button 
            onClick={handleClose} 
            disabled={isLoading}
            className="px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Cargando...
              </span>
            ) : (
              <span className="flex items-center gap-3 animate-pulse">
                ¡Comencemos! 
                <span className="text-2xl">🎉</span>
              </span>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};