const cacheName = 'v1';
const cacheAssets = [
    ' index.html',
    ' /src/index.js',
    ' /src/App.jsx',
    'main.jsx',
    '/src/assets/react.svg',
    '/src/Components/AdminDashboard.jsx',
    '/src/Components/AddEvent.jsx',
    '/src/Components/EventDetails.jsx',
    '/src/Components/EventList.jsx',
    '/src/Components/UserDashboard.jsx',
    '/src/Components/Home.jsx',
    '/src/Components/About.jsx',
    '/src/Components/Login.jsx',
    '/src/index.css',
];

self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');

    event.waitUntil(
        caches
            .open(cacheName)
            .then((cache) => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});


self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activate');

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );

});


self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetch');

    event.respondWith(
       (fetch(event.request).catch(() => caches.match(event.request))));

    });
