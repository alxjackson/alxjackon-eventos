import * as matchers from "@testing-library/jest-dom/matchers";
import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// Extiende expect con jest-dom
expect.extend(matchers);

// Limpieza después de cada test
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// Mock URL para ImageUpload
global.URL.createObjectURL = vi.fn();
global.URL.revokeObjectURL = vi.fn();
