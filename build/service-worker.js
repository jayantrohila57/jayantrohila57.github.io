importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);

const cacheName = "cache-v1";
const resourcesToPrecache = [
    "https://unpkg.com/aos@next/dist/aos.css",
    "https://code.jquery.com/jquery-1.11.3.js",
    "/",
    "/index.html",
    "/dist/app/app.js",
    "/dist/img/icon.png",
    "/dist/img/JayantRohila.jpg",
    "/dist/icon/blender_community_badge_white.svg",
    "/dist/icon/bootstrap-plain.svg",
    "/dist/icon/css3-original-wordmark.svg",
    "/dist/icon/git-scm-icon.svg",
    "/dist/icon/google_cloud-icon.svg",
    "/dist/icon/html5-original-wordmark.svg",
    "/dist/icon/javascript-original.svg",
    "/dist/icon/linux-original.svg",
    "/dist/icon/microsoft_azure-icon.svg",
    "/dist/icon/photoshop-plain.svg",
    "/dist/icon/react-original-wordmark.svg",
    "/dist/icon/python-original.svg",
    "/dist/icons/apple-180.png",
    "/dist/icons/icon-192.png",
    "/dist/icons/icon-512.png",
    "/dist/icons/screenshot-1-591x1280.png",
    "/dist/icons/screenshot-2-591x1280.png",
    "/dist/icons/screenshot-3-591x1280.png",
    "/dist/icons/screenshot-4-591x1280.png",
    "/dist/css/styles.min.css",
    "/dist/css/styles.min.css.map",
];

self.addEventListener("install", (event) => {
    console.log("Service Worker Install Event!");
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(resourcesToPrecache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});

workbox.routing.registerRoute(
    ({ request }) => request.destination === "image",
    new workbox.strategies.CacheFirst()
);