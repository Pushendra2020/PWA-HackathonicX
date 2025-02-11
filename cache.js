const cacheName = 'v1';


self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
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
       (fetch(event.request)
         .then((res) => {
              const resClone = res.clone();
              caches.open(cacheName).then((cache) => {
                cache.put(event.request, resClone);
              });
              return res;
         })).catch(() => caches.match(event.request)));

    });
