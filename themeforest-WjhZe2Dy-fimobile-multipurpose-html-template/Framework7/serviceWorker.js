var static = "FiMobile-v2";
var cacheassets = [
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/js/routes.js",
];


self.addEventListener("install", function (event) {    
    event.waitUntil(
        caches.open(static).then(function (cache) {
            cache.addAll(cacheassets);
        }).then(function () {
            return self.skipWaiting();
        })
    );
});

self.addEventListener("activate", function (event) {    
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request)
        })
    );
});


