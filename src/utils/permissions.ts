import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { Geolocation } from '@capacitor/geolocation';
import { Camera } from '@capacitor/camera';
import { Device } from '@capacitor/device';

export interface PermissionStatus {
  notifications: boolean;
  geolocation: boolean;
  camera: boolean;
  contacts: boolean;
  isSecure: boolean;
  deviceInfo?: any;
}

// Detectar si el dispositivo tiene root o está en modo desarrollador
export async function checkDeviceSecurity(): Promise<{ isSecure: boolean; reason?: string }> {
  if (!Capacitor.isNativePlatform()) {
    return { isSecure: true }; // En web siempre es seguro
  }

  try {
    const deviceInfo = await Device.getInfo();
    
    // Verificar si está en modo desarrollador (Android)
    if (deviceInfo.platform === 'android') {
      // En producción, aquí se implementarían checks más robustos
      // Por ahora simulamos la detección
      const isDeveloperMode = false; // Placeholder - requiere plugin nativo
      const isRooted = false; // Placeholder - requiere plugin nativo
      
      if (isDeveloperMode) {
        return { 
          isSecure: false, 
          reason: 'Modo desarrollador detectado. Desactiva las opciones de desarrollador para continuar.' 
        };
      }
      
      if (isRooted) {
        return { 
          isSecure: false, 
          reason: 'Dispositivo con root detectado. La aplicación no puede ejecutarse en dispositivos rooteados por seguridad.' 
        };
      }
    }
    
    return { isSecure: true };
  } catch (error) {
    console.error('Error checking device security:', error);
    return { isSecure: true }; // En caso de error, permitir continuar
  }
}

// Función para solicitar permisos de notificaciones (solo Android)
export const requestNotificationPermission = async (): Promise<boolean> => {
  try {
    if (Capacitor.isNativePlatform()) {
      // Android nativo
      const result = await PushNotifications.requestPermissions();
      return result.receive === 'granted';
    } else {
      // Web/PC - No soportado
      console.log('Notification permissions not supported on web platform');
      return false;
    }
  } catch (error) {
    console.error('Error requesting notification permissions:', error);
    return false;
  }
}

// Solicitar permisos de geolocalización (solo Android)
export async function requestGeolocationPermissions(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) {
    // Web/PC - No soportado
    console.log('Geolocation permissions not supported on web platform');
    return false;
  }

  try {
    const permStatus = await Geolocation.checkPermissions();
    
    if (permStatus.location === 'prompt') {
      const result = await Geolocation.requestPermissions();
      return result.location === 'granted';
    }
    
    return permStatus.location === 'granted';
  } catch (error) {
    console.error('Error requesting geolocation permissions:', error);
    return false;
  }
}

// Solicitar permisos de cámara (solo Android)
export async function requestCameraPermissions(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) {
    // Web/PC - No soportado
    console.log('Camera permissions not supported on web platform');
    return false;
  }

  try {
    const permStatus = await Camera.checkPermissions();
    
    if (permStatus.camera === 'prompt') {
      const result = await Camera.requestPermissions();
      return result.camera === 'granted';
    }
    
    return permStatus.camera === 'granted';
  } catch (error) {
    console.error('Error requesting camera permissions:', error);
    return false;
  }
}

// Solicitar permisos de contactos (solo Android)
export async function requestContactsPermissions(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) {
    // Web/PC - No soportado
    console.log('Contacts permissions not supported on web platform');
    return false;
  }

  // Placeholder - en producción se implementaría con @capacitor-community/contacts
  try {
    // const permStatus = await Contacts.checkPermissions();
    // if (permStatus.contacts === 'prompt') {
    //   const result = await Contacts.requestPermissions();
    //   return result.contacts === 'granted';
    // }
    // return permStatus.contacts === 'granted';
    return true; // Simular éxito por ahora
  } catch (error) {
    console.error('Error requesting contacts permissions:', error);
    return false;
  }
}

// Verificar todos los permisos necesarios
export async function checkAllPermissions(): Promise<PermissionStatus> {
  const deviceSecurity = await checkDeviceSecurity();
  
  if (!deviceSecurity.isSecure) {
    throw new Error(deviceSecurity.reason || 'Dispositivo no seguro');
  }

  const [notifications, geolocation, camera, contacts] = await Promise.all([
    requestNotificationPermission(),
    requestGeolocationPermissions(),
    requestCameraPermissions(),
    requestContactsPermissions()
  ]);

  return {
    notifications,
    geolocation,
    camera,
    contacts,
    isSecure: deviceSecurity.isSecure,
    deviceInfo: Capacitor.isNativePlatform() ? await Device.getInfo() : null
  };
}

// Configurar notificaciones push
export async function setupPushNotifications(): Promise<void> {
  if (!Capacitor.isNativePlatform()) {
    return;
  }

  try {
    // Registrar para notificaciones push
    await PushNotifications.register();

    // Listener para cuando se recibe un token
    PushNotifications.addListener('registration', (token) => {
      console.log('Push registration success, token: ' + token.value);
      // Aquí se enviaría el token al servidor
    });

    // Listener para errores de registro
    PushNotifications.addListener('registrationError', (error) => {
      console.error('Error on registration: ' + JSON.stringify(error));
    });

    // Listener para notificaciones recibidas
    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      console.log('Push notification received: ', notification);
    });

    // Listener para cuando se toca una notificación
    PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
      console.log('Push notification action performed', notification.actionId, notification.inputValue);
    });

  } catch (error) {
    console.error('Error setting up push notifications:', error);
  }
}
