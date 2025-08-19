import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Payments = () => {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/PicRetouch_20240711_050451636.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
              <img 
                src="/PicRetouch_20240711_050451636.jpg" 
                alt="AlxJackson Payments" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Sistema de Pagos
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Próximamente estará habilitado nuestro sistema de pagos seguro y confiable
          </p>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Reservaciones</h3>
              <p className="text-white/70 text-sm">Sistema de calendario integrado para reservar tus eventos</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Pagos Seguros</h3>
              <p className="text-white/70 text-sm">Múltiples métodos de pago con encriptación de nivel bancario</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Confirmación Instantánea</h3>
              <p className="text-white/70 text-sm">Recibe confirmación inmediata de tu reservación</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">¿Listo para reservar tu evento?</h2>
            <p className="text-white/80 mb-6">
              Mientras habilitamos el sistema de pagos, puedes contactarnos directamente para hacer tu reservación
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
              >
                <a href="https://wa.me/5215617184109" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
              
              <Link to="/#contact">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto">
                  Ver Información de Contacto
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-white/60 text-sm mt-8">
            Desarrollado con ❤️ por <span className="text-purple-400 font-semibold">DjWacko</span> | AlxJackson Entertainment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payments;
