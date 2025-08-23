import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Star, Sparkles, Ticket } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [bookingLoading, setBookingLoading] = useState<string | null>(null);
  const [userBookings, setUserBookings] = useState<string[]>([]);

  const events = [
    {
      id: "freddy-mercury",
      title: "Tributo a Freddy Mercury",
      description: "Una noche mágica reviviendo los mejores éxitos de Queen con un espectáculo en vivo inolvidable",
      price: 2500,
      event_date: "2025-09-15T20:00:00Z",
      location: "Teatro Principal, Toluca",
      capacity: 200,
      available_spots: 85,
      image: "/2024-07-11-00-35-34-117.jpg",
      features: ["Show completo de Queen", "Vestuario original", "Efectos especiales", "DJ profesional"],
      categories: [{ id: '1', name: 'Disponible', color: '#10B981' }]
    },
    {
      id: "michael-jackson",
      title: "Michael Jackson Experience",
      description: "El rey del pop revive en un espectáculo lleno de baile, música y la magia que solo MJ podía crear",
      price: 4500,
      event_date: "2025-09-22T19:30:00Z",
      location: "Auditorio Municipal, Toluca",
      capacity: 500,
      available_spots: 200,
      image: "/PicRetouch_20240711_050451636.jpg",
      features: ["Moonwalk profesional", "Coreografías originales", "Vestuario icónico", "DJ profesional incluido"],
      categories: [{ id: '5', name: 'VIP', color: '#EF4444' }]
    },
    {
      id: "alex-vitor",
      title: "Alex Vitor Show Premium",
      description: "Espectáculo personalizado con los mejores éxitos y una puesta en escena espectacular con DJ únicamente",
      price: 7000,
      event_date: "2025-10-05T21:00:00Z",
      location: "Centro de Convenciones, Toluca",
      capacity: 300,
      available_spots: 150,
      image: "/2024-07-11-00-35-34-117.jpg",
      features: ["Show personalizado", "DJ profesional únicamente", "Efectos de luces profesionales", "Coordinación integral"],
      categories: [{ id: '6', name: 'Luxury', color: '#8B5CF6' }]
    }
  ];

  const handleReserveEvent = async (eventId: string) => {
    if (!user) {
      toast({
        title: "Inicia sesión",
        description: "Debes iniciar sesión para reservar eventos",
        variant: "destructive",
      });
      return;
    }

    setBookingLoading(eventId);

    // Simular proceso de reserva
    setTimeout(() => {
      setUserBookings(prev => [...prev, eventId]);
      
      toast({
        title: "¡Reserva exitosa!",
        description: "Tu reserva ha sido creada. Recibirás una confirmación pronto.",
      });

      setBookingLoading(null);
    }, 2000);
  };

  const isEventBooked = (eventId: string) => {
    return userBookings.includes(eventId);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/5 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <Sparkles className="w-4 h-4 mr-2" />
              Eventos Disponibles
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              Próximos Eventos
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experiencias únicas con los mejores artistas del entretenimiento. 
              Cada evento incluye confirmación QR instantánea y garantía de calidad profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-t-lg flex items-center justify-center">
                    <Star className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {event.categories?.map((category) => (
                      <Badge 
                        key={category.id}
                        className="text-white font-medium"
                        style={{ backgroundColor: category.color }}
                      >
                        {category.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white font-bold">
                      {formatPrice(event.price)}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {event.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{formatDate(event.event_date)}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">
                        {event.available_spots} / {event.capacity} disponibles
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-green-400">Disponible</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-white">Incluye:</h4>
                    <ul className="space-y-1">
                      {event.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                          <Star className="w-3 h-3 text-yellow-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    {isEventBooked(event.id) ? (
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        disabled
                      >
                        <Ticket className="w-4 h-4 mr-2" />
                        Ya Reservado
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => handleReserveEvent(event.id)}
                        disabled={bookingLoading === event.id || event.available_spots === 0}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300"
                      >
                        {bookingLoading === event.id ? (
                          <>
                            <Clock className="w-4 h-4 mr-2 animate-spin" />
                            Reservando...
                          </>
                        ) : event.available_spots === 0 ? (
                          'Agotado'
                        ) : (
                          <>
                            <Ticket className="w-4 h-4 mr-2" />
                            {`Reservar - ${formatPrice(event.price)}`}
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">¿Necesitas un evento personalizado?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contáctanos para crear un espectáculo único adaptado a tus necesidades específicas con DJ profesional
          </p>
          <Button variant="outline" size="lg" className="border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-white">
            Contactar Ahora
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
