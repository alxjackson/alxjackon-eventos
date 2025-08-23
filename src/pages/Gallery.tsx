import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Camera, Image, Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Gallery = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10">
        {/* Header with Back Button */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="ghost" 
              size="lg" 
              onClick={handleGoBack}
              className="bg-white/10 text-white hover:bg-white/20 border border-white/30 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Regresar
            </Button>
            
            <Badge variant="secondary" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-4 py-2 shadow-lg">
              <Star className="w-4 h-4 mr-1" />
              Galería de Espectáculos
            </Badge>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl">
              <CardContent className="p-12 text-center">
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                    <Camera className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Galería de Espectáculos
                  </span>
                </h1>

                {/* Coming Soon Message */}
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-6 mb-8 border border-yellow-500/30">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-yellow-400" />
                    <h2 className="text-2xl font-semibold text-yellow-100">Próximamente Habilitada</h2>
                  </div>
                  <p className="text-lg text-yellow-200/80 leading-relaxed">
                    Estamos preparando una increíble galería con fotos y videos de nuestros mejores espectáculos. 
                    Muy pronto podrás ver las mejores presentaciones de Freddy Mercury, Michael Jackson, Alex Vitor y más.
                  </p>
                </div>

                {/* Features Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <Image className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Fotos en Alta Calidad</h3>
                    <p className="text-gray-300 text-sm">Imágenes profesionales de nuestros espectáculos más destacados</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <Camera className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Videos Exclusivos</h3>
                    <p className="text-gray-300 text-sm">Momentos únicos capturados durante las presentaciones</p>
                  </div>
                </div>

                {/* Carousel Placeholder */}
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg p-8 border-2 border-dashed border-gray-600/50 mb-8">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-gray-700/50 rounded-lg flex items-center justify-center">
                      <Image className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-300 mb-2">Carrusel de Imágenes</h3>
                      <p className="text-gray-400 text-sm">Espacio reservado para el carrusel de fotos</p>
                      <div className="flex justify-center gap-2 mt-4">
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <p className="text-gray-300 mb-6">
                    Mientras tanto, puedes reservar tu evento y vivir la experiencia en vivo
                  </p>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-lg px-8 py-6 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                    onClick={() => navigate('/')}
                  >
                    <Star className="w-5 h-5 mr-2" />
                    Reservar Evento
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-30 blur-2xl animate-pulse delay-1000"></div>
    </div>
  );
};
