import { describe, it, expect } from 'vitest';
import { calculateQuotation, formatQuotationResult } from '../quotationCalculator';
import type { QuotationRequest } from '../quotationCalculator';

describe('Quotation Calculator', () => {
  describe('calculateQuotation', () => {
    it('should calculate quotation for local destination without DJ', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const request: QuotationRequest = {
        destination: 'Toluca de Lerdo',
        includesDJ: false,
        eventDate: tomorrow.toISOString().split('T')[0],
        eventDuration: 4
      };

      const result = calculateQuotation(request);

      expect(result.destination).toBe('Toluca de Lerdo');
      expect(result.distance).toBe(0); // Local destination
      expect(result.gasoline.cost).toBe(0); // No travel needed
      expect(result.tolls).toBe(130); // Round trip tolls for Toluca
      expect(result.requiresOvernight).toBe(false);
      expect(result.total).toBeGreaterThan(0);
    });

    it('should calculate quotation for distant destination with DJ', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const request: QuotationRequest = {
        destination: 'Guadalajara, Jalisco',
        includesDJ: true,
        eventDate: tomorrow.toISOString().split('T')[0],
        eventDuration: 6
      };

      const result = calculateQuotation(request);

      expect(result.destination).toBe('Guadalajara, Jalisco');
      expect(result.distance).toBe(1100); // 550km * 2 (round trip)
      expect(result.gasoline.liters).toBeCloseTo(57.89, 1); // 1100km / 19km/L
      expect(result.gasoline.cost).toBeGreaterThan(1000);
      expect(result.tolls).toBe(970); // Round trip tolls for Guadalajara
      expect(result.requiresOvernight).toBe(true); // Distance > 300km
      expect(result.accommodation).toBeDefined();
      expect(result.meals).toBeDefined();
      expect(result.total).toBeGreaterThan(3000);
    });

    it('should require overnight for long duration events', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const request: QuotationRequest = {
        destination: 'Cuernavaca, Morelos',
        includesDJ: false,
        eventDate: tomorrow.toISOString().split('T')[0],
        eventDuration: 10 // More than 8 hours
      };

      const result = calculateQuotation(request);

      expect(result.requiresOvernight).toBe(true);
      expect(result.accommodation).toBeGreaterThan(0);
      expect(result.meals).toBeGreaterThan(0);
    });

    it('should handle unknown destinations with default values', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const request: QuotationRequest = {
        destination: 'Ciudad Desconocida',
        includesDJ: true,
        eventDate: tomorrow.toISOString().split('T')[0],
        eventDuration: 4
      };

      const result = calculateQuotation(request);

      expect(result.destination).toBe('Ciudad Desconocida');
      expect(result.distance).toBe(360); // Default distance * 2
      expect(result.tolls).toBe(240); // Default toll * 2
      expect(result.requiresOvernight).toBe(false); // Default distance 180km < 300km
    });

    it('should calculate different costs for with/without DJ', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const baseRequest: QuotationRequest = {
        destination: 'Puebla, Puebla',
        includesDJ: false,
        eventDate: tomorrow.toISOString().split('T')[0],
        eventDuration: 4
      };

      const withoutDJ = calculateQuotation(baseRequest);
      const withDJ = calculateQuotation({ ...baseRequest, includesDJ: true });

      // With DJ should have different origin and potentially different distance
      expect(withoutDJ.origin).not.toBe(withDJ.origin);
      // Both should have valid calculations
      expect(withoutDJ.total).toBeGreaterThan(0);
      expect(withDJ.total).toBeGreaterThan(0);
    });
  });

  describe('formatQuotationResult', () => {
    it('should format quotation result correctly', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const request: QuotationRequest = {
        destination: 'Cuernavaca, Morelos',
        includesDJ: false,
        eventDate: tomorrow.toISOString().split('T')[0],
        eventDuration: 4
      };

      const result = calculateQuotation(request);
      const formatted = formatQuotationResult(result);

      expect(formatted).toContain('COTIZACIÓN ALXJACKSON EVENTOS');
      expect(formatted).toContain(result.destination);
      expect(formatted).toContain(result.origin);
      expect(formatted).toContain(`${result.distance} km`);
      expect(formatted).toContain(`$${result.total.toLocaleString()} MXN`);
      expect(formatted).toContain('TÉRMINOS Y CONDICIONES');
    });

    it('should include accommodation and meals when overnight required', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const request: QuotationRequest = {
        destination: 'Monterrey, Nuevo León',
        includesDJ: true,
        eventDate: tomorrow.toISOString().split('T')[0],
        eventDuration: 6
      };

      const result = calculateQuotation(request);
      const formatted = formatQuotationResult(result);

      if (result.requiresOvernight) {
        expect(formatted).toContain('Hospedaje');
        expect(formatted).toContain('Alimentación');
      }
    });
  });
});
