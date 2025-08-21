import { Music, Mail, Shield, Code, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                  AlxJackson
                </h3>
                <p className="text-xs text-muted-foreground">Entertainment Platform</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Plataforma especializada en entretenimiento y shows en vivo. 
              Llevamos la magia del espectáculo a tu evento.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Fiestas Infantiles</li>
              <li>Bodas & XV Años</li>
              <li>Eventos Corporativos</li>
              <li>Clubes & Bares</li>
              <li>Shows Temáticos</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/terms" className="hover:text-purple-400 transition-colors">Términos y Condiciones</Link></li>
              <li><Link to="/privacy" className="hover:text-purple-400 transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/cancellation" className="hover:text-purple-400 transition-colors">Política de Cancelación</Link></li>
              <li><Link to="/faq" className="hover:text-purple-400 transition-colors">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                info@alxjackson.com
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                Código QR Verificado
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 AlxJackson. Todos los derechos reservados. 
            <span className="mx-2">|</span>
            Prohibida la redistribución sin autorización.
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <div className="text-center">
              <p className="text-white/80 mb-4">
                <strong>Desarrollado por:</strong> <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">DjWacko</span>
              </p>
              <p className="text-white/70 text-sm mb-4">
                Especialista en desarrollo de plataformas de entretenimiento | DJ & Developer
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
                <a 
                  href="https://wa.me/5215617184109" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors flex items-center justify-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm"
                >
                  Desarrollador e informes para contrataciones
                </a>
                <a 
                  href="https://twitter.com/DjWackoCDMX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm"
                >
                  Sígueme para proyectos y música
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};