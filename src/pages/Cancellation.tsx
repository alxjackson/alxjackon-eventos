import { ArrowLeft, Clock, AlertCircle, RefreshCw, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Cancellation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Política de Cancelación
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          
          {/* Introducción */}
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">Información Importante</h2>
                  <p className="text-gray-300 leading-relaxed">
                    En AlxJackson Entertainment entendemos que pueden surgir imprevistos. 
                    Esta política está diseñada para ser justa tanto para nuestros clientes como para nuestros artistas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Política de Cancelación por Tiempo */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-green-900/30 border-green-500/30">
              <CardContent className="p-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-green-400 mb-2">30+ Días Antes</h3>
                  <p className="text-sm text-gray-300 mb-4">Cancelación con 30 días o más de anticipación</p>
                  <div className="bg-green-500/20 rounded-lg p-3">
                    <p className="text-green-300 font-semibold">100% Reembolso</p>
                    <p className="text-xs text-green-200 mt-1">Sin penalización</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-900/30 border-yellow-500/30">
              <CardContent className="p-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">15-29 Días Antes</h3>
                  <p className="text-sm text-gray-300 mb-4">Cancelación entre 15 y 29 días</p>
                  <div className="bg-yellow-500/20 rounded-lg p-3">
                    <p className="text-yellow-300 font-semibold">75% Reembolso</p>
                    <p className="text-xs text-yellow-200 mt-1">25% gastos administrativos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900/30 border-red-500/30">
              <CardContent className="p-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-red-400 mb-2">Menos de 15 Días</h3>
                  <p className="text-sm text-gray-300 mb-4">Cancelación con menos de 15 días</p>
                  <div className="bg-red-500/20 rounded-lg p-3">
                    <p className="text-red-300 font-semibold">50% Reembolso</p>
                    <p className="text-xs text-red-200 mt-1">50% gastos de preparación</p>
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
                  <h3 className="text-lg font-semibold text-white mb-3">Emergencias Médicas</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Certificado médico requerido</li>
                    <li>• 100% reembolso garantizado</li>
                    <li>• Opción de reprogramación sin costo</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Condiciones Climáticas</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Eventos al aire libre únicamente</li>
                    <li>• Reprogramación automática</li>
                    <li>• Sin penalizaciones aplicables</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Fuerza Mayor</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Desastres naturales</li>
                    <li>• Restricciones gubernamentales</li>
                    <li>• 100% reembolso o reprogramación</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Cancelación por Artista</h3>
                  <ul className="space-y-2 text-gray-300">
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
          <Card className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border-green-500/30">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-white mb-6 text-center">¿Necesitas Cancelar un Evento?</h2>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open('https://wa.me/5215512345678', '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp: +52 55 1234 5678
                </Button>
                <Button 
                  onClick={() => window.open('tel:+5215512345678', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar: +52 55 1234 5678
                </Button>
              </div>
              <p className="text-center text-gray-300 mt-4 text-sm">
                Horario de atención: Lunes a Domingo 9:00 AM - 10:00 PM
              </p>
            </CardContent>
          </Card>

          {/* Nota Legal */}
          <div className="text-center text-gray-400 text-sm">
            <p>
              Esta política de cancelación forma parte de nuestros términos y condiciones. 
              Al contratar nuestros servicios, aceptas estas condiciones.
            </p>
            <p className="mt-2">
              <strong>AlxJackson Entertainment</strong> - Desarrollado por DjWacko
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancellation;
