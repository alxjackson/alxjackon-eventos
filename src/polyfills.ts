// Polyfills for better browser compatibility

// IntersectionObserver polyfill for older browsers
if (!('IntersectionObserver' in window)) {
  import('intersection-observer');
}

// ResizeObserver polyfill for older browsers
if (!('ResizeObserver' in window)) {
  import('@juggle/resize-observer').then(module => {
    window.ResizeObserver = module.ResizeObserver;
  });
}

// Smooth scrolling polyfill
if (!('scrollBehavior' in document.documentElement.style)) {
  import('smoothscroll-polyfill').then(smoothscroll => {
    smoothscroll.polyfill();
  });
}

// Web Animations API polyfill
if (!('animate' in Element.prototype)) {
  import('web-animations-js');
}

// CSS Custom Properties (CSS Variables) support for IE
if (!CSS.supports('color', 'var(--fake-var)')) {
  import('css-vars-ponyfill').then(cssVars => {
    cssVars.default();
  });
}

// Fetch polyfill for older browsers
if (!('fetch' in window)) {
  import('whatwg-fetch');
}

// URL polyfill for older browsers
if (!('URL' in window)) {
  import('url-polyfill');
}

// Promise polyfill for very old browsers
if (!('Promise' in window)) {
  import('es6-promise/auto');
}
