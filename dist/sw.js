const CACHE_NAME = "c1";
const urlsToCache = ["/","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/main444d80c0420e39caaf8c.js","/styles3673332864.css","/webworker154907192.js"];
console.table(urlsToCache);
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.cache === "only-if-cached" && request.mode !== "same-origin") {
    return;
  }
  event.respondWith(
    (async function () {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponsePromise = await cache.match(request);
      const networkResponsePromise = fetch(request);

      if (request.url.startsWith(self.location.origin)) {
        console.log("origin " + request.url);
        event.waitUntil(
          (async function () {
            const networkResponse = await networkResponsePromise;
            if (networkResponse.status === 200) {
              console.log("newCache");
              await cache.put(request, networkResponse.clone());
            }
          })()
        );
      }
      console.log(
        "returning " +
          request.url +
          (cachedResponsePromise ? "cached" : "network")
      );
      return cachedResponsePromise || networkResponsePromise;
    })()
  );
});
self.addEventListener("activate", (event) => {
  console.log("activated");
});
self.addEventListener("install", function (event) {
  console.log("installing");
  //self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
  // console.log("installing");
  // event.waitUntil(
  //   caches.open(CACHE_NAME).then(function (cache) {
  //     console.log("Opened cache");
  //     cache.delete("/").then(function (response) {
  //       console.log(response);
  //       return cache.addAll(urlsToCache);
  //     });
  //   })
});
