const CACHE='presupuesto-v4-4';const A=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(new URL(e.request.url).origin===location.origin)e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{caches.open(CACHE).then(x=>x.put(e.request,r.clone()));return r}).catch(()=>caches.match('./index.html'))))});
