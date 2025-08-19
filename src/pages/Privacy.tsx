import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Privacy = () => {
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
              <Shield className="w-8 h-8 text-green-400" />
              <h1 className="text-4xl font-bold text-white">Política de Privacidad</h1>
            </div>

            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="text-lg mb-6">
                Última actualización: 19 de agosto de 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-blue-400" />
                  1. Información que Recopilamos
                </h2>
                <p>
                  En AlxJackson Entertainment recopilamos la siguiente información para brindar nuestros servicios:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Información Personal:</strong> Nombre, email, teléfono, dirección</li>
                  <li><strong>Información del Evento:</strong> Fecha, ubicación, tipo de celebración, número de invitados</li>
                  <li><strong>Información de Pago:</strong> Datos necesarios para procesar pagos (procesados de forma segura)</li>
                  <li><strong>Información Técnica:</strong> IP, navegador, dispositivo (para mejorar la experiencia)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-purple-400" />
                  2. Cómo Usamos su Información
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Procesar y confirmar reservaciones de eventos</li>
                  <li>Comunicarnos sobre detalles del evento y actualizaciones</li>
                  <li>Generar códigos QR únicos de confirmación</li>
                  <li>Procesar pagos de forma segura</li>
                  <li>Mejorar nuestros servicios y experiencia del usuario</li>
                  <li>Enviar recordatorios y seguimiento post-evento</li>
                  <li>Cumplir con obligaciones legales y fiscales</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-yellow-400" />
                  3. Protección de Datos
                </h2>
                <p>
                  Implementamos medidas de seguridad robustas para proteger su información:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Encriptación:</strong> Todos los datos se transmiten usando SSL/TLS</li>
                  <li><strong>Autenticación:</strong> Sistema seguro de login con Supabase Auth</li>
                  <li><strong>Base de Datos:</strong> PostgreSQL con Row Level Security (RLS)</li>
                  <li><strong>Acceso Limitado:</strong> Solo personal autorizado puede acceder a los datos</li>
                  <li><strong>Respaldos:</strong> Copias de seguridad regulares y seguras</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Compartir Información</h2>
                <p>
                  NO vendemos, alquilamos o compartimos su información personal con terceros, excepto en los siguientes casos:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Proveedores de Servicios:</strong> Procesadores de pago, servicios de email (bajo estrictos acuerdos de confidencialidad)</li>
                  <li><strong>Requerimientos Legales:</strong> Cuando sea requerido por ley o autoridades competentes</li>
                  <li><strong>Protección de Derechos:</strong> Para proteger nuestros derechos, propiedad o seguridad</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Sus Derechos</h2>
                <p>
                  Usted tiene los siguientes derechos sobre su información personal:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Acceso:</strong> Solicitar una copia de sus datos personales</li>
                  <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
                  <li><strong>Eliminación:</strong> Solicitar la eliminación de sus datos (sujeto a obligaciones legales)</li>
                  <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                  <li><strong>Oposición:</strong> Oponerse al procesamiento de sus datos en ciertos casos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies y Tecnologías Similares</h2>
                <p>
                  Utilizamos cookies y tecnologías similares para:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Mantener su sesión activa</li>
                  <li>Recordar sus preferencias</li>
                  <li>Analizar el uso de la plataforma</li>
                  <li>Mejorar la funcionalidad del sitio</li>
                </ul>
                <p className="mt-4">
                  Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Retención de Datos</h2>
                <p>
                  Conservamos su información personal durante el tiempo necesario para:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Cumplir con los propósitos para los que fue recopilada</li>
                  <li>Cumplir con obligaciones legales y fiscales (mínimo 5 años)</li>
                  <li>Resolver disputas y hacer cumplir nuestros acuerdos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Menores de Edad</h2>
                <p>
                  Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente 
                  información personal de menores de 13 años sin el consentimiento de los padres.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Cambios a esta Política</h2>
                <p>
                  Podemos actualizar esta política de privacidad ocasionalmente. Los cambios significativos serán 
                  notificados por email o mediante aviso prominente en la plataforma.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Contacto</h2>
                <p>
                  Para preguntas sobre esta política de privacidad o para ejercer sus derechos:
                </p>
                <ul className="list-none mt-4 space-y-2">
                  <li>📧 Email: privacy@alxjackson.com</li>
                  <li>📱 WhatsApp: +52 55 1234 5678</li>
                  <li>🌐 Web: alxjackson-eventos.vercel.app</li>
                  <li>📍 Responsable de Datos: AlxJackson Entertainment</li>
                </ul>
              </section>

              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 mt-8">
                <p className="text-center text-green-300 font-medium">
                  Su privacidad es importante para nosotros. Nos comprometemos a proteger y respetar su información personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
