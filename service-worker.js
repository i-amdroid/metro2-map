// Adopted from https://github.com/nikkifurls/simplepwa
const cacheName = 'mm2-pwa-v2.6';

// Files to cache
var staticAssets = [
 "./fonts/MaterialIcons-Regular.eot",
 "./fonts/MaterialIcons-Regular.ttf",
 "./fonts/MaterialIcons-Regular.woff",
 "./fonts/MaterialIcons-Regular.woff2",
 "./img/graphic.svg",
 "./img/msk-en.svg",
 "./img/msk-ru.svg",
 "./img/spb-en.svg",
 "./img/spb-ru.svg",
 "./img/mnk-en.svg",
 "./img/mnk-by.svg",
 "./img/cph-en.svg",
 "./img/cph-da.svg",
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
 "./mnk/",
 "./mnk/index.html",
 "./cph/",
 "./cph/index.html",
 "./manifest.json",
 "./js/app.js",
 "./js/custom.js",
 "./js/imageviewer.min.js",
 "./js/jquery-1.11.3.min.js",
 "./css/imageviewer.css",
 "./css/styles.css"
];

self.addEventListener("install", event => {
  // Kick out the old service worker
  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(staticAssets);
    })
  );
});

self.addEventListener("activate", event => {
  // Delete any non-current cache
  event.waitUntil(
    caches.keys().then(keys => {
      Promise.all(
        keys.map(key => {
          if (![cacheName].includes(key)) {
            return caches.delete(key);
          }
        })
      )
    })
  );
});

// Offline-first, cache-first strategy
// Kick off two asynchronous requests, one to the cache and one to the network
// If there's a cached version available, use it, but fetch an update for next time.
// Gets data on screen as quickly as possible, then updates once the network has returned the latest data. 
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.open(cacheName).then(cache => {
      return cache.match(event.request).then(response => {
        return response || fetch(event.request).then(networkResponse => {
          if(event.request.method !== "GET") {
            return networkResponse;
          }
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      })
    })
  );
});
