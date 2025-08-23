import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, FileText, Shield, AlertTriangle, Home, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-start">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:text-purple-300 bg-white/10 backdrop-blur-sm border border-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
            <Link to="/">
              <Button variant="hero" size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Home className="w-4 h-4 mr-2" />
                Inicio
              </Button>
            </Link>
          </div>

          <Card className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border-white/30 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Términos de Uso</h1>
                  <p className="text-purple-200/80 text-sm mt-1">AlxJackson Entertainment Platform</p>
                </div>
              </div>

              <div className="bg-purple-500/20 border border-purple-400/30 rounded-xl p-4 mb-8">
                <p className="text-purple-200 text-center font-medium">
                  📅 Última actualización: 23 de agosto de 2025
                </p>
              </div>

              <div className="prose prose-invert max-w-none text-gray-300">

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-green-400" />
                  1. Aceptación de Términos
                </h2>
                <p>
                  Al acceder y utilizar la plataforma AlxJackson Entertainment, usted acepta estar sujeto a estos términos de uso. 
                  Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Descripción del Servicio</h2>
                <p>
                  AlxJackson Entertainment es una plataforma de entretenimiento que ofrece servicios de espectáculos en vivo, 
                  incluyendo interpretaciones de artistas icónicos como Freddy Mercury, Michael Jackson, Alex Vitor y otros personajes del entretenimiento.
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Espectáculos en vivo para eventos privados y corporativos</li>
                  <li>Fiestas infantiles, bodas, XV años y celebraciones</li>
                  <li>Servicios de DJ profesional</li>
                  <li>Coordinación integral de eventos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  3. Política de Reservaciones y Cancelaciones
                </h2>
                <Card className="bg-gradient-to-r from-red-600/30 to-orange-600/30 border-red-400/50 mb-6">
                  <CardContent className="p-4">
                    <p className="font-bold text-red-200 text-center">
                      ⚠️ IMPORTANTE: Consulta nuestra <Link to="/cancellation" className="text-yellow-300 hover:text-yellow-200 underline">Política de Cancelación</Link> para conocer los términos específicos.
                    </p>
                  </CardContent>
                </Card>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Las reservaciones requieren confirmación mediante código QR único</li>
                  <li>Los anticipos son requeridos para asegurar la fecha del evento</li>
                  <li>Los pagos completos deben realizarse antes del evento</li>
                  <li>Las fechas están sujetas a disponibilidad de artistas</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Precios y Pagos</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Evento Básico: $2,500 MXN (2 horas)</li>
                  <li>Evento Premium: $4,500 MXN (3 horas) - Incluye DJ profesional</li>
                  <li>Evento VIP: $7,000 MXN (4 horas) - Incluye DJ premium</li>
                  <li>Los precios pueden variar según ubicación y requerimientos especiales</li>
                  <li>Todos los precios incluyen IVA</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Responsabilidades del Cliente</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar información precisa sobre el evento y ubicación</li>
                  <li>Asegurar acceso adecuado al lugar del evento</li>
                  <li>Garantizar condiciones de seguridad para los artistas</li>
                  <li>Respetar los horarios acordados</li>
                  <li>Mantener un ambiente respetuoso durante el espectáculo</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Limitaciones de Responsabilidad</h2>
                <p>
                  AlxJackson Entertainment no se hace responsable por:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Condiciones climáticas adversas que impidan la realización del evento</li>
                  <li>Problemas técnicos ajenos a nuestro control</li>
                  <li>Daños a la propiedad del cliente durante el evento</li>
                  <li>Cancelaciones por causas de fuerza mayor</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Propiedad Intelectual</h2>
                <p>
                  Los espectáculos son interpretaciones artísticas de personajes icónicos. Respetamos todos los derechos de autor 
                  y marcas registradas. Las interpretaciones son realizadas bajo el concepto de tributo artístico.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Modificaciones</h2>
                <p>
                  AlxJackson Entertainment se reserva el derecho de modificar estos términos en cualquier momento. 
                  Las modificaciones serán efectivas inmediatamente después de su publicación en la plataforma.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Contacto</h2>
                <p>
                  Para preguntas sobre estos términos, contacte:
                </p>
                <ul className="list-none mt-4 space-y-2">
                  <li>📧 Email: info@alxjackson.com</li>
                  <li>📱 WhatsApp: +52 729 235 5348</li>
                  <li>🌐 Web: alxjackson-eventos.vercel.app</li>
                </ul>
              </section>

                <Card className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-purple-400/40 mt-8">
                  <CardContent className="p-6">
                    <p className="text-center text-purple-200 font-medium mb-4">
                      © 2025 AlxJackson Entertainment Platform. Todos los derechos reservados.
                    </p>
                    <p className="text-center text-white/70 text-sm">
                      🎵 Desarrollado por <span className="text-purple-300 font-semibold">DjWacko</span> - Especialista en entretenimiento digital
                    </p>
                    <div className="flex justify-center gap-4 mt-3 text-sm">
                      <span className="text-green-400">📱 WhatsApp: 56-1718-4109</span>
                      <span className="text-blue-400">🐦 @DjWackoCDMX</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
