import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    event: "Boda",
    rating: 5,
    text: "¡Increíble! El show de Freddy Mercury fue espectacular. Todos nuestros invitados quedaron fascinados. La interpretación fue tan auténtica que parecía el mismísimo Freddy en el escenario.",
    location: "Ciudad de México"
  },
  {
    name: "Carlos Rodríguez",
    event: "XV Años",
    rating: 5,
    text: "Contratamos a Michael Jackson para los XV años de mi hija y fue la mejor decisión. El artista tenía todos los movimientos perfectos y la energía fue contagiosa. ¡Una noche inolvidable!",
    location: "Guadalajara"
  },
  {
    name: "Ana Martínez",
    event: "Fiesta Infantil",
    rating: 5,
    text: "Alex Vitor hizo que la fiesta de mi hijo fuera mágica. Su versatilidad para adaptar las canciones a los niños fue impresionante. Definitivamente los volveremos a contratar.",
    location: "Monterrey"
  },
  {
    name: "Roberto Silva",
    event: "Evento Corporativo",
    rating: 5,
    text: "Profesionalismo de primer nivel. El equipo de AlxJackson coordinó todo perfectamente y el show superó nuestras expectativas. Nuestros clientes quedaron impresionados.",
    location: "Puebla"
  },
  {
    name: "Laura Hernández",
    event: "Celebración Privada",
    rating: 5,
    text: "Carmelo y Paul fueron extraordinarios en nuestra celebración familiar. La calidad del sonido, el vestuario y la interpretación fueron impecables. ¡Altamente recomendados!",
    location: "Tijuana"
  },
  {
    name: "Diego Morales",
    event: "Club Nocturno",
    rating: 5,
    text: "Hemos trabajado con AlxJackson en múltiples ocasiones y siempre entregan shows de calidad mundial. Nuestros clientes siempre preguntan cuándo regresarán.",
    location: "Cancún"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 font-medium">Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de 645 eventos exitosos respaldan nuestra reputación como la mejor 
            plataforma de entretenimiento para eventos especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-purple-400/50 group-hover:text-purple-400 transition-colors duration-300" />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-purple-500/20 px-3 py-1 rounded-full">
                        <span className="text-purple-300 text-sm font-medium">{testimonial.event}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-white/10">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">645+</div>
                <div className="text-gray-300">Eventos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-300">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">5★</div>
                <div className="text-gray-300">Calificación Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Soporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
