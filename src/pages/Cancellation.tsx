import { ArrowLeft, Clock, AlertCircle, RefreshCw, Phone, MessageCircle, Home, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Cancellation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
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

          <Card className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border-white/30 shadow-2xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">Política de Cancelación</h1>
                  <p className="text-purple-200/80 text-sm mt-1">AlxJackson Entertainment Platform</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
          
          {/* Introducción */}
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">Información Importante</h2>
                  <p className="text-white leading-relaxed font-medium">
                    En AlxJackson Entertainment entendemos que pueden surgir imprevistos. 
                    Esta política está diseñada para ser justa tanto para nuestros clientes como para nuestros artistas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Política de Cancelación por Tiempo */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-green-800/50 border-green-400/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-green-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">30+ Días Antes</h3>
                  <p className="text-base text-white mb-4 font-semibold">Cancelación con 30 días o más de anticipación</p>
                  <div className="bg-green-600/40 rounded-lg p-4 border border-green-400/30">
                    <p className="text-white font-bold text-lg">100% Reembolso</p>
                    <p className="text-green-100 mt-1">Sin penalización</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-800/50 border-yellow-400/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">15-29 Días Antes</h3>
                  <p className="text-base text-white mb-4 font-semibold">Cancelación entre 15 y 29 días</p>
                  <div className="bg-yellow-600/40 rounded-lg p-4 border border-yellow-400/30">
                    <p className="text-white font-bold text-lg">75% Reembolso</p>
                    <p className="text-yellow-100 mt-1">25% gastos administrativos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-800/50 border-red-400/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-red-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Menos de 15 Días</h3>
                  <p className="text-base text-white mb-4 font-semibold">Cancelación con menos de 15 días</p>
                  <div className="bg-red-600/40 rounded-lg p-4 border border-red-400/30">
                    <p className="text-white font-bold text-lg">50% Reembolso</p>
                    <p className="text-red-100 mt-1">50% gastos de preparación</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Casos Especiales */}
          <Card className="bg-blue-900/30 border-blue-500/30">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                <RefreshCw className="w-6 h-6" />
                Casos Especiales y Excepciones
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">🏥 Emergencias Médicas</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Certificado médico requerido</li>
                    <li>• 100% reembolso garantizado</li>
                    <li>• Opción de reprogramación sin costo</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">🌦️ Condiciones Climáticas</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Eventos al aire libre únicamente</li>
                    <li>• Reprogramación automática</li>
                    <li>• Sin penalizaciones aplicables</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">⚡ Fuerza Mayor</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Desastres naturales</li>
                    <li>• Restricciones gubernamentales</li>
                    <li>• 100% reembolso o reprogramación</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">🎭 Cancelación por Artista</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• 100% reembolso inmediato</li>
                    <li>• Artista sustituto disponible</li>
                    <li>• Compensación adicional del 10%</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Proceso de Cancelación */}
          <Card className="bg-purple-900/30 border-purple-500/30">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-purple-400 mb-6">Proceso de Cancelación</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-white">Contacto Inmediato</h3>
                    <p className="text-gray-300">Notifica tu cancelación lo antes posible por WhatsApp o teléfono</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-white">Documentación</h3>
                    <p className="text-gray-300">Proporciona el motivo de cancelación y documentos si aplica</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-white">Evaluación</h3>
                    <p className="text-gray-300">Revisamos tu caso y determinamos el reembolso aplicable</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="font-semibold text-white">Procesamiento</h3>
                    <p className="text-gray-300">El reembolso se procesa en 5-7 días hábiles</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contacto para Cancelaciones */}
          <Card className="bg-gradient-to-r from-green-800/60 to-blue-800/60 border-green-400/40 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">¿Necesitas Cancelar un Evento?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
                <Button 
                  onClick={() => window.open('https://wa.me/525617184109', '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Alex - WhatsApp
                </Button>
                <Button 
                  onClick={() => window.open('tel:+525617184109', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Soporte - Llamar
                </Button>
                <Button 
                  onClick={() => window.open('https://wa.me/525617184109', '_blank')}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Desarrollador
                </Button>
              </div>
              <p className="text-center text-white/90 mt-6 text-base font-medium">
                📅 Horario de atención: Lunes a Domingo 9:00 AM - 10:00 PM
              </p>
            </CardContent>
          </Card>

          {/* Nota Legal */}
          <Card className="bg-gradient-to-r from-gray-900/95 to-purple-900/95 border-purple-400/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <p className="mb-6 text-white text-base font-medium leading-relaxed">
                  Esta política de cancelación forma parte de nuestros <Link to="/terms" className="text-purple-300 hover:text-purple-200 underline font-semibold">términos y condiciones</Link>. 
                  Al contratar nuestros servicios, aceptas estas condiciones.
                </p>
                <p className="text-white text-lg font-bold mb-4">
                  <strong>AlxJackson Entertainment</strong> - Desarrollado por <span className="text-purple-300 font-semibold">DjWacko</span>
                </p>
                <div className="bg-black/40 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row justify-center gap-4 text-base font-semibold">
                    <span className="text-green-300 flex items-center justify-center gap-2">
                      📱 <span className="text-white">WhatsApp:</span> 56-1718-4109
                    </span>
                    <span className="text-blue-300 flex items-center justify-center gap-2">
                      🐦 <span className="text-white">Twitter:</span> @DjWackoCDMX
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cancellation;
