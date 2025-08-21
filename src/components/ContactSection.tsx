import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Contacto</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para tu <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Evento?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contáctanos para recibir una cotización personalizada y hacer de tu evento 
            una experiencia inolvidable
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Phone className="w-6 h-6 text-green-400" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Teléfono</h4>
                    <p className="text-gray-300">+52 729 235 5348</p>
                    <p className="text-gray-300">+52 56 1718 4109 (Soporte Técnico)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">alxjacksonanimacion@outlook.es</p>
                    <p className="text-gray-300">eventos@alxjackson.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Ubicación</h4>
                    <p className="text-gray-300">Servicio en toda la República Mexicana</p>
                    <p className="text-gray-300">Base: Toluca, Edo. Mex</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Horarios</h4>
                    <p className="text-gray-300">Lunes a Viernes: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-300">Sábados: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Domingos: Solo emergencias</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg p-6 border border-red-500/30">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-red-400" />
                Proceso de Reservación
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">1</div>
                  <p>Contacta y describe tu evento</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">2</div>
                  <p>Recibe cotización personalizada</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">3</div>
                  <p>Confirma fecha y realiza anticipo</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">4</div>
                  <p>Recibe tu código QR único</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Send className="w-6 h-6 text-purple-400" />
                Solicita tu Cotización
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                  <Input 
                    placeholder="Tu nombre completo"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono</label>
                  <Input 
                    placeholder="Tu número de teléfono"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Tipo de Evento</label>
                  <select className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white">
                    <option value="">Selecciona...</option>
                    <option value="boda">Boda</option>
                    <option value="xv">XV Años</option>
                    <option value="infantil">Fiesta Infantil</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="club">Club/Bar</option>
                    <option value="privado">Celebración Privada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Fecha del Evento</label>
                  <Input 
                    type="date"
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Artista Preferido</label>
                <select className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white">
                  <option value="">Selecciona...</option>
                  <option value="freddy">Freddy Mercury</option>
                  <option value="michael">Michael Jackson</option>
                  <option value="alex">Alex Vitor</option>
                  <option value="carmelo">Carmelo</option>
                  <option value="paul">Paul</option>
                  <option value="varios">Varios artistas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Detalles del Evento</label>
                <Textarea 
                  placeholder="Cuéntanos sobre tu evento: número de invitados, ubicación, duración deseada, etc."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3">
                <Send className="w-5 h-5 mr-2" />
                Enviar Solicitud
              </Button>

              <p className="text-sm text-gray-400 text-center">
                Te responderemos en menos de 24 horas con una cotización personalizada
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
