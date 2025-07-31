
// Simple service worker for production caching
const CACHE_NAME = 'mavericks-edge-v2'; // Increment version to force refresh
const urlsToCache = [
  '/',
  '/assets/logo-transparent-thumb4x.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Clear old caches when new service worker activates
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Network-first strategy for HTML pages
  if (event.request.method === 'GET' && event.request.destination === 'document') {
    // Add cache-busting parameter for immediate refresh
    const url = new URL(event.request.url);
    if (!url.searchParams.has('_cb')) {
      url.searchParams.set('_cb', Date.now().toString());
      const newRequest = new Request(url.toString(), event.request);
      event.respondWith(
        fetch(newRequest)
          .then((response) => {
            // Cache the fresh response
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(() => {
            // Fallback to cache if network fails
            return caches.match(event.request);
          })
      );
      return;
    }
    
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache the fresh response
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(event.request);
        })
    );
  } else {
    // Cache-first for static assets (images, CSS, JS)
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request).then((fetchResponse) => {
            const responseClone = fetchResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
            return fetchResponse;
          });
        })
    );
  }
});
