import { Music, Mail, Shield, Phone, MessageCircle, Twitter, Code } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-purple-900/95 via-purple-800/90 to-pink-900/95 backdrop-blur-xl border-t border-purple-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  AlxJackson
                </h3>
                <p className="text-xs text-purple-200/80">Entertainment Platform</p>
              </div>
            </div>
            <p className="text-sm text-purple-100/70 leading-relaxed">
              Plataforma especializada en entretenimiento y shows en vivo. 
              Llevamos la magia del espectáculo a tu evento.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-purple-100">Servicios</h4>
            <ul className="space-y-2 text-sm text-purple-200/80">
              <li className="hover:text-purple-300 transition-colors cursor-pointer">Fiestas Infantiles</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">Bodas & XV Años</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">Eventos Corporativos</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">Clubes & Bares</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">Shows Temáticos</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-purple-100">Legal</h4>
            <ul className="space-y-2 text-sm text-purple-200/80">
              <li><Link to="/terms" className="hover:text-purple-300 transition-colors">Términos y Condiciones</Link></li>
              <li><Link to="/privacy" className="hover:text-purple-300 transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/cancellation" className="hover:text-purple-300 transition-colors">Política de Cancelación</Link></li>
              <li><Link to="/faq" className="hover:text-purple-300 transition-colors">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-purple-100">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-purple-200/80">
                <Mail className="w-4 h-4 text-purple-300" />
                info@alxjackson.com
              </div>
              <div className="flex items-center gap-2 text-sm text-purple-200/80">
                <Shield className="w-4 h-4 text-purple-300" />
                Código QR Verificado
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section - KaroVicious Style */}
        <div className="mt-12 mb-8">
          <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-xl font-bold text-center text-purple-100 mb-6">
              📞 Información de Contacto
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Digital Contact */}
              <div className="space-y-4">
                <h4 className="text-purple-200 font-semibold flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contacto Digital
                </h4>
                <div className="space-y-2 text-purple-100/80">
                  <p>📧 contacto@alxjackson.com</p>
                  <p>📱 +52 722 123 4567</p>
                  <div className="flex items-center gap-2">
                    <Twitter className="w-4 h-4 text-blue-400" />
                    <span>Sígueme</span>
                  </div>
                  <a 
                    href="https://wa.me/525617184109" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp AlxJackson
                  </a>
                </div>
              </div>

              {/* Physical Location */}
              <div className="space-y-4">
                <h4 className="text-purple-200 font-semibold flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Ubicación Física
                </h4>
                <div className="space-y-1 text-purple-100/80">
                  <p>📍 Ciudad Colón #25</p>
                  <p>Moderna de la Cruz</p>
                  <p>50180 Toluca de Lerdo, Méx.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-purple-200/70 text-center md:text-left">
              © 2024 AlxJackson. Todos los derechos reservados.
              <span className="mx-2">|</span>
              Prohibida la redistribución sin autorización.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/525617184109" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
                title="WhatsApp AlxJackson"
              >
                📱 WhatsApp AlxJackson
              </a>
              <span className="text-purple-300">🤝 Conéctate con nosotros</span>
            </div>
          </div>

          {/* Developer Section - Fixed Contrast */}
          <div className="mt-8 pt-6 border-t border-purple-500/20">
            <div className="flex flex-col items-center gap-4">
              {/* Developer Badge */}
              <div className="bg-gradient-to-r from-purple-700/80 to-pink-700/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-purple-400/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DJ</span>
                  </div>
                  <div>
                    <p className="text-purple-100 font-semibold">DjWacko</p>
                    <p className="text-purple-200/80 text-xs">© 2024 AlxJackson. Todos los derechos reservados.</p>
                  </div>
                </div>
              </div>

              {/* Developer Info */}
              <div className="text-center">
                <p className="text-white text-sm mb-2 font-medium">
                  Plataforma exclusiva para adultos (+18)
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                  <span className="text-white font-semibold">🎵 Desarrollado con pasión y tecnología de vanguardias</span>
                  <div className="flex items-center gap-4">
                    <a 
                      href="https://wa.me/525617184109" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-600/20 hover:bg-green-600/30 text-green-300 px-3 py-1 rounded-full transition-colors border border-green-500/30 flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Developer
                    </a>
                    <a 
                      href="https://twitter.com/DjWackoCDMX" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full transition-colors border border-blue-500/30 flex items-center gap-2"
                    >
                      <Twitter className="w-4 h-4" />
                      Sígueme
                    </a>
                  </div>
                </div>
                <p className="text-white/90 text-xs mt-2 font-medium">
                  ⭐ Creamos experiencias digitales únicas para comunidades exclusivas ⭐
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};