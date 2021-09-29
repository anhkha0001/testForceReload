importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js")

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// install new service worker when ok, then reload page.
self.addEventListener("message", msg=>{
    if (msg.data.action=='skipWaiting'){
        self.skipWaiting()
    }
})