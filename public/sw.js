// Service Worker para AlxJackson Eventos
// Proporciona funcionalidad offline básica

const CACHE_NAME = 'alxjackson-eventos-v2.0.19';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Archivos críticos para cachear
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .catch((error) => {
        console.error('[SW] Error caching static files:', error);
      })
  );
  
  // Activar inmediatamente el nuevo service worker
  self.skipWaiting();
});

// Activar Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Eliminar caches antiguos
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
  
  // Tomar control de todas las páginas inmediatamente
  self.clients.claim();
});

// Interceptar requests (estrategia Cache First para assets, Network First para API)
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Ignorar requests que no son HTTP/HTTPS
  if (!request.url.startsWith('http')) {
    return;
  }
  
  // Estrategia para diferentes tipos de recursos
  if (request.method === 'GET') {
    // Assets estáticos (CSS, JS, imágenes)
    if (request.url.includes('/assets/') || 
        request.url.includes('.css') || 
        request.url.includes('.js') ||
        request.url.includes('.png') ||
        request.url.includes('.jpg') ||
        request.url.includes('.svg')) {
      
      event.respondWith(cacheFirstStrategy(request));
    }
    // API calls (Supabase, etc.)
    else if (request.url.includes('supabase.co') || 
             request.url.includes('/api/')) {
      
      event.respondWith(networkFirstStrategy(request));
    }
    // Páginas HTML
    else if (request.headers.get('accept')?.includes('text/html')) {
      event.respondWith(networkFirstStrategy(request));
    }
    // Otros recursos
    else {
      event.respondWith(cacheFirstStrategy(request));
    }
  }
});

// Estrategia Cache First (para assets estáticos)
async function cacheFirstStrategy(request) {
  try {
    // Buscar en cache primero
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Si no está en cache, hacer request de red
    const networkResponse = await fetch(request);
    
    // Cachear la respuesta si es exitosa
    if (networkResponse.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
    
  } catch (error) {
    console.error('[SW] Cache First Strategy failed:', error);
    
    // Fallback para páginas HTML
    if (request.headers.get('accept')?.includes('text/html')) {
      return caches.match('/index.html');
    }
    
    // Fallback genérico
    return new Response('Offline - Contenido no disponible', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Estrategia Network First (para API y páginas dinámicas)
async function networkFirstStrategy(request) {
  try {
    // Intentar red primero
    const networkResponse = await fetch(request);
    
    // Cachear respuestas exitosas
    if (networkResponse.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
    
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', error);
    
    // Si falla la red, buscar en cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback para páginas HTML
    if (request.headers.get('accept')?.includes('text/html')) {
      return caches.match('/index.html');
    }
    
    // Respuesta offline
    return new Response(JSON.stringify({
      error: 'Offline',
      message: 'No hay conexión a internet y el contenido no está disponible offline'
    }), {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Limpiar cache periódicamente (limitar tamaño)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAN_CACHE') {
    cleanCache();
  }
});

async function cleanCache() {
  const cache = await caches.open(DYNAMIC_CACHE);
  const requests = await cache.keys();
  
  // Mantener solo los últimos 50 elementos en cache dinámico
  if (requests.length > 50) {
    const requestsToDelete = requests.slice(0, requests.length - 50);
    await Promise.all(
      requestsToDelete.map(request => cache.delete(request))
    );
    console.log('[SW] Cleaned cache, removed', requestsToDelete.length, 'items');
  }
}

// Notificar actualizaciones disponibles
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('[SW] Service Worker loaded successfully');
