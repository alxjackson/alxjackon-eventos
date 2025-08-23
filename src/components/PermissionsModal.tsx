import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Shield, 
  Bell, 
  MapPin, 
  Camera, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Smartphone
} from "lucide-react";
import { 
  checkAllPermissions, 
  setupPushNotifications, 
  PermissionStatus,
  checkDeviceSecurity 
} from "@/utils/permissions";

interface PermissionsModalProps {
  isOpen: boolean;
  onComplete: (success: boolean) => void;
}

export const PermissionsModal = ({ isOpen, onComplete }: PermissionsModalProps) => {
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<'security' | 'permissions' | 'complete'>('security');

  useEffect(() => {
    if (isOpen) {
      checkSecurity();
    }
  }, [isOpen]);

  const checkSecurity = async () => {
    setIsChecking(true);
    setError(null);
    
    try {
      const securityCheck = await checkDeviceSecurity();
      
      if (!securityCheck.isSecure) {
        setError(securityCheck.reason || 'Dispositivo no seguro detectado');
        setIsChecking(false);
        return;
      }
      
      setStep('permissions');
      await requestAllPermissions();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error de seguridad');
      setIsChecking(false);
    }
  };

  const requestAllPermissions = async () => {
    setIsChecking(true);
    
    try {
      const permissions = await checkAllPermissions();
      setPermissionStatus(permissions);
      
      // Configurar notificaciones push si están habilitadas
      if (permissions.notifications) {
        await setupPushNotifications();
      }
      
      setStep('complete');
      setIsChecking(false);
      
      // Auto-cerrar si todos los permisos están concedidos
      const allGranted = permissions.notifications && 
                        permissions.geolocation && 
                        permissions.camera && 
                        permissions.contacts;
      
      if (allGranted) {
        setTimeout(() => onComplete(true), 2000);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error solicitando permisos');
      setIsChecking(false);
    }
  };

  const retryPermissions = () => {
    setError(null);
    setStep('security');
    checkSecurity();
  };

  const skipPermissions = () => {
    onComplete(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-black/90 border border-white/20 shadow-2xl">
        <CardHeader className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            {step === 'security' ? (
              <Shield className="w-8 h-8 text-white" />
            ) : step === 'permissions' ? (
              <Smartphone className="w-8 h-8 text-white" />
            ) : (
              <CheckCircle className="w-8 h-8 text-white" />
            )}
          </div>
          <CardTitle className="text-white">
            {step === 'security' && 'Verificación de Seguridad'}
            {step === 'permissions' && 'Permisos de la Aplicación'}
            {step === 'complete' && 'Configuración Completa'}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Error Alert */}
          {error && (
            <Alert className="border-red-500/50 bg-red-500/10">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              <AlertDescription className="text-red-200">
                {error}
              </AlertDescription>
            </Alert>
          )}

          {/* Security Check */}
          {step === 'security' && (
            <div className="text-center space-y-4">
              <p className="text-gray-300">
                Verificando la seguridad del dispositivo...
              </p>
              {isChecking && (
                <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto" />
              )}
              {error && (
                <div className="space-y-4">
                  <p className="text-red-300 text-sm">
                    Para usar la aplicación, debes:
                  </p>
                  <ul className="text-red-200 text-sm space-y-2 text-left">
                    <li>• Desactivar el modo desarrollador</li>
                    <li>• Desinstalar herramientas de root</li>
                    <li>• Reiniciar el dispositivo</li>
                  </ul>
                  <Button 
                    onClick={() => window.location.reload()} 
                    variant="outline"
                    className="border-red-500/50 text-red-200 hover:bg-red-500/10"
                  >
                    Verificar Nuevamente
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Permissions List */}
          {step === 'permissions' && (
            <div className="space-y-4">
              <p className="text-gray-300 text-sm text-center">
                La aplicación necesita los siguientes permisos para funcionar correctamente:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">Notificaciones</p>
                      <p className="text-gray-400 text-xs">Alertas de eventos y actualizaciones</p>
                    </div>
                  </div>
                  {permissionStatus && (
                    permissionStatus.notifications ? 
                    <CheckCircle className="w-5 h-5 text-green-400" /> :
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-white font-medium">Ubicación</p>
                      <p className="text-gray-400 text-xs">Cálculo de distancias y cotizaciones</p>
                    </div>
                  </div>
                  {permissionStatus && (
                    permissionStatus.geolocation ? 
                    <CheckCircle className="w-5 h-5 text-green-400" /> :
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-white font-medium">Cámara</p>
                      <p className="text-gray-400 text-xs">Escaneo de códigos QR</p>
                    </div>
                  </div>
                  {permissionStatus && (
                    permissionStatus.camera ? 
                    <CheckCircle className="w-5 h-5 text-green-400" /> :
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="text-white font-medium">Contactos</p>
                      <p className="text-gray-400 text-xs">Compartir eventos con amigos</p>
                    </div>
                  </div>
                  {permissionStatus && (
                    permissionStatus.contacts ? 
                    <CheckCircle className="w-5 h-5 text-green-400" /> :
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                </div>
              </div>

              {isChecking && (
                <div className="text-center">
                  <div className="w-6 h-6 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Solicitando permisos...</p>
                </div>
              )}
            </div>
          )}

          {/* Complete Step */}
          {step === 'complete' && permissionStatus && (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-2">¡Configuración Completa!</h3>
                <p className="text-gray-300 text-sm">
                  La aplicación está lista para usar con todos los permisos necesarios.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <Badge variant={permissionStatus.notifications ? "default" : "destructive"}>
                  {permissionStatus.notifications ? "✓" : "✗"} Notificaciones
                </Badge>
                <Badge variant={permissionStatus.geolocation ? "default" : "destructive"}>
                  {permissionStatus.geolocation ? "✓" : "✗"} Ubicación
                </Badge>
                <Badge variant={permissionStatus.camera ? "default" : "destructive"}>
                  {permissionStatus.camera ? "✓" : "✗"} Cámara
                </Badge>
                <Badge variant={permissionStatus.contacts ? "default" : "destructive"}>
                  {permissionStatus.contacts ? "✓" : "✗"} Contactos
                </Badge>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            {step === 'complete' && (
              <Button 
                onClick={() => onComplete(true)} 
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Continuar
              </Button>
            )}
            
            {step === 'permissions' && !isChecking && (
              <>
                <Button 
                  onClick={retryPermissions} 
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  Reintentar
                </Button>
                <Button 
                  onClick={skipPermissions} 
                  variant="ghost"
                  className="flex-1 text-gray-400 hover:text-white hover:bg-white/10"
                >
                  Omitir
                </Button>
              </>
            )}
            
            {error && step === 'security' && (
              <Button 
                onClick={() => onComplete(false)} 
                variant="destructive"
                className="flex-1"
              >
                Salir de la App
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
