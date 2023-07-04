if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('Registered service worker', reg))
    .catch((err) => console.log('service worker not registerd', err));
}