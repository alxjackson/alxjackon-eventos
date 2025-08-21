# 🎭 AlxJackson Eventos

Plataforma de entretenimiento premium para eventos únicos con artistas de renombre internacional.

## 🌟 Características Principales

### 📱 Aplicación Móvil Nativa ✅
- App Android con Capacitor v7.4.2 configurada
- APK generada y disponible para descarga (v1.1.1)
- SplashScreen personalizado con branding AlxJackson
- Detección automática de plataforma nativa vs web
- Descarga inteligente de APK (solo en navegadores móviles)
- Documentación completa para Android

### 🔐 Sistema de Autenticación Avanzado ✅
- Registro con confirmación de email personalizada
- Recuperación de contraseña segura
- Sesiones persistentes y seguras
- Templates de email con branding exclusivo

### 👥 Sistema de Roles Multi-nivel ✅
- **👑 Admin**: Control total del sistema, gestión de usuarios y eventos
- **🎭 Organizer**: Creación y gestión de eventos, moderación
- **💎 User**: Acceso a eventos, reservas y funciones básicas
- Asignación automática de roles para nuevos usuarios

### 📅 Gestión de Eventos y Reservas ✅
- Creación de eventos exclusivos con capacidad limitada
- Sistema de reservas con confirmación automática
- Horarios flexibles y gestión de disponibilidad
- Control de aforo y listas de espera

### 📧 Sistema de Emails Personalizados ✅
- Templates profesionales con branding AlxJackson
- WelcomeEmailTemplate - Bienvenida con gradients
- BookingConfirmationTemplate - Confirmación de reservas
- EventReminderTemplate - Recordatorios de eventos

### 📊 Dashboard Administrativo ✅
- Panel de control completo para administradores
- Gestión de usuarios y cambio de roles en tiempo real
- Gestión de eventos con estados (Draft/Active/Cancelled/Completed)
- Estadísticas en vivo (247 usuarios, 12 eventos, 89 reservas, $125,450)
- Configuración SMTP para envío de emails

### 🎨 Interfaz Profesional ✅
- Diseño moderno con glassmorphism y gradients
- Animaciones CSS personalizadas y loading states
- WelcomeModal con scroll, loading animation y descarga APK
- Páginas de autenticación profesionales
- Detección inteligente de plataforma (web/nativa)

## 💳 Roadmap Futuro

### Sistema de Pagos Premium
- Integración con Stripe/PayPal
- Membresías VIP y eventos exclusivos
- Anticipos y pagos completos
- Historial de transacciones
- **Nota**: Pendiente hasta obtener cuentas de pago verificadas

### 🔔 Notificaciones Push
- Alertas de eventos próximos
- Confirmaciones de reservas
- Mensajería en tiempo real

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** + **TypeScript** - UI moderna y tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Vite** - Build tool optimizado
- **Lucide React** - Iconografía moderna
- **Radix UI** - Componentes accesibles

### Backend & Base de Datos
- **Supabase** - Backend as a Service completo
- **PostgreSQL** - Base de datos relacional
- **Row Level Security (RLS)** - Seguridad avanzada
- **Triggers & Functions** - Lógica de negocio

### Móvil & Deployment
- **Capacitor** - Framework híbrido para móviles
- **Android Studio** - Desarrollo nativo Android
- **Vercel** - Hosting y deployment automático

## 📱 Comandos de Desarrollo

### Instalación
```bash
npm install
```

### Desarrollo local
```bash
npm run dev
```

### Build para producción
```bash
npm run build
```

### Aplicación móvil Android
```bash
npm run cap:build
npm run cap:run:android
```

### Sincronización Capacitor
```bash
npm run cap:sync
```

## 🔧 Configuración

1. **Variables de entorno**: Configurar `.env` con credenciales de Supabase
2. **Base de datos**: Ejecutar migraciones en Supabase
3. **Android**: Seguir instrucciones detalladas en `ANDROID.md`

## 📊 Estado del Proyecto

**Progreso actual: 100% completo ✅**

### ✅ Completado:
- Sistema de autenticación con Supabase
- Dashboard administrativo completo
- Templates de email profesionales rediseñados
- Componentes de UI responsivos
- Sistema de reservaciones con calendario
- Aplicación móvil con Capacitor
- Página de pagos con diseño premium
- Logo personalizado y favicon
- Branding DjWacko completo
- Páginas legales (términos y privacidad)
- **NUEVO**: Política de cancelación detallada
- **NUEVO**: Preguntas frecuentes (FAQ) interactivo
- Footer con contacto developer
- Integración WhatsApp para reservaciones
- **NUEVO**: Botón descarga APK optimizado
- **NUEVO**: Limpieza completa de archivos obsoletos

### 🚀 Listo para producción:
- Deployment en Vercel configurado
- APK Android disponible
- Email templates optimizados
- SEO y meta tags actualizados

## 🎯 Próximos Hitos

1. **Sistema de Pagos** - Integración con Stripe/PayPal (futuro)
2. **Notificaciones Push** - Alertas en tiempo real
3. **Analytics Avanzados** - Métricas detalladas
4. **Optimizaciones** - Performance y SEO

## 📲 Descarga de la App

**APK Android disponible:**
```
https://github.com/alxjackson/alxjackon-eventos/releases/download/v.1.1.1/app-release.apk
```

- **Versión**: v1.1.1
- **Tamaño**: ~8MB
- **Compatibilidad**: Android 7.0+
- **Descarga automática**: Solo en navegadores móviles

## 👨‍💻 Desarrollador

**Desarrollado por:** DjWacko  
**Contacto Developer:**
- 📱 WhatsApp: [56-1718-4109](https://wa.me/5215617184109)
- 🐦 Twitter: [@DjWackoCDMX](https://twitter.com/DjWackoCDMX)

## 📄 Licencia

Proyecto privado - AlxJackson Entertainment Platform © 2025  
**Desarrollado por DjWacko** - Todos los derechos reservados.
