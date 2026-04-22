
    const CACHE_NAME = 'clealco-v15_2026';
    const assets = ['./', './index.html', './labels.json', './manifesto.json', './tiles/tile_0_0.json', './tiles/tile_1_0.json', './tiles/tile_2_0.json', './tiles/tile_2_1.json', './divisas_split/divisas_100082.json', './divisas_split/divisas_100453.json', './divisas_split/divisas_100862.json', './divisas_split/divisas_107383.json', './divisas_split/divisas_200085.json', './divisas_split/divisas_200096.json', './divisas_split/divisas_200238.json', './divisas_split/divisas_200349.json', './divisas_split/divisas_201039.json', './divisas_split/divisas_201147.json', './divisas_split/divisas_202783.json', './divisas_split/divisas_202948.json', './divisas_split/divisas_202957.json', './divisas_split/divisas_203976.json', './divisas_split/divisas_207251.json', './divisas_split/divisas_300002.json', './divisas_split/divisas_300126.json', './divisas_split/divisas_300246.json', './divisas_split/divisas_300358.json', './divisas_split/divisas_301039.json', './divisas_split/divisas_301272.json', './divisas_split/divisas_301363.json', './divisas_split/divisas_302515.json', './divisas_split/divisas_302860.json', './divisas_split/divisas_303944.json', './divisas_split/divisas_306792.json', './divisas_split/divisas_306850.json', './divisas_split/divisas_306905.json', './divisas_split/divisas_307176.json', './divisas_split/divisas_307293.json', './divisas_split/divisas_307381.json', './divisas_split/divisas_307716.json', './divisas_split/divisas_307719.json', './divisas_split/divisas_308026.json'];
    self.addEventListener('install', e => { 
        self.skipWaiting();
        e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets))); 
    });
    self.addEventListener('activate', e => {
        e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
    });
    self.addEventListener('fetch', e => { 
        e.respondWith(caches.match(e.request).then(res => res || fetch(e.request))); 
    });
    