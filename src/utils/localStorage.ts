const PREFIX = "alx_";

export const saveFlag = (key: string, value: boolean) => {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch (e) {
    // no-op - ignorar errores de localStorage en entornos sin soporte
  }
};

export const getFlag = (key: string): boolean => {
  try {
    const item = localStorage.getItem(PREFIX + key);
    return item ? JSON.parse(item) : false;
  } catch (e) {
    // no-op - devolver null en caso de error
    return false;
  }
};

export const removeFlag = (key: string) => {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch (e) {
    // no-op - ignorar errores de eliminación
  }
};
