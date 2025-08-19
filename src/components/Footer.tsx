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
              <li>Política de Cancelación</li>
              <li>Preguntas Frecuentes</li>
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
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Desarrollado por{" "}
              <span className="text-accent font-medium">DjWacko</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/5215617184109" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: 56-1718-4109
              </a>
              <a 
                href="https://twitter.com/DjWackoCDMX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                🐦 @DjWackoCDMX
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};