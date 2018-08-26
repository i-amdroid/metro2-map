(function() {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('../service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();

window.onload = function() {
  if (!navigator.onLine) {
    document.body.classList.add("offline");
  }
};

window.addEventListener("load", () => {
  function handleNetworkChange(event) {
    if (navigator.onLine) {
      document.body.classList.remove("offline");
    } else {
      document.body.classList.add("offline");
    }
  }
  window.addEventListener("online", handleNetworkChange);
  window.addEventListener("offline", handleNetworkChange);
});
