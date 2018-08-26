var dataCacheName = 'mm2-pwa';
var cacheName = 'mm2-pwa';
var filesToCache = [
 "./fonts/MaterialIcons-Regular.eot",
 "./fonts/MaterialIcons-Regular.ttf",
 "./fonts/MaterialIcons-Regular.woff",
 "./fonts/MaterialIcons-Regular.woff2",
 "./img/graphic.svg",
 "./img/msk-en.svg",
 "./img/msk-ru.svg",
 "./img/spb-en.svg",
 "./img/spb-ru.svg", 
 "./img/favicons/icon-16x16.png",
 "./img/favicons/icon-32x32.png",
 "./img/favicons/icon-192x192.png",
 "./img/favicons/icon-512x512.png",
 "./img/favicons/logo-144x144.png",
 "./favicon.ico",
 "./msk/",
 "./msk/index.html",
 "./spb/", 
 "./spb/index.html",
 "./manifest.json",
 "./js/app.js",
 "./js/custom.js",
 "./js/imageviewer.min.js",
 "./js/jquery-1.11.3.min.js", 
 "./service-worker.js",
 "./css/imageviewer.css",
 "./css/styles.css"
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
