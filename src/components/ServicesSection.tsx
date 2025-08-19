import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Heart, PartyPopper, Users, Martini, Gift } from "lucide-react";

const services = [
  {
    icon: PartyPopper,
    title: "Fiestas Infantiles",
    description: "Shows mágicos que harán que los niños vivan momentos inolvidables con sus personajes favoritos.",
    features: ["Animación interactiva", "Música en vivo", "Juegos temáticos"],
    badge: "Más Popular",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Heart,
    title: "Bodas & XV Años",
    description: "Celebra tu día especial con espectáculos únicos que harán de tu evento algo extraordinario.",
    features: ["Shows personalizados", "Música romántica", "Momentos únicos"],
    badge: "Premium",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: Martini,
    title: "Clubes & Bares",
    description: "Noches temáticas con los mejores tributos que transformarán tu local en un escenario épico.",
    features: ["Tributos profesionales", "Interacción con público", "Show completo"],
    badge: "Pro",
    color: "bg-destructive/10 text-destructive"
  },
  {
    icon: Users,
    title: "Eventos Corporativos",
    description: "Dale un toque especial a tus eventos empresariales con entretenimiento de primera clase.",
    features: ["Shows adaptables", "Profesionalismo total", "Impacto garantizado"],
    badge: "Business",
    color: "bg-muted text-muted-foreground"
  },
  {
    icon: Gift,
    title: "Eventos Privados",
    description: "Celebraciones íntimas con espectáculos personalizados para hacer tu evento único.",
    features: ["Totalmente personalizable", "Grupos pequeños", "Ambiente íntimo"],
    badge: "Exclusivo",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Music,
    title: "Shows Temáticos",
    description: "Noches dedicadas a leyendas como Freddy Mercury, Michael Jackson y más iconos musicales.",
    features: ["Múltiples personajes", "Vestuario auténtico", "Calidad profesional"],
    badge: "Icónico",
    color: "bg-accent/10 text-accent"
  }
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full mb-4">
            <Music className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Entretenimiento
            </span>{" "}
            para Cada Ocasión
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desde fiestas infantiles hasta eventos corporativos, llevamos la magia del espectáculo 
            a cualquier celebración con nuestros personajes icónicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {service.badge}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mt-3 text-gray-300 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};