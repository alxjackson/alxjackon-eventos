import { z } from 'zod';

// Esquema para formulario de contacto
export const contactFormSchema = z.object({
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
    .max(15, 'El teléfono es demasiado largo')
    .regex(/^[\d\s\-\+\(\)]+$/, 'Formato de teléfono inválido')
    .optional()
    .or(z.literal('')),
  subject: z
    .string()
    .min(5, 'El asunto debe tener al menos 5 caracteres')
    .max(200, 'El asunto es demasiado largo'),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje es demasiado largo'),
  eventType: z
    .enum(['birthday', 'wedding', 'corporate', 'quinceañera', 'anniversary', 'other'])
    .optional(),
  eventDate: z
    .string()
    .optional()
    .refine((date) => {
      if (!date) return true; // Es opcional
      const eventDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return eventDate >= today;
    }, 'La fecha del evento debe ser hoy o en el futuro'),
  guestCount: z
    .number()
    .min(1, 'Debe haber al menos 1 invitado')
    .max(10000, 'Número de invitados demasiado alto')
    .int('El número de invitados debe ser entero')
    .optional(),
  budget: z
    .number()
    .min(0, 'El presupuesto no puede ser negativo')
    .max(1000000, 'Presupuesto demasiado alto')
    .optional(),
  location: z
    .string()
    .max(300, 'La ubicación es demasiado larga')
    .optional()
    .or(z.literal(''))
});

// Esquema simplificado para contacto rápido
export const quickContactSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo'),
  email: z
    .string()
    .min(1, 'El email es requerido')
    .email('Formato de email inválido'),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje es demasiado largo')
});

// Tipos TypeScript derivados de los esquemas
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type QuickContactData = z.infer<typeof quickContactSchema>;
