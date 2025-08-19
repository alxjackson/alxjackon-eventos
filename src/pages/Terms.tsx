import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, FileText, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:text-purple-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-purple-400" />
              <h1 className="text-4xl font-bold text-white">Términos de Uso</h1>
            </div>

            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="text-lg mb-6">
                Última actualización: 19 de agosto de 2025
              </p>

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
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-4">
                  <p className="font-bold text-red-300">
                    ⚠️ IMPORTANTE: Una vez confirmada la reservación, NO se permiten cancelaciones y NO hay devoluciones de anticipos.
                  </p>
                </div>
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

              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-6 mt-8">
                <p className="text-center text-purple-300 font-medium mb-4">
                  © 2025 AlxJackson Entertainment Platform. Todos los derechos reservados.
                </p>
                <p className="text-center text-white/70 text-sm">
                  🎵 Desarrollado por <span className="text-purple-400 font-semibold">DjWacko</span> - Especialista en entretenimiento digital
                </p>
                <div className="flex justify-center gap-4 mt-3 text-sm">
                  <span className="text-green-400">📱 WhatsApp: 56-1718-4109</span>
                  <span className="text-blue-400">🐦 @DjWackoCDMX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
