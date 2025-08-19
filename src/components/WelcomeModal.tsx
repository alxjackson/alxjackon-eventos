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
      <DialogContent className="max-w-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-performance">
            <Music className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            ¡Bienvenido a AlxJackson!
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            Tu plataforma de entretenimiento premium para eventos únicos
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-6">
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Sparkles className="w-4 h-4 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Shows Únicos</h3>
                <p className="text-sm text-muted-foreground">
                  Interpretaciones de Freddy Mercury, Michael Jackson, Alex Vitor, Carmelo y Paul, y muchos más personajes icónicos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Calendar className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Reserva tu Evento</h3>
                <p className="text-sm text-muted-foreground">
                  Regístrate, consulta precios, reserva tu fecha y recibe tu código QR de confirmación único.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-4 h-4 text-destructive-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Política de Cancelación</h3>
                <p className="text-sm text-muted-foreground font-medium">
                  <strong>IMPORTANTE:</strong> Una vez hecha la reservación no se puede cancelar y si existe anticipo no hay devoluciones.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <h4 className="font-semibold text-sm text-foreground mb-2">Tipos de Eventos:</h4>
            <p className="text-sm text-muted-foreground">
              Fiestas infantiles • Bodas • XV Años • Eventos en clubes y bares • Celebraciones privadas
            </p>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={handleClose} className="flex-1">
            Entendido
          </Button>
          <Button variant="hero" onClick={handleClose} className="flex-1">
            ¡Comencemos!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};