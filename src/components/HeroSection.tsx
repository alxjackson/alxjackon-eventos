import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Calendar, QrCode, Star } from "lucide-react";
import heroImage from "@/assets/hero-stage.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AlxJackson performing on stage with dramatic lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        <div className="absolute inset-0 bg-gradient-dark/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <Badge variant="secondary" className="bg-gradient-accent text-foreground font-semibold px-3 py-1">
              <Star className="w-3 h-3 mr-1" />
              Entretenimiento Premium
            </Badge>
            <Badge variant="outline" className="border-primary/50 text-primary">
              Nuevo Sistema QR
            </Badge>
          </div>

          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                AlxJackson
              </span>
              <br />
              <span className="text-foreground">
                Entertainment
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed mx-auto">
              Vive la magia de los grandes espectáculos. Freddy Mercury, Michael Jackson, Alex Vitor y más. 
              <span className="text-accent font-semibold"> Reserva tu evento único</span> y 
              obtén tu código QR de confirmación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                <Calendar className="w-5 h-5 mr-2" />
                Reservar Evento
              </Button>
              <Button variant="luxury" size="lg" className="text-lg px-8 py-6 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300" onClick={() => window.location.href = '/gallery'}>
                <Sparkles className="w-5 h-5 mr-2" />
                Ver Espectáculos
              </Button>
            </div>
          </div>

          {/* Features Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <QrCode className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">Código QR Único</h3>
                <p className="text-xs text-muted-foreground">Confirmación instantánea</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">Shows Únicos</h3>
                <p className="text-xs text-muted-foreground">Personajes icónicos</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="w-10 h-10 bg-destructive/20 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">Sin Cancelaciones</h3>
                <p className="text-xs text-muted-foreground">Política estricta</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-hero rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-accent rounded-full opacity-30 blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};