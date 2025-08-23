import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Sparkles, CheckCircle, AlertCircle } from "lucide-react";

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentVersion: string;
  newVersion: string;
  changelog: string[];
  downloadUrl: string;
}

export const UpdateModal = ({ 
  isOpen, 
  onClose, 
  currentVersion, 
  newVersion, 
  changelog,
  downloadUrl 
}: UpdateModalProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    window.open(downloadUrl, '_blank');
    
    // Simular descarga completada después de 3 segundos
    setTimeout(() => {
      setIsDownloading(false);
      onClose();
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-purple-900/95 via-purple-800/90 to-pink-900/95 backdrop-blur-xl border border-purple-500/20">
        <DialogHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            ¡Nueva Actualización Disponible!
          </DialogTitle>
          <DialogDescription className="text-purple-200/80">
            Una nueva versión de AlxJackson Eventos está lista para descargar
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Version Info */}
          <div className="flex items-center justify-between p-4 bg-purple-800/30 rounded-lg border border-purple-500/20">
            <div>
              <p className="text-sm text-purple-300">Versión Actual</p>
              <Badge variant="outline" className="text-purple-200 border-purple-400/50">
                v{currentVersion}
              </Badge>
            </div>
            <div className="text-purple-300">→</div>
            <div>
              <p className="text-sm text-purple-300">Nueva Versión</p>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                v{newVersion}
              </Badge>
            </div>
          </div>

          {/* Changelog */}
          <div className="space-y-3">
            <h4 className="font-semibold text-purple-100 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Novedades en esta versión:
            </h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {changelog.map((change, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-purple-200/80">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span>{change}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warning */}
          <div className="flex items-start gap-2 p-3 bg-amber-900/20 border border-amber-500/30 rounded-lg">
            <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-200/90">
              <p className="font-medium">Importante:</p>
              <p>Desinstala la versión anterior antes de instalar la nueva para evitar conflictos.</p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="border-purple-500/50 text-purple-300 hover:bg-purple-800/30"
          >
            Más tarde
          </Button>
          <Button 
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            {isDownloading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Descargando...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Descargar Ahora
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
