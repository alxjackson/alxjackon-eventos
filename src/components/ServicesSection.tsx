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
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Nuestros Servicios
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Entretenimiento
            </span>{" "}
            para Cada Ocasión
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde fiestas infantiles hasta eventos corporativos, llevamos la magia del espectáculo 
            a cualquier celebración con nuestros personajes icónicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-luxury transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.badge}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
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