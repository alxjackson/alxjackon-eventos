# Security Policy

## Supported Versions

Las siguientes versiones de AlxJackson Eventos reciben actualizaciones de seguridad:

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| 1.x.x   | :x:                |
| < 1.0   | :x:                |

## Reporting a Vulnerability

Si encuentras una vulnerabilidad de seguridad en AlxJackson Eventos, por favor repórtala de manera responsable:

### Cómo reportar
- **Email**: contacto@alxjackson.com
- **Asunto**: [SECURITY] Vulnerabilidad en AlxJackson Eventos
- **Información requerida**:
  - Descripción detallada de la vulnerabilidad
  - Pasos para reproducir el problema
  - Versión afectada de la aplicación
  - Impacto potencial

### Proceso de respuesta
- **Confirmación inicial**: Dentro de 48 horas
- **Evaluación**: 5-7 días hábiles
- **Corrección**: Según severidad (crítica: 1-3 días, alta: 1-2 semanas)
- **Divulgación**: Después de que la corrección esté disponible

### Qué esperar
- **Vulnerabilidad aceptada**: Se creará un parche de seguridad y se notificará a los usuarios
- **Vulnerabilidad rechazada**: Se proporcionará una explicación detallada del motivo

### Política de divulgación responsable
- No divulgues públicamente la vulnerabilidad hasta que se publique una corrección
- Te daremos crédito por el descubrimiento (si lo deseas)
- Trabajaremos contigo para entender y resolver el problema

## Medidas de Seguridad Implementadas

### Protección de Datos Sensibles
- **Variables de Entorno**: Todas las direcciones y datos sensibles se almacenan en variables de entorno
- **Configuración Segura**: Archivos `.env` excluidos del control de versiones
- **Datos Genéricos**: Fallbacks seguros para información pública

### Seguridad de la Aplicación
- **Row Level Security (RLS)**: Implementado en Supabase para control de acceso
- **Detección de Root**: Plugin nativo para detectar dispositivos comprometidos
- **Validación de Permisos**: Sistema robusto de roles y permisos
- **Autenticación Segura**: Tokens JWT manejados por Supabase

### Configuración de Variables de Entorno
Para proteger datos sensibles como direcciones, configura las siguientes variables en tu archivo `.env`:

```bash
# Direcciones para sistema de cotizaciones
VITE_ORIGIN_WITH_DJ=Tu dirección completa con DJ
VITE_ORIGIN_WITHOUT_DJ=Tu dirección completa sin DJ
```

### Buenas Prácticas
- Nunca commits archivos `.env` al repositorio
- Usa datos genéricos en código público
- Revisa regularmente las dependencias por vulnerabilidades
- Mantén actualizadas las versiones de seguridad

---
**Nota**: Esta aplicación está destinada exclusivamente para adultos (+18) y maneja información sensible. La seguridad y privacidad de nuestros usuarios es nuestra máxima prioridad.
