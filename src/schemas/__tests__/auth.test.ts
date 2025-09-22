import { describe, it, expect } from 'vitest';
import { loginSchema, registerSchema, resetPasswordSchema } from '../auth';

describe('Auth Schemas', () => {
  describe('loginSchema', () => {
    it('should validate correct login data', () => {
      const validData = {
        email: 'test@example.com',
        password: 'password123'
      };
      
      const result = loginSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject invalid email format', () => {
      const invalidData = {
        email: 'invalid-email',
        password: 'password123'
      };
      
      const result = loginSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe('Formato de email inválido');
      }
    });

    it('should reject short password', () => {
      const invalidData = {
        email: 'test@example.com',
        password: '123'
      };
      
      const result = loginSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe('La contraseña debe tener al menos 6 caracteres');
      }
    });
  });

  describe('registerSchema', () => {
    it('should validate correct registration data', () => {
      const validData = {
        firstName: 'Juan',
        lastName: 'Pérez',
        email: 'juan@example.com',
        password: 'Password123'
      };
      
      const result = registerSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject weak password', () => {
      const invalidData = {
        firstName: 'Juan',
        lastName: 'Pérez',
        email: 'juan@example.com',
        password: 'weakpass'
      };
      
      const result = registerSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe('La contraseña debe contener al menos una minúscula, una mayúscula y un número');
      }
    });

    it('should reject invalid name characters', () => {
      const invalidData = {
        firstName: 'Juan123',
        lastName: 'Pérez',
        email: 'juan@example.com',
        password: 'Password123'
      };
      
      const result = registerSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe('El nombre solo puede contener letras');
      }
    });
  });

  describe('resetPasswordSchema', () => {
    it('should validate correct email for reset', () => {
      const validData = {
        email: 'test@example.com'
      };
      
      const result = resetPasswordSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject invalid email for reset', () => {
      const invalidData = {
        email: 'invalid-email'
      };
      
      const result = resetPasswordSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });
});
