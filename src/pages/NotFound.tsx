import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/PicRetouch_20240711_050451636.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/85 to-indigo-900/90 backdrop-blur-sm"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse mb-4">
              404
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          </div>

          {/* Error Message */}
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl mb-8">
            <div className="flex items-center justify-center mb-6">
              <Search className="w-16 h-16 text-purple-400 animate-bounce" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Página No Encontrada
            </h2>
            
            <p className="text-lg text-purple-200 mb-6 leading-relaxed">
              Lo sentimos, la página que estás buscando no existe o ha sido movida. 
              Puede que hayas escrito mal la URL o que el enlace esté desactualizado.
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <p className="text-sm text-purple-300">
                <span className="font-semibold">Ruta solicitada:</span> {location.pathname}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGoHome}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Home className="w-5 h-5 mr-2" />
                Ir al Inicio
              </Button>
              
              <Button
                onClick={handleGoBack}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Regresar
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-purple-300 text-sm mb-2">
              ¿Necesitas ayuda? Contáctanos
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://wa.me/527292355348" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                💬 WhatsApp
              </a>
              <a 
                href="mailto:alxjacksonanimacion@outlook.es"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                📧 Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-75 delay-500"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75 delay-1000"></div>
    </div>
  );
};

export default NotFound;
