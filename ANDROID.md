# Configuración para Android - AlxJackson Eventos

## Requisitos previos

1. **Android Studio** instalado
2. **Java Development Kit (JDK) 11 o superior**
3. **Android SDK** configurado

## Pasos para generar la aplicación Android

### 1. Construir la aplicación web
```bash
npm run build
```

### 2. Inicializar Capacitor (solo la primera vez)
```bash
npx cap init
```

### 3. Agregar la plataforma Android
```bash
npx cap add android
```

### 4. Sincronizar archivos
```bash
npx cap sync android
```

### 5. Abrir en Android Studio
```bash
npx cap open android
```

## Scripts disponibles

- `npm run cap:init` - Inicializar Capacitor
- `npm run cap:add:android` - Agregar plataforma Android
- `npm run cap:sync` - Sincronizar cambios
- `npm run cap:run:android` - Ejecutar en Android
- `npm run cap:build` - Construir y sincronizar

## Configuración del archivo capacitor.config.ts

El archivo ya está configurado con:
- **App ID**: `com.alexjackson.eventos`
- **App Name**: `AlxJackson Eventos`
- **Web Directory**: `dist`
- **Android Scheme**: `https`

## Notas importantes

- Asegúrate de tener las variables de entorno de Supabase configuradas
- El proyecto usa Vite como bundler
- La aplicación está optimizada para dispositivos móviles con Tailwind CSS
