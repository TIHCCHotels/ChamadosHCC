self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('Sem conexão com a internet!');
    })
  );
});
