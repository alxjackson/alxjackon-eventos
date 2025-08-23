import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Calendar, QrCode, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-stage.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleReservarEvento = () => {
    navigate('/events');
  };

  const handleVerEspectaculos = () => {
    navigate('/gallery');
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AlxJackson performing on stage with dramatic lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          <Badge variant="secondary" className="bg-yellow-500/90 text-black font-semibold px-4 py-2 text-sm backdrop-blur-sm">
            ⭐ Entretenimiento Premium
          </Badge>
          <Badge variant="secondary" className="bg-green-500/90 text-white font-semibold px-4 py-2 text-sm backdrop-blur-sm">
            🎵 Nuevo Sistema QR
          </Badge>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl text-center">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent filter drop-shadow-lg">
            AlxJackson
          </span>
          <br />
          <span className="text-white font-extrabold drop-shadow-lg">
            Entertainment
          </span>
        </h1>

        <div className="mb-8 text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-white font-semibold mb-4 drop-shadow-lg">
            Vive la magia de los grandes espectáculos.
          </p>
          <p className="text-lg md:text-xl text-white/95 font-medium drop-shadow-md">
            Freddy Mercury, Michael Jackson, Alex Vitor y más.
          </p>
          <p className="text-base md:text-lg text-yellow-300 font-bold mt-4 drop-shadow-md">
            Reserva tu evento único
          </p>
          <p className="text-sm md:text-base text-white/90 drop-shadow-sm">
            y obtén tu código QR de confirmación.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full max-w-md mx-auto">
          <Button 
            onClick={handleReservarEvento}
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Reservar Evento
          </Button>
          <Button 
            onClick={handleVerEspectaculos}
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border-white/40 hover:border-white/60 font-semibold px-8 py-4 text-lg shadow-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Ver Espectáculos
          </Button>
        </div>

        {/* Features Quick Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-lg">
            <div className="w-10 h-10 bg-purple-500/30 rounded-full flex items-center justify-center">
              <QrCode className="w-5 h-5 text-purple-300" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-white drop-shadow-md">Código QR Único</h3>
              <p className="text-xs text-white/80">Confirmación instantánea</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-lg">
            <div className="w-10 h-10 bg-yellow-500/30 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-white drop-shadow-md">Shows Únicos</h3>
              <p className="text-xs text-white/80">Personajes icónicos</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-lg">
            <div className="w-10 h-10 bg-red-500/30 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-red-300" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-white drop-shadow-md">Sin Cancelaciones</h3>
              <p className="text-xs text-white/80">Política estricta</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-30 blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};