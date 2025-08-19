# 🎭 AlxJackson Eventos

Plataforma de entretenimiento premium para eventos únicos con artistas de renombre internacional.

## 🌟 Características Principales

### 🔐 Sistema de Autenticación Avanzado ✅
- Registro con confirmación de email personalizada
- Recuperación de contraseña segura
- Sesiones persistentes y seguras
- Context de autenticación completo

### 👥 Sistema de Roles Multi-nivel ✅
- **👑 Admin**: Control total del sistema, gestión de usuarios y eventos
- **🎭 Organizer**: Creación y gestión de eventos, moderación
- **💎 User**: Acceso a eventos, reservas y funciones básicas
- Asignación automática de roles para nuevos usuarios

### 🎨 Interfaz Profesional ✅
- Diseño moderno con glassmorphism y gradients
- Animaciones CSS personalizadas
- LoadingScreen con barra de progreso
- Modal de bienvenida interactivo
- Páginas de autenticación profesionales

### 📱 Aplicación Móvil ✅
- App Android con Capacitor configurada
- Scripts npm para desarrollo móvil
- SplashScreen personalizado
- Documentación completa para Android

## 🚧 En Desarrollo Activo

### 📅 Gestión de Eventos y Reservas 🔄
- Sistema de creación de eventos exclusivos
- Gestión de capacidad y aforo limitado
- Horarios flexibles y disponibilidad
- Control de listas de espera

### 📧 Sistema de Emails Personalizados 🔄
- Templates con branding AlxJackson
- Confirmaciones de registro y eventos
- Notificaciones automáticas
- SMTP personalizado

### 📊 Dashboard Administrativo 🔄
- Panel de control para administradores
- Gestión de usuarios y roles
- Estadísticas de eventos
- Reportes y métricas

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
4. **Email**: Configurar SMTP en Supabase (en desarrollo)

## 📊 Estado del Proyecto

**Completado: ~65%**
- ✅ Autenticación y roles implementados
- ✅ Frontend profesional completado
- ✅ Configuración móvil lista
- 🔄 Sistema de eventos en desarrollo
- 🔄 Dashboard admin en desarrollo
- 📋 Sistema de pagos planificado

## 🎯 Próximos Hitos

1. **Sistema de Eventos** - Creación y gestión completa
2. **Reservas y Capacidad** - Booking system funcional
3. **Dashboard Admin** - Panel de control completo
4. **Templates de Email** - Branding personalizado
5. **Sistema de Pagos** - Integración premium (futuro)

## 📄 Licencia

Proyecto privado - AlxJackson Entertainment Platform © 2025
