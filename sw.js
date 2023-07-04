// Install service worker
self.addEventListener('install', evt => {
    console.log('service worker has been installed');
});

// Activate service worker
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
});

// Fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
});