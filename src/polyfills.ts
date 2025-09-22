// Modern browser polyfills - minimal setup for Vite projects

// Only essential polyfills for modern browsers
// Most features are natively supported in browsers that support ES modules

// Basic feature detection without external dependencies
if (typeof window !== 'undefined') {
  // Ensure basic APIs are available
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (callback) => setTimeout(callback, 16);
  }
  
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (id) => clearTimeout(id);
  }
}
