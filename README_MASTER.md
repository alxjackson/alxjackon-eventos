# 🎭 AlxJackson Eventos v2.0.19

Plataforma de **entretenimiento premium** para gestión de eventos exclusivos, con soporte web, móvil y Android nativo.  
Incluye sistema avanzado de autenticación, cotizaciones automáticas, dashboard administrativo y suite de auditoría técnica para mantener la calidad del proyecto.

---

## 🚀 Estado del Proyecto

- **Versión actual**: v2.0.19  
- **Release Notes**: [RELEASE_NOTES_v2.0.19.md](./RELEASE_NOTES_v2.0.19.md)  
- **Auditoría completa**: [AUDIT_REPORT_COMPLETE_2024-09-22.md](./docs/AUDIT_REPORT_COMPLETE_2024-09-22.md)  
- **Correcciones aplicadas**: [AUDIT_CORRECTIONS_REPORT_2024-09-22.md](./docs/AUDIT_CORRECTIONS_REPORT_2024-09-22.md)  
- **Optimización final**: [FINAL_OPTIMIZATION_REPORT_2024-09-22.md](./docs/FINAL_OPTIMIZATION_REPORT_2024-09-22.md)  
- **Estado**: ✅ Listo para producción

---

## 🌟 Características Principales

### 📱 Aplicación Nativa + Web
- App Android con **Capacitor v7.4.2** y APK optimizada lista para producción.  
- PWA con **Service Worker** y funcionalidad **offline**.  
- Compatibilidad garantizada en **Android 7.0+ (API 24+)** y navegadores modernos.  

### 🔐 Autenticación & Seguridad
- Registro con confirmación de email.  
- Recuperación de contraseña segura.  
- Sesiones persistentes con **JWT + Supabase (RLS)**.  
- Bloqueo automático en dispositivos rooteados.  

### 👥 Sistema de Roles Multi-nivel
- **👑 Admin**: Control total de usuarios y eventos.  
- **🎭 Organizer**: Creación y gestión de eventos.  
- **💎 User**: Acceso básico a reservas y eventos.  
- Asignación automática de roles para nuevos usuarios.  

### 📅 Gestión de Eventos y Reservas
- Creación de eventos exclusivos con capacidad limitada.  
- Reservas con confirmación automática.  
- Control de aforo, horarios y listas de espera.  

### 💰 Cotizaciones Automáticas
- **Calculadora inteligente** para eventos fuera de CDMX/Toluca.  
- **Cálculos automáticos**: gasolina, peajes, hospedaje, alimentación.  
- **Vehículo oficial**: Nissan Versa Sense 2028 (19 km/L).  

### 📊 Dashboard Administrativo
- Gestión de usuarios y roles en tiempo real.  
- Panel de control con métricas (usuarios, reservas, ingresos).  
- Configuración SMTP para envío de emails.  

### 🎨 Interfaz Profesional
- Diseño **glassmorphism + gradients**.  
- Animaciones CSS personalizadas.  
- WelcomeModal interactivo con descarga APK.  

---

## 📂 Arquitectura del Proyecto

```bash
alx-show-flow-main/
├── android/               # Configuración Android nativa
├── src/                   # Código fuente principal
│   ├── components/        # UI y componentes reutilizables
│   ├── contexts/          # Contextos React (Auth, Roles)
│   ├── hooks/             # Hooks personalizados
│   ├── integrations/      # Supabase y servicios externos
│   ├── pages/             # Páginas principales (Auth, Events, Quotations)
│   ├── schemas/           # Esquemas Zod de validación
│   └── utils/             # Helpers y lógica de negocio
├── tests/                 # Configuración Vitest
├── docs/                  # Documentación y auditorías
└── config files           # Tailwind, Capacitor, Vite, TS, etc.

📊 Estadísticas

200+ archivos.

72 componentes React.

12 páginas principales.

28 tests implementados (100% éxito).

5 esquemas Zod completos.

4 plugins nativos Android.

🔒 Auditorías y Calidad
📑 Informes Disponibles

Auditoría completa de seguridad y lógica.

Correcciones automáticas con backups.

Optimización final documentada.

📊 Resultados (v2.0.19)

✅ Validaciones Zod en todos los formularios.

✅ 28 tests unitarios/integración al 100%.

✅ Build estable y optimizado (4.6s, 1.36kB gzip).

✅ 0 errores TypeScript.

✅ Cobertura 100% en módulos críticos.

🛠️ Stack Tecnológico

Frontend: React 18 + TypeScript + Tailwind CSS + Vite

Backend: Supabase (PostgreSQL + RLS + Functions)

Móvil: Capacitor 7.4.2 + Android Studio + plugins nativos

Testing: Vitest + Testing Library + Coverage Reports

Infra: Vercel (hosting) + GitHub Actions (CI/CD)

📲 Instalación & Uso
Clonar repositorio
git clone https://github.com/alxjackson/alxjackson-eventos.git
cd alxjackson-eventos

Instalar dependencias
npm install

Desarrollo local
npm run dev

Build producción
npm run build

Ejecutar tests
npm run test
npm run test:coverage

Android APK
npm run cap:sync
npm run cap:build
npm run cap:run:android

📥 Descargas

📱 APK Android v2.0.19:
Descargar aquí

🌐 PWA Online:
Visitar Demo

📈 Roadmap Futuro

💳 Sistema de pagos (Stripe/PayPal).

📊 Analytics avanzados.

🖼️ Galería con carrusel interactivo.

🚀 Optimizaciones de performance y SEO.

🔔 Notificaciones push y mejoras de permisos.

👨‍💻 Autor & Contacto

Desarrollado por: Ing. Juan Carlos Méndez N. "DjWacko"

📱 WhatsApp: 56-1718-4109

🐦 Twitter: @DjWackoCDMX

📧 Email: contacto@alxjackson.com

📜 Licencia

Proyecto privado - AlxJackson Entertainment Platform © 2025
© 2024-2025 Ing. Juan Carlos Méndez N. (DjWacko). Todos los derechos reservados.


---

📌 Este **README maestro** combina:  
- Contexto del proyecto (`README.md`):contentReference[oaicite:2]{index=2}  
- Mejoras técnicas y métricas (`RELEASE_NOTES_v2.0.19.md`):contentReference[oaicite:3]{index=3}  
- Información de auditoría / correcciones que me compartiste antes.  

Queda **corporativo, técnico y atractivo para GitHub** (privado o público)