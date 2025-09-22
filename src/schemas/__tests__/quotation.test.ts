import { describe, it, expect } from 'vitest';
import { quotationRequestSchema, quotationContactSchema, fullQuotationSchema } from '../quotation';

describe('Quotation Schemas', () => {
  describe('quotationRequestSchema', () => {
    it('should validate correct quotation request', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const validData = {
        destination: 'Ciudad de México',
        includesDJ: true,
        eventDate: tomorrow.toISOString().split('T')[0],
        eventDuration: 6
      };
      
      const result = quotationRequestSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject past event date', () => {
      const invalidData = {
        destination: 'Ciudad de México',
        includesDJ: false,
        eventDate: '2020-01-01',
        eventDuration: 4
      };
      
      const result = quotationRequestSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe('La fecha del evento debe ser hoy o en el futuro');
      }
    });

    it('should reject invalid duration', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const invalidData = {
        destination: 'Ciudad de México',
        includesDJ: false,
        eventDate: tomorrow.toISOString().split('T')[0],
        eventDuration: 25
      };
      
      const result = quotationRequestSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe('La duración máxima es 24 horas');
      }
    });

    it('should reject short destination', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const invalidData = {
        destination: 'CD',
        includesDJ: false,
        eventDate: tomorrow.toISOString().split('T')[0],
        eventDuration: 4
      };
      
      const result = quotationRequestSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe('El destino debe tener al menos 3 caracteres');
      }
    });
  });

  describe('quotationContactSchema', () => {
    it('should validate correct contact data', () => {
      const validData = {
        name: 'María García',
        email: 'maria@example.com',
        phone: '7221234567',
        message: 'Necesito cotización para quinceañera'
      };
      
      const result = quotationContactSchema.safeParse(validData);
      if (!result.success) {
        console.log('Validation errors:', result.error.errors);
      }
      expect(result.success).toBe(true);
    });

    it('should reject invalid phone format', () => {
      const invalidData = {
        name: 'María García',
        email: 'maria@example.com',
        phone: 'abc123',
        message: 'Test message'
      };
      
      const result = quotationContactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe('Formato de teléfono inválido');
      }
    });
  });

  describe('fullQuotationSchema', () => {
    it('should validate complete quotation data', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const validData = {
        destination: 'Toluca, Estado de México',
        includesDJ: true,
        eventDate: tomorrow.toISOString().split('T')[0],
        eventDuration: 8,
        name: 'Carlos Mendoza',
        email: 'carlos@example.com',
        phone: '7221234567',
        message: 'Evento corporativo de fin de año'
      };
      
      const result = fullQuotationSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject incomplete data', () => {
      const invalidData = {
        destination: 'Toluca',
        includesDJ: false,
        eventDate: '2024-12-31',
        // Missing eventDuration, name, email, phone
      };
      
      const result = fullQuotationSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });
});
