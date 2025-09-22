import { z } from 'zod';

// Esquema para solicitud de cotización
export const quotationRequestSchema = z.object({
  destination: z
    .string()
    .min(3, 'El destino debe tener al menos 3 caracteres')
    .max(200, 'El destino es demasiado largo')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s,.-]+$/, 'El destino contiene caracteres inválidos'),
  includesDJ: z
    .boolean()
    .default(false),
  eventDate: z
    .string()
    .min(1, 'La fecha del evento es requerida')
    .refine((date) => {
      const eventDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return eventDate >= today;
    }, 'La fecha del evento debe ser hoy o en el futuro'),
  eventDuration: z
    .number()
    .min(1, 'La duración mínima es 1 hora')
    .max(24, 'La duración máxima es 24 horas')
    .int('La duración debe ser un número entero')
});

// Esquema para datos de contacto en cotización
export const quotationContactSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras'),
  email: z
    .string()
    .min(1, 'El email es requerido')
    .email('Formato de email inválido'),
  phone: z
    .string()
    .min(10, 'El teléfono debe tener al menos 10 dígitos')
    .max(20, 'El teléfono es demasiado largo')
    .regex(/^[\d\s\-\+\(\)]+$/, 'Formato de teléfono inválido'),
  message: z
    .string()
    .max(1000, 'El mensaje es demasiado largo')
    .optional()
});

// Esquema completo para cotización
export const fullQuotationSchema = quotationRequestSchema.merge(quotationContactSchema);

// Tipos TypeScript derivados de los esquemas
export type QuotationRequestData = z.infer<typeof quotationRequestSchema>;
export type QuotationContactData = z.infer<typeof quotationContactSchema>;
export type FullQuotationData = z.infer<typeof fullQuotationSchema>;
