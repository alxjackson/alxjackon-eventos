import { z } from 'zod';

// Esquema para reserva de calendario
export const calendarBookingSchema = z.object({
  clientName: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras'),
  clientEmail: z
    .string()
    .min(1, 'El email es requerido')
    .email('Formato de email inválido'),
  clientPhone: z
    .string()
    .min(10, 'El teléfono debe tener al menos 10 dígitos')
    .max(15, 'El teléfono es demasiado largo')
    .regex(/^[\d\s\-\+\(\)]+$/, 'Formato de teléfono inválido'),
  eventDate: z
    .string()
    .min(1, 'La fecha del evento es requerida')
    .refine((date) => {
      const eventDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return eventDate >= today;
    }, 'La fecha del evento debe ser hoy o en el futuro'),
  eventTime: z
    .string()
    .min(1, 'La hora del evento es requerida')
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Formato de hora inválido (HH:MM)'),
  eventDuration: z
    .number()
    .min(1, 'La duración mínima es 1 hora')
    .max(24, 'La duración máxima es 24 horas')
    .int('La duración debe ser un número entero'),
  eventType: z
    .enum(['birthday', 'wedding', 'corporate', 'quinceañera', 'anniversary', 'baptism', 'graduation', 'other'])
    .default('birthday'),
  eventLocation: z
    .string()
    .min(5, 'La ubicación debe tener al menos 5 caracteres')
    .max(300, 'La ubicación es demasiado larga'),
  guestCount: z
    .number()
    .min(1, 'Debe haber al menos 1 invitado')
    .max(10000, 'Número de invitados demasiado alto')
    .int('El número de invitados debe ser entero'),
  specialRequests: z
    .string()
    .max(1000, 'Las solicitudes especiales son demasiado largas')
    .optional()
    .or(z.literal('')),
  includesDJ: z
    .boolean()
    .default(false),
  includesSound: z
    .boolean()
    .default(true),
  includesLighting: z
    .boolean()
    .default(false),
  budget: z
    .number()
    .min(0, 'El presupuesto no puede ser negativo')
    .max(1000000, 'Presupuesto demasiado alto')
    .optional(),
  paymentMethod: z
    .enum(['cash', 'transfer', 'card', 'check'])
    .default('transfer'),
  agreedToTerms: z
    .boolean()
    .refine(val => val === true, 'Debe aceptar los términos y condiciones')
});

// Esquema para disponibilidad de fecha
export const dateAvailabilitySchema = z.object({
  date: z
    .string()
    .min(1, 'La fecha es requerida')
    .refine((date) => {
      const checkDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return checkDate >= today;
    }, 'La fecha debe ser hoy o en el futuro'),
  startTime: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Formato de hora inválido (HH:MM)'),
  duration: z
    .number()
    .min(1, 'La duración mínima es 1 hora')
    .max(24, 'La duración máxima es 24 horas')
    .int('La duración debe ser un número entero')
});

// Tipos TypeScript derivados de los esquemas
export type CalendarBookingData = z.infer<typeof calendarBookingSchema>;
export type DateAvailabilityData = z.infer<typeof dateAvailabilitySchema>;
