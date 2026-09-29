const CACHE_NAME = 'valve-v19';
const ASSETS = [
  './',
  './index.html',
  './apex-landing.html',
  './calculadora.html',
  './cantieri.html',
  './carico-termico.html',
  './checklist.html',
  './checklist-starlink.html',
  './dimensionamento-solare.html',
  './informe.html',
  './js/apps-script.gs',
  './js/insumi.js',
  './magazzino.html',
  './instrumentos.html',
  './interno.html',
  './normativa.html',
  './presupuestador.html',
  './tablero-designer.html',
  './telecamere-designer.html',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fetched = fetch(e.request).then((response) => {
        if (response.ok && e.request.url.startsWith(self.location.origin)) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
