self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('b13-roadmap-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js',
        'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js',
        'https://cdn.jsdelivr.net/npm/@babel/standalone@7.24.7/babel.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});