// Offline support: the page is fetched network-first (so updates arrive), everything else cache-first.
const CACHE = "interval-v27";
const FILES = ["./", "index.html", "manifest.webmanifest", "keepawake-a.mp4", "apple-touch-icon.png", "icon-192.png", "icon-512.png",
  "fonts/Urbanist-Bold.woff2", "fonts/Urbanist-ExtraBold.woff2", "fonts/JetBrainsMono-Medium.woff2"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" }))))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req.url, { cache: "no-store" }).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put("index.html", copy)); return r; })
      .catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
