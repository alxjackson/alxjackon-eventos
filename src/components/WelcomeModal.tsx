import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Music, Sparkles, Calendar } from "lucide-react";

export const WelcomeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show modal on first visit
    const hasSeenWelcome = localStorage.getItem("alxjackson-welcome-seen");
    if (!hasSeenWelcome) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("alxjackson-welcome-seen", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-purple-500/30 shadow-2xl">
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

        <div className="flex justify-center pt-6">
          <Button 
            onClick={handleClose} 
            className="px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 animate-pulse"
          >
            <span className="flex items-center gap-3">
              ¡Comencemos! 
              <span className="text-2xl">🎉</span>
            </span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};