
self.addEventListener( "install" , function (event) { 
    event.waitUntil(
        caches.open("cacheName1").then(function(cache) {
            return cache.addAll(
                [
                    '/',
                    '/css/style.css',
                    '/js/converter.js',
                    '/js/idb.js',
                    '/js/main.js'
                ]
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request.url).then(function(response) {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request.url) 
      }).catch(function(error) {
  
        // Respond with custom offline page
  
      })
    );
  });