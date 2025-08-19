import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Clock, Users, MapPin } from "lucide-react";

const pricingPlans = [
  {
    name: "Evento Básico",
    price: "$2,500",
    duration: "2 horas",
    description: "Perfecto para fiestas íntimas y celebraciones familiares",
    features: [
      "1 artista principal",
      "Repertorio de 15-20 canciones",
      "Equipo de sonido básico",
      "Vestuario temático",
      "Código QR de confirmación"
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Evento Premium",
    price: "$4,500",
    duration: "3 horas",
    description: "La opción más popular para bodas y XV años",
    features: [
      "2 artistas principales",
      "DJ profesional incluido",
      "Repertorio de 30+ canciones",
      "Equipo de sonido profesional",
      "Vestuario y utilería completa",
      "Interacción con el público",
      "Fotografías del evento",
      "Código QR de confirmación"
    ],
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Evento VIP",
    price: "$7,000",
    duration: "4 horas",
    description: "Experiencia completa para eventos corporativos y grandes celebraciones",
    features: [
      "3+ artistas principales",
      "DJ profesional premium",
      "Repertorio ilimitado",
      "Equipo de sonido y luces profesional",
      "Vestuario, utilería y efectos especiales",
      "Show interactivo personalizado",
      "Fotografía y video profesional",
      "Coordinación del evento",
      "Código QR de confirmación"
    ],
    popular: false,
    color: "from-yellow-500 to-orange-500"
  }
];

const eventTypes = [
  { name: "Fiestas Infantiles", icon: "🎈", price: "Desde $2,500" },
  { name: "Bodas", icon: "💒", price: "Desde $4,500" },
  { name: "XV Años", icon: "👑", price: "Desde $4,500" },
  { name: "Eventos Corporativos", icon: "🏢", price: "Desde $7,000" },
  { name: "Clubes y Bares", icon: "🍸", price: "Cotización especial" },
  { name: "Celebraciones Privadas", icon: "🎉", price: "Desde $2,500" }
];

export const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">Precios Transparentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Paquetes de <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Entretenimiento</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Elige el paquete perfecto para tu evento. Todos incluyen artistas profesionales, 
            equipo de calidad y la garantía AlxJackson
          </p>
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-red-300 font-semibold">
              ⚠️ IMPORTANTE: Una vez hecha la reservación no se puede cancelar y si existe anticipo no hay devoluciones
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 ${plan.popular ? 'scale-105 border-purple-500/50' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Button asChild className="w-full bg-gradient-hero hover:bg-gradient-hero/90 text-white">
                    <Link to="/payments">Seleccionar Plan</Link>
                  </Button>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mb-4`}>
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span>{plan.duration}</span>
                </div>
                <p className="text-gray-400 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-3`}
                  size="lg"
                >
                  <Link to="/payments">Reservar Ahora</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Tipos de <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Eventos</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300 group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {event.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{event.name}</h4>
                <p className="text-purple-300 font-medium">{event.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 px-6 py-3 rounded-full">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300">Servicio disponible en toda la región</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
