self.addEventListener('install',function(e){
    console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e){
    console.log('[ServieceWorker] Activate');
});

self.addEventListener('fetch', function(event) {});

