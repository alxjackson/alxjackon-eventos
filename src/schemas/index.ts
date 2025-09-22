// Exportar todos los esquemas de validación
export * from './auth';
export * from './quotation';
export * from './contact';
export * from './booking';

// Utilidades comunes para validación
export const validateField = <T>(schema: any, data: T) => {
  try {
    return {
      success: true,
      data: schema.parse(data),
      error: null
    };
  } catch (error: any) {
    return {
      success: false,
      data: null,
      error: error.errors || error.message
    };
  }
};

export const getFieldError = (errors: any[], fieldName: string): string | null => {
  const fieldError = errors.find(error => error.path.includes(fieldName));
  return fieldError ? fieldError.message : null;
};
