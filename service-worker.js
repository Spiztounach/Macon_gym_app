const CACHE_NAME = 'gymsuivi-v10';
const BIRTHDAY_STATE_URL = new URL('./__birthday_state__', self.registration.scope).href;
const BIRTHDAY_PERIODIC_SYNC_TAG = 'gym-birthday-check';

const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-192-maskable.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.pathname.endsWith('/version.json')) {
    event.respondWith(fetch(event.request, {cache: 'no-store'}));
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request).then(networkResponse => {
        if (networkResponse.ok || networkResponse.type === 'opaque') {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return networkResponse;
      });
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function findBirthdaysForDate(gymnasts, date = new Date()) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (Array.isArray(gymnasts) ? gymnasts : [])
    .filter(gymnast => gymnast && gymnast.month === month && gymnast.day === day);
}

function buildBirthdayNotificationContent(birthdays) {
  const names = birthdays.map(gymnast => gymnast.name).join(', ');
  if (birthdays.length === 1) {
    return {
      title: `🎂 Anniversaire de ${names}`,
      body: `C'est l'anniversaire de ${names} aujourd'hui !`
    };
  }
  return {
    title: `🎂 ${birthdays.length} anniversaires aujourd'hui`,
    body: names
  };
}

async function loadBirthdayState() {
  const cache = await caches.open(CACHE_NAME);
  const response = await cache.match(BIRTHDAY_STATE_URL);
  if (!response) return {enabled: false, gymnasts: [], lastNotificationDate: null};
  try {
    return await response.json();
  } catch (_) {
    return {enabled: false, gymnasts: [], lastNotificationDate: null};
  }
}

async function saveBirthdayState(state) {
  const cache = await caches.open(CACHE_NAME);
  await cache.put(BIRTHDAY_STATE_URL, new Response(JSON.stringify(state), {
    headers: {'Content-Type': 'application/json'}
  }));
}

async function checkBirthdayNotificationsInWorker(state = null, date = new Date()) {
  const currentState = state || await loadBirthdayState();
  if (!currentState.enabled) return;

  const dateKey = getLocalDateKey(date);
  if (currentState.lastNotificationDate === dateKey) return;

  const birthdays = findBirthdaysForDate(currentState.gymnasts, date);
  if (birthdays.length === 0) return;

  const content = buildBirthdayNotificationContent(birthdays);
  await self.registration.showNotification(content.title, {
    body: content.body,
    icon: new URL('./icons/icon-192.png', self.registration.scope).href,
    badge: new URL('./icons/icon-192-maskable.png', self.registration.scope).href,
    tag: `gym-birthday-${dateKey}`,
    lang: 'fr',
    data: {url: self.registration.scope}
  });
  currentState.lastNotificationDate = dateKey;
  await saveBirthdayState(currentState);
}

self.addEventListener('message', event => {
  if (!event.data || event.data.type !== 'SYNC_BIRTHDAY_STATE') return;
  event.waitUntil((async () => {
    const previous = await loadBirthdayState();
    const next = {
      enabled: event.data.enabled === true,
      gymnasts: Array.isArray(event.data.gymnasts) ? event.data.gymnasts : [],
      lastNotificationDate: previous.lastNotificationDate || null
    };
    await saveBirthdayState(next);
    if (event.data.checkNow) await checkBirthdayNotificationsInWorker(next);
  })());
});

self.addEventListener('periodicsync', event => {
  if (event.tag === BIRTHDAY_PERIODIC_SYNC_TAG)
    event.waitUntil(checkBirthdayNotificationsInWorker());
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url)
    || self.registration.scope;
  event.waitUntil(
    self.clients.matchAll({type: 'window', includeUncontrolled: true}).then(windowClients => {
      const existing = windowClients.find(client => client.url.startsWith(self.registration.scope));
      if (existing) return existing.focus();
      return self.clients.openWindow(targetUrl);
    })
  );
});
