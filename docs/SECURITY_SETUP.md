# 🔒 Configuración de Seguridad - AlxJackson Eventos

## 📋 Guía de Configuración Segura

Esta guía te ayudará a configurar correctamente las variables de entorno y medidas de seguridad para proteger datos sensibles en el proyecto AlxJackson Eventos.

---

## 🔐 Variables de Entorno Requeridas

### 1. Crear archivo `.env`
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```bash
# Configuración de Supabase
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-clave-anonima-de-supabase

# API Configuration
VITE_API_URL=http://localhost:3000

# 🚨 DATOS SENSIBLES - Configurar con direcciones reales
# Direcciones para sistema de cotizaciones
VITE_ORIGIN_WITH_DJ=Tu dirección completa con DJ (ej: Calle Ejemplo 123, Colonia, Ciudad, Estado)
VITE_ORIGIN_WITHOUT_DJ=Tu dirección completa sin DJ (ej: Calle Ejemplo 456, Colonia, Ciudad, Estado)

# Configuración adicional (opcional)
VITE_COMPANY_NAME=AlxJackson Eventos
VITE_CONTACT_EMAIL=contacto@alxjackson.com
VITE_CONTACT_PHONE=+52 722 123 4567
```

### 2. Verificar `.gitignore`
Asegúrate de que tu archivo `.gitignore` incluya:

```bash
# Environment variables - INFORMACIÓN SENSIBLE
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
*.env
```

---

## 🛡️ Medidas de Seguridad Implementadas

### Protección de Datos Sensibles
- ✅ **Variables de Entorno**: Direcciones y datos sensibles protegidos
- ✅ **Fallbacks Seguros**: Datos genéricos como respaldo
- ✅ **Exclusión de Git**: Archivos `.env` nunca se suben al repositorio

### Seguridad de la Aplicación
- ✅ **Row Level Security (RLS)**: Control de acceso en base de datos
- ✅ **Detección de Root**: Plugin para dispositivos comprometidos
- ✅ **Validación de Roles**: Sistema multi-nivel de permisos
- ✅ **Autenticación JWT**: Tokens seguros con Supabase

### Seguridad Android
- ✅ **Detección de Root**: SecurityPlugin.java implementado
- ✅ **Modo Desarrollador**: Verificación automática
- ✅ **Permisos Específicos**: Solo los necesarios para la app
- ✅ **Certificados**: APK firmado para releases

---

## ⚙️ Configuración por Entorno

### Desarrollo Local
```bash
# .env.development
VITE_SUPABASE_URL=https://tu-proyecto-dev.supabase.co
VITE_ORIGIN_WITH_DJ=Dirección de prueba con DJ
VITE_ORIGIN_WITHOUT_DJ=Dirección de prueba sin DJ
```

### Producción
```bash
# .env.production
VITE_SUPABASE_URL=https://tu-proyecto-prod.supabase.co
VITE_ORIGIN_WITH_DJ=Dirección real con DJ
VITE_ORIGIN_WITHOUT_DJ=Dirección real sin DJ
```

### Testing
```bash
# .env.test
VITE_SUPABASE_URL=https://tu-proyecto-test.supabase.co
VITE_ORIGIN_WITH_DJ=Dirección de testing con DJ
VITE_ORIGIN_WITHOUT_DJ=Dirección de testing sin DJ
```

---

## 🚨 Datos Sensibles a Proteger

### ❌ NUNCA incluir en el código:
- Direcciones físicas reales
- Números de teléfono personales
- Credenciales de API
- Claves de base de datos
- Certificados o llaves privadas
- Información personal identificable

### ✅ Usar en su lugar:
- Variables de entorno
- Datos genéricos como fallback
- Configuraciones por entorno
- Servicios de gestión de secretos

---

## 🔍 Verificación de Seguridad

### Checklist de Seguridad
- [x] Archivo `.env` creado y configurado
- [x] Variables sensibles no están en el código
- [ ] `.gitignore` incluye archivos de entorno
- [ ] Fallbacks seguros implementados
- [ ] RLS configurado en Supabase
- [ ] Permisos Android mínimos necesarios
- [ ] SecurityPlugin funcionando correctamente

### Comandos de Verificación
```bash
# Verificar que .env no esté en Git
git status --ignored

# Verificar variables de entorno
npm run dev # Debe cargar sin errores

# Verificar build de producción
npm run build
```

---

## 🆘 Solución de Problemas

### Error: Variables de entorno no encontradas
```bash
# Solución: Crear archivo .env con las variables requeridas
cp .env.example .env
# Editar .env con tus valores reales
```

### Error: Direcciones genéricas en producción
```bash
# Solución: Configurar variables específicas de producción
VITE_ORIGIN_WITH_DJ=Tu dirección real con DJ
VITE_ORIGIN_WITHOUT_DJ=Tu dirección real sin DJ
```

### Error: SecurityPlugin no funciona
```bash
# Solución: Verificar configuración Android
cd android
./gradlew clean
./gradlew build
```

---

## 📞 Contacto de Seguridad

Si encuentras algún problema de seguridad o necesitas ayuda con la configuración:

- **Email**: contacto@alxjackson.com
- **Asunto**: [SECURITY] Configuración de Seguridad
- **Documentación**: Consulta `SECURITY.md` para más detalles

---

## 📚 Referencias Adicionales

- [Supabase Security Best Practices](https://supabase.com/docs/guides/auth/row-level-security)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Capacitor Security](https://capacitorjs.com/docs/guides/security)
- [Android Security](https://developer.android.com/topic/security)

---

*Documento actualizado: 2024-09-22*  
*Versión del proyecto: v2.0.20*
