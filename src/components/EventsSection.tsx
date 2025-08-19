import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, Star, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  end_date?: string;
  location: string;
  capacity: number;
  price: number;
  image_url?: string;
  status: string;
  available_spots?: number;
  categories?: Array<{
    id: string;
    name: string;
    color: string;
  }>;
}

// Mock data para demostración
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tributo a Freddy Mercury',
    description: 'Una noche mágica reviviendo los mejores éxitos de Queen con un espectáculo en vivo inolvidable.',
    event_date: '2025-09-15T20:00:00Z',
    location: 'Teatro Principal, Ciudad de México',
    capacity: 500,
    price: 850,
    available_spots: 125,
    status: 'active',
    image_url: '/2024-07-11-00-35-34-117.jpg',
    categories: [
      { id: '1', name: 'Disponible', color: '#10B981' }
    ]
  },
  {
    id: '2',
    title: 'Michael Jackson Experience',
    description: 'El rey del pop revive en un espectáculo lleno de baile, música y la magia que solo MJ podía crear.',
    event_date: '2025-09-22T19:30:00Z',
    location: 'Auditorio Nacional, Ciudad de México',
    capacity: 800,
    price: 1200,
    available_spots: 200,
    status: 'active',
    categories: [
      { id: '5', name: 'VIP', color: '#EF4444' }
    ]
  },
  {
    id: '3',
    title: 'Noche de Karaoke VIP',
    description: 'Una experiencia exclusiva de karaoke con sistema de sonido profesional y ambiente premium.',
    event_date: '2025-08-30T21:00:00Z',
    location: 'AlxJackson Lounge, Polanco',
    capacity: 50,
    price: 0,
    available_spots: 15,
    status: 'active',
    categories: [
      { id: '3', name: 'Eventos Privados', color: '#F59E0B' },
      { id: '5', name: 'VIP', color: '#EF4444' }
    ]
  }
];

export const EventsSection = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>([]);
  const [userBookings, setUserBookings] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState<string | null>(null);

  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleBookEvent = async (eventId: string, guestsCount: number = 1) => {
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
      
      // Actualizar spots disponibles
      setEvents(prev => prev.map(event => 
        event.id === eventId 
          ? { ...event, available_spots: (event.available_spots || 0) - guestsCount }
          : event
      ));

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

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Próximos Eventos</h2>
            <div className="animate-pulse">
              <div className="h-4 bg-gray-600 rounded w-64 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-700 rounded-lg h-64"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4" id="eventos">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Próximos Eventos</h2>
          <p className="text-xl text-gray-300">
            Experiencias únicas con los mejores artistas del entretenimiento
          </p>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No hay eventos próximos</h3>
            <p className="text-gray-400">Mantente atento para nuevos eventos exclusivos</p>
          </div>
        ) : (
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
                  {event.price > 0 && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-white font-bold">
                        {formatPrice(event.price)}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-white text-xl">{event.title}</CardTitle>
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
                        onClick={() => handleBookEvent(event.id)}
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
                            {event.price > 0 ? `Reservar - ${formatPrice(event.price)}` : 'Reservar Gratis'}
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
