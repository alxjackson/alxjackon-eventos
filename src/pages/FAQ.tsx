import { ArrowLeft, HelpCircle, Music, Calendar, CreditCard, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqCategories = [
    {
      title: "Servicios y Artistas",
      icon: <Music className="w-5 h-5" />,
      questions: [
        {
          q: "¿Qué tipos de espectáculos ofrecen?",
          a: "Ofrecemos tributos a Freddy Mercury, Michael Jackson, Alex Vitor y otros artistas. Nuestros espectáculos incluyen música en vivo, coreografías profesionales y vestuario auténtico."
        },
        {
          q: "¿Los artistas son imitadores profesionales?",
          a: "Sí, todos nuestros artistas son profesionales con años de experiencia. Cada uno se especializa en recrear fielmente la voz, movimientos y presencia escénica del artista original."
        },
        {
          q: "¿Pueden personalizar el repertorio musical?",
          a: "Absolutamente. Trabajamos contigo para crear una lista de canciones que se adapte a tu evento y audiencia. Podemos incluir los grandes éxitos o canciones específicas que prefieras."
        },
        {
          q: "¿Ofrecen espectáculos para eventos corporativos?",
          a: "Sí, tenemos experiencia en eventos corporativos, fiestas de fin de año, convenciones y celebraciones empresariales. Adaptamos el show al ambiente profesional."
        }
      ]
    },
    {
      title: "Reservas y Calendario",
      icon: <Calendar className="w-5 h-5" />,
      questions: [
        {
          q: "¿Con cuánta anticipación debo reservar?",
          a: "Recomendamos reservar con al menos 30 días de anticipación, especialmente para fechas populares como fines de semana y temporadas altas. Para eventos grandes, sugerimos 60-90 días."
        },
        {
          q: "¿Cómo puedo verificar la disponibilidad de fechas?",
          a: "Puedes usar nuestro calendario de reservas en la página web o contactarnos directamente por WhatsApp. Te confirmaremos la disponibilidad en tiempo real."
        },
        {
          q: "¿Qué pasa si mi fecha preferida no está disponible?",
          a: "Te ofreceremos fechas alternativas cercanas o la opción de entrar en lista de espera. También podemos sugerir artistas alternativos si están disponibles."
        },
        {
          q: "¿Pueden realizar múltiples shows en un mismo evento?",
          a: "Sí, podemos coordinar varios artistas para un mismo evento. Esto es popular en festivales, bodas grandes y eventos corporativos extensos."
        }
      ]
    },
    {
      title: "Precios y Pagos",
      icon: <CreditCard className="w-5 h-5" />,
      questions: [
        {
          q: "¿Cuáles son sus paquetes de precios?",
          a: "Ofrecemos tres paquetes: Básico ($2,500), Premium ($4,500) y VIP ($7,000). Cada uno incluye diferentes duraciones de show, equipos y servicios adicionales."
        },
        {
          q: "¿Qué incluye cada paquete?",
          a: "Básico: 45 min de show y sonido básico. Premium: 90 min, sonido profesional, luces y DJ. VIP: 2 horas, producción completa, luces LED, DJ profesional y meet & greet."
        },
        {
          q: "¿Aceptan pagos en efectivo o transferencia?",
          a: "Aceptamos efectivo, transferencias bancarias, y próximamente pagos con tarjeta. Requerimos un anticipo del 50% para confirmar la reserva."
        },
        {
          q: "¿Hay costos adicionales por traslados?",
          a: "Los traslados dentro de la Ciudad de México están incluidos. Para eventos fuera de la ciudad, se aplica un costo adicional según la distancia."
        }
      ]
    },
    {
      title: "Logística y Producción",
      icon: <Users className="w-5 h-5" />,
      questions: [
        {
          q: "¿Qué equipo técnico necesitan en el venue?",
          a: "Dependiendo del paquete, podemos llevar nuestro equipo completo o usar el del venue. Siempre coordinamos previamente los requerimientos técnicos."
        },
        {
          q: "¿Cuánto tiempo necesitan para el montaje?",
          a: "Para paquetes básicos: 30-45 min. Para Premium: 1-1.5 horas. Para VIP: 2-3 horas. Siempre llegamos con tiempo suficiente antes del evento."
        },
        {
          q: "¿Qué pasa si hay problemas técnicos durante el show?",
          a: "Nuestro equipo técnico siempre incluye respaldos. Tenemos protocolos para resolver cualquier inconveniente sin interrumpir significativamente el espectáculo."
        },
        {
          q: "¿Pueden adaptarse a espacios pequeños?",
          a: "Sí, adaptamos nuestros shows a diferentes tamaños de venue. Desde salones íntimos hasta grandes auditorios y espacios al aire libre."
        }
      ]
    },
    {
      title: "Políticas y Términos",
      icon: <Clock className="w-5 h-5" />,
      questions: [
        {
          q: "¿Cuál es su política de cancelación?",
          a: "Ofrecemos reembolsos del 100% con 30+ días de anticipación, 75% entre 15-29 días, y 50% con menos de 15 días. Ver nuestra política completa para excepciones."
        },
        {
          q: "¿Qué pasa si el artista se enferma?",
          a: "Tenemos artistas de respaldo entrenados. Si no es posible el reemplazo, ofrecemos 100% de reembolso más 10% de compensación, o reprogramación sin costo."
        },
        {
          q: "¿Tienen seguro para sus presentaciones?",
          a: "Sí, contamos con seguro de responsabilidad civil que cubre nuestras presentaciones. Esto protege tanto al cliente como a nuestro equipo."
        },
        {
          q: "¿Pueden firmar contratos corporativos?",
          a: "Sí, manejamos contratos formales para eventos corporativos y gubernamentales. Incluimos todas las cláusulas legales necesarias y facturación formal."
        }
      ]
    },
    {
      title: "Experiencia del Cliente",
      icon: <Star className="w-5 h-5" />,
      questions: [
        {
          q: "¿Ofrecen meet & greet con los artistas?",
          a: "Sí, especialmente en el paquete VIP. Los invitados pueden conocer a los artistas, tomarse fotos y recibir autógrafos antes o después del show."
        },
        {
          q: "¿Pueden interactuar con la audiencia?",
          a: "Absolutamente. Nuestros artistas están entrenados para involucrar a la audiencia, invitar a cantar, bailar y crear momentos memorables durante el espectáculo."
        },
        {
          q: "¿Proporcionan fotografía o video del evento?",
          a: "En paquetes Premium y VIP incluimos cobertura fotográfica básica. Para video profesional, ofrecemos servicios adicionales con costo extra."
        },
        {
          q: "¿Qué garantías ofrecen sobre la calidad del show?",
          a: "Garantizamos la calidad profesional de nuestros artistas. Si no estás satisfecho, trabajaremos contigo para resolver cualquier inconveniente o ofrecer compensación."
        }
      ]
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-purple-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Preguntas Frecuentes
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">¿Tienes dudas sobre nuestros servicios?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Aquí encontrarás respuestas a las preguntas más comunes sobre AlxJackson Entertainment. 
            Si no encuentras lo que buscas, ¡contáctanos directamente!
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-500 p-2 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openQuestion === globalIndex;
                    
                    return (
                      <div key={questionIndex} className="border border-purple-500/20 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(globalIndex)}
                          className="w-full text-left p-4 bg-purple-800/20 hover:bg-purple-800/30 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-white pr-4">{faq.q}</h4>
                            <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="p-4 bg-purple-900/20 border-t border-purple-500/20">
                            <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="mt-12 bg-gradient-to-r from-green-900/50 to-blue-900/50 border-green-500/30">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">¿No encontraste tu respuesta?</h3>
            <p className="text-gray-300 mb-6">
              Nuestro equipo está listo para ayudarte con cualquier duda específica sobre tu evento.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://wa.me/5215512345678', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Preguntar por WhatsApp
              </Button>
              <Button 
                onClick={() => window.open('tel:+5215512345678', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Llamar Ahora
              </Button>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Horario de atención: Lunes a Domingo 9:00 AM - 10:00 PM
            </p>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center text-gray-400 text-sm mt-8">
          <p>
            <strong>AlxJackson Entertainment</strong> - Haciendo realidad espectáculos únicos desde 2020
          </p>
          <p className="mt-2">
            Desarrollado por DjWacko | Síguenos en redes sociales para más contenido
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
