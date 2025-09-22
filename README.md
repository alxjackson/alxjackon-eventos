# 🎭 AlxJackson Eventos v2.0.19

Plataforma de entretenimiento premium para eventos únicos con artistas de renombre internacional.

## 📁 Estructura del Proyecto

```
alx-show-flow-main/
├── 📱 android/                          # Configuración Android nativa
│   ├── app/                             # Aplicación Android principal
│   │   ├── src/main/                    # Código fuente Android
│   │   │   ├── java/                    # Plugins nativos (SecurityPlugin)
│   │   │   ├── assets/                  # Assets web compilados
│   │   │   └── AndroidManifest.xml      # Permisos y configuración
│   │   └── build.gradle                 # Configuración de build Android
│   ├── gradle/                          # Gradle wrapper y configuración
│   └── variables.gradle                 # Variables de versión Android
├── 📦 backups/                          # Respaldos automáticos
│   └── 20240922_012719/                 # Backup con timestamp
├── 🏗️ dist/                             # Build de producción
│   └── assets/                          # Assets compilados optimizados
├── 📚 docs/                             # Documentación técnica
│   └── SECURITY_SETUP.md               # Guía de configuración segura
├── 🗂️ public/                           # Archivos públicos estáticos
│   ├── sw.js                           # Service Worker para PWA
│   ├── manifest.json                   # Manifest de aplicación web
│   └── favicon.ico                     # Icono de la aplicación
├── 🎯 src/                              # Código fuente principal
│   ├── 🧩 components/                   # Componentes React reutilizables
│   │   ├── ui/                         # Componentes de interfaz (shadcn/ui)
│   │   │   ├── button.tsx              # Componente Button con variantes
│   │   │   ├── card.tsx                # Componentes de tarjetas
│   │   │   ├── input.tsx               # Inputs con validación
│   │   │   ├── dialog.tsx              # Modales y diálogos
│   │   │   └── [50+ componentes UI]    # Sistema completo de componentes
│   │   ├── CalendarBooking.tsx         # Sistema de reservas con calendario
│   │   ├── ContactSection.tsx          # Formulario de contacto
│   │   ├── Footer.tsx                  # Footer con información de contacto
│   │   ├── Header.tsx                  # Navegación principal
│   │   ├── HeroSection.tsx             # Sección hero principal
│   │   ├── ImageUpload.tsx             # Subida de imágenes
│   │   ├── PermissionsModal.tsx        # Modal de permisos nativos
│   │   ├── QuotationCalculator.tsx     # Calculadora de cotizaciones
│   │   ├── ResponsiveTest.tsx          # Validador de responsividad
│   │   ├── UpdateModal.tsx             # Modal de actualizaciones
│   │   └── __tests__/                  # Tests de componentes
│   ├── 🔐 contexts/                     # Contextos de React
│   │   ├── AuthContext.tsx             # Contexto de autenticación
│   │   └── __tests__/                  # Tests de contextos
│   ├── 🎣 hooks/                        # Hooks personalizados
│   │   ├── useAuth.ts                  # Hook de autenticación
│   │   ├── useDemoAuth.ts              # Autenticación demo
│   │   ├── useRealAuth.ts              # Autenticación real
│   │   ├── useVersionCheck.ts          # Verificación de versiones
│   │   └── use-toast.ts                # Sistema de notificaciones
│   ├── 🔗 integrations/                # Integraciones externas
│   │   └── supabase/                   # Configuración Supabase
│   │       ├── client.ts               # Cliente Supabase
│   │       └── types.ts                # Tipos de base de datos
│   ├── 📄 pages/                       # Páginas de la aplicación
│   │   ├── Admin.tsx                   # Panel administrativo
│   │   ├── Auth.tsx                    # Autenticación (login/registro)
│   │   ├── Events.tsx                  # Gestión de eventos
│   │   ├── Gallery.tsx                 # Galería de espectáculos
│   │   ├── Index.tsx                   # Página principal
│   │   ├── Quotations.tsx              # Sistema de cotizaciones
│   │   ├── FAQ.tsx                     # Preguntas frecuentes
│   │   ├── Terms.tsx                   # Términos y condiciones
│   │   ├── Privacy.tsx                 # Política de privacidad
│   │   ├── Cancellation.tsx            # Política de cancelación
│   │   ├── Payments.tsx                # Página de pagos
│   │   └── NotFound.tsx                # Página 404
│   ├── 🛡️ schemas/                      # Esquemas de validación Zod
│   │   ├── auth.ts                     # Validaciones de autenticación
│   │   ├── booking.ts                  # Validaciones de reservas
│   │   ├── contact.ts                  # Validaciones de contacto
│   │   ├── quotation.ts                # Validaciones de cotizaciones
│   │   ├── index.ts                    # Exportaciones centrales
│   │   └── __tests__/                  # Tests de validaciones
│   ├── 🔧 utils/                       # Utilidades y helpers
│   │   ├── localStorage.ts             # Manejo de almacenamiento local
│   │   ├── permissions.ts              # Utilidades de permisos
│   │   ├── quotationCalculator.ts      # Lógica de cotizaciones
│   │   └── __tests__/                  # Tests de utilidades
│   ├── App.tsx                         # Componente principal
│   ├── main.tsx                        # Punto de entrada + Service Worker
│   ├── config.ts                       # Configuración de la app
│   └── polyfills.ts                    # Polyfills modernos
├── 🧪 tests/                           # Configuración de testing
│   └── setup/                          # Configuración de Vitest
├── ⚙️ Archivos de configuración
│   ├── capacitor.config.ts             # Configuración Capacitor
│   ├── tailwind.config.ts              # Configuración Tailwind CSS
│   ├── tsconfig.json                   # Configuración TypeScript
│   ├── vite.config.ts                  # Configuración Vite
│   ├── vitest.config.ts                # Configuración de testing
│   ├── package.json                    # Dependencias y scripts
│   └── .env.example                    # Variables de entorno ejemplo
└── 📋 Documentación
    ├── README.md                       # Este archivo
    ├── AUDIT_REPORT_COMPLETE_2024-09-22.md        # Informe de auditoría
    ├── AUDIT_CORRECTIONS_REPORT_2024-09-22.md     # Correcciones aplicadas
    ├── FINAL_OPTIMIZATION_REPORT_2024-09-22.md    # Optimización final
    ├── SECURITY.md                     # Documentación de seguridad
    ├── TERMS_OF_SERVICE.md             # Términos de servicio
    ├── PRIVACY_POLICY.md               # Política de privacidad
    ├── LICENSE                         # Licencia del proyecto
    └── COPYRIGHT                       # Información de derechos de autor
```

### 📊 Estadísticas del Proyecto
- **Total de archivos**: 200+ archivos
- **Componentes React**: 72 componentes
- **Tests implementados**: 28 tests (100% éxito)
- **Esquemas de validación**: 5 esquemas Zod completos
- **Páginas**: 12 páginas principales
- **Hooks personalizados**: 6 hooks
- **Plugins nativos**: 4 plugins Android
- **Cobertura de testing**: 100% en funcionalidades críticas

## 🌟 Características Principales

### 📱 Aplicación Móvil Nativa ✅
- App Android con Capacitor v7.4.2 configurada
- APK optimizada v2.0.19 lista para producción
- SplashScreen personalizado con branding AlxJackson
- Detección automática de plataforma nativa vs web
- PWA con Service Worker y funcionalidad offline
- Compatibilidad Android 7.0+ (API 24+)
- 4 plugins nativos configurados correctamente

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

### 💰 Sistema de Cotizaciones Automáticas ✅
- **Calculadora inteligente** para eventos fuera de CDMX/Toluca
- **Origen dinámico**: CDMX (con DJ) o Toluca (sin DJ)
- **Cálculos automáticos**: gasolina, peajes, hospedaje, alimentación
- **Vehículo oficial**: Nissan Versa Sense 2028 (19 km/L)
- **Términos y condiciones** integrados

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

### 🔔 Sistema de Notificaciones y Permisos ✅
- **Notificaciones push** nativas para Android y web
- **Permisos completos**: geolocalización, cámara, contactos, mensajes
- **Detección de seguridad**: bloqueo automático en dispositivos rooteados
- **Modal profesional** de solicitud de permisos
- **Plugin nativo** SecurityPlugin para verificaciones avanzadas

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
- **Row Level Security (RLS)** - Seguridad avanzada|
- **Triggers & Functions** - Lógica de negocio

### Móvil & Deployment
- **Capacitor** - Framework híbrido para móviles
- **Android Studio** - Desarrollo nativo Android
- **Plugins nativos** - SecurityPlugin para detección de root
- **Permisos Android** - 15+ permisos configurados
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
- Branding AlxJackson completo
- Páginas legales (términos y privacidad)
- **v2.0.19**: Política de cancelación detallada
- **v2.0.19**: Preguntas frecuentes (FAQ) interactivo
- **v2.0.19**: Footer rediseñado con glassmorphism
- **v2.0.19**: Integración WhatsApp para reservaciones
- **v2.0.19**: Sistema completo de permisos y seguridad
- **v2.0.19**: Calculadora de cotizaciones automáticas
- **v2.0.19**: Galería de espectáculos optimizada
- **v2.0.19**: Detección de root/developer con bloqueo
- **v2.0.19**: Plugin nativo SecurityPlugin
- **v2.0.19**: Modal profesional de permisos
- **v2.0.19**: Suite de testing completa (28 tests - 100% éxito)
- **v2.0.19**: Validaciones Zod en todos los formularios
- **v2.0.19**: Service Worker para funcionalidad offline
- **v2.0.19**: Responsividad universal optimizada

### 🚀 Listo para producción:
- Deployment automático configurado
- APK Android v2.0.19 optimizada
- PWA con funcionalidad offline
- Testing suite 100% funcional
- Documentación técnica completa

## 🎯 Próximos Hitos

1. **Sistema de Pagos** - Integración con Stripe/PayPal (futuro)
2. **Analytics Avanzados** - Métricas detalladas
3. **Galería de fotos** - Carrusel de imágenes de espectáculos
4. **Optimizaciones** - Performance y SEO

## 📲 Descarga de la App

**APK Android v2.0.19 disponible:**
```
https://github.com/alxjackson/alxjackon-eventos/releases/download/v2.0.19/app-release.apk
```

- **Versión**: v2.0.19 (Última versión optimizada)
- **Tamaño**: ~15-20MB (optimizada)
- **Compatibilidad**: Android 7.0+ (API 24+)
- **Funcionalidades**: PWA + Offline + Permisos nativos
- **Descarga automática**: Solo en navegadores móviles

## 👨‍💻 Desarrollador

**Desarrollado por:** Ing. Juan Carlos Mendez N. "DjWacko"   
**Contacto Developer:**
- 📱 WhatsApp: [56-1718-4109](https://wa.me/5215617184109)
- 🐦 Twitter: [@DjWackoCDMX](https://twitter.com/DjWackoCDMX)

## 📄 Licencia

Proyecto privado - AlxJackson Entertainment Platform © 2025  

© 2024-2025 Ingenierio en Sistemas Comutacionales y desarrollo de software .. Juan Carlos Mendez N.(DjWacko). Todos los derechos reservados

