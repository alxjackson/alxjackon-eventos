# 📱 Configuración Android - AlxJackson Eventos

## ✅ Estado Actual
**APK Generada y Lista**: v1.1.0 disponible para descarga

## 🔧 Requisitos Previos

1. **Android Studio** instalado (Arctic Fox o superior)
2. **Java Development Kit (JDK) 11 o superior**
3. **Android SDK** configurado (API Level 24+)
4. **Node.js** 18+ y npm

## 🚀 Comandos de Desarrollo

### Desarrollo Rápido
```bash
# Build completo y sincronización
npm run cap:build

# Ejecutar en dispositivo/emulador
npm run cap:run:android

# Solo sincronizar cambios
npm run cap:sync
```

### Comandos Individuales
```bash
# 1. Construir aplicación web
npm run build

# 2. Sincronizar con Android
npx cap sync android

# 3. Abrir en Android Studio
npx cap open android
```

## ⚙️ Configuración Capacitor

**Archivo `capacitor.config.ts` configurado:**
```typescript
{
  appId: 'com.alexjackson.eventos',
  appName: 'AlxJackson Eventos',
  webDir: 'dist',
  server: { androidScheme: 'https' },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#000000"
    }
  }
}
```

## 📲 APK Disponible

**Descarga directa:**
```
https://github.com/alxjackson/alxjackon-eventos/releases/download/v.1.1.0/app-release.apk
```

**Características de la APK:**
- **Versión**: v1.1.0
- **Tamaño**: ~8MB
- **Compatibilidad**: Android 7.0+ (API 24+)
- **Arquitectura**: Universal (ARM64, ARM, x86)

## 🎨 Funcionalidades Móviles

### Detección de Plataforma
- Automática distinción entre web y app nativa
- WelcomeModal adaptado para cada plataforma
- Descarga APK solo visible en navegadores móviles

### SplashScreen Personalizado
- Duración: 2 segundos
- Fondo negro con branding AlxJackson
- Transición suave a la aplicación

### Optimizaciones Móviles
- Interfaz responsive con Tailwind CSS
- Gestos táctiles optimizados
- Performance mejorada para dispositivos móviles

## 🔐 Variables de Entorno

Configurar `.env` con credenciales de Supabase:
```env
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

## 🛠️ Troubleshooting

### Error de Build
```bash
# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run cap:build
```

### Error de Sincronización
```bash
# Forzar sincronización completa
npx cap sync android --force
```

### Problemas de Android Studio
1. Verificar SDK instalado (API 24+)
2. Configurar ANDROID_HOME
3. Aceptar licencias: `sdkmanager --licenses`

## 📊 Estado de Desarrollo

- ✅ **Capacitor v7.4.2** configurado
- ✅ **APK generada** y funcional
- ✅ **SplashScreen** personalizado
- ✅ **Detección de plataforma** implementada
- ✅ **Scripts npm** optimizados
- ✅ **Documentación** completa

**La aplicación Android está 100% lista para distribución.**
