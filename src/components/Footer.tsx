import { Music, Mail, Shield, Code } from "lucide-react";

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
              <li>Términos y Condiciones</li>
              <li>Política de Privacidad</li>
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
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code className="w-4 h-4" />
            Desarrollado por{" "}
            <span className="text-accent font-medium">ComplicesConectaSw</span>
          </div>
        </div>
      </div>
    </footer>
  );
};