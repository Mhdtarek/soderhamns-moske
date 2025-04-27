// Basic service worker for notifications
let pushSubscription = null;

self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing Service Worker...", event);
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating Service Worker...", event);
  return self.clients.claim();
});

// Listen for push events
self.addEventListener("push", function (event) {
  console.log("[Service Worker] Push Received.");
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  try {
    const data = JSON.parse(event.data.text());
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: "/favicon.png",
        badge: "/favicon.png",
        requireInteraction: true,
        vibrate: [200, 100, 200],
      })
    );
  } catch (error) {
    console.error("[Service Worker] Error handling push:", error);
  }
});

// Handle all messages
self.addEventListener("message", async (event) => {
  console.log("[Service Worker] Received Message:", event.data);

  if (event.data.type === "PING") {
    console.log(
      "[Service Worker] Received PING, sending immediate test notification"
    );
    await showNotification("Test", "Service Worker is working!");
  }

  if (event.data.type === "SEND_TEST_NOTIFICATION") {
    console.log("[Service Worker] Sending test notification");
    await showNotification(
      "Test Notification",
      "Detta är ett test av aviseringar"
    );
  }

  if (event.data.type === "SEND_DELAYED_TEST_NOTIFICATION") {
    console.log("[Service Worker] Setting up delayed test notification");
    const delay = event.data.delay || 15000; // 15 seconds

    // Register a background sync
    try {
      await self.registration.sync.register("delayed-notification");
      await storeDelayedNotification({
        title: "Försenad Test Notification",
        body: "Detta är ett försenat test (15 sekunder) - fungerar även när webbläsaren är stängd!",
        triggerTime: new Date().getTime() + delay,
      });

      // Send immediate confirmation
      await showNotification(
        "Test Schemalagt",
        "En testnotifiering kommer om 15 sekunder"
      );
    } catch (err) {
      console.error("[Service Worker] Background Sync failed:", err);
    }
  }

  if (event.data.type === "SCHEDULE_PRAYER_TIMES") {
    console.log(
      "[Service Worker] Received prayer times:",
      event.data.prayerTimes
    );

    // Send an immediate confirmation notification
    await showNotification(
      "Prayer Times",
      "Prayer time notifications have been scheduled"
    );

    // Store prayer times for background sync
    try {
      await self.registration.sync.register("prayer-times");
      for (const [name, time] of Object.entries(event.data.prayerTimes)) {
        if (time && typeof time === "string" && name !== "month") {
          const timestamp = getTimestampForPrayer(name, time);
          await storePrayerNotification({
            title: "Bönetid",
            body: `Det är dags för ${name} (${time})`,
            triggerTime: timestamp,
          });
        }
      }
    } catch (err) {
      console.error("[Service Worker] Background Sync failed:", err);
    }
  }
});

// Handle background sync
self.addEventListener("sync", async function (event) {
  console.log("[Service Worker] Background Sync:", event.tag);

  if (event.tag === "delayed-notification" || event.tag === "prayer-times") {
    event.waitUntil(checkAndTriggerNotifications());
  }
});

// Helper function to show notifications
async function showNotification(title, body) {
  try {
    await self.registration.showNotification(title, {
      body: body,
      icon: "/favicon.png",
      badge: "/favicon.png",
      requireInteraction: true,
      vibrate: [200, 100, 200],
    });
    console.log(`[Service Worker] Successfully showed notification: ${title}`);
  } catch (error) {
    console.error(`[Service Worker] Error showing notification:`, error);
  }
}

function getTimestampForPrayer(name, time) {
  const [hours, minutes] = time.split(":");
  const now = new Date();
  const scheduledTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    parseInt(hours),
    parseInt(minutes)
  );

  if (scheduledTime < now) {
    scheduledTime.setDate(scheduledTime.getDate() + 1);
  }

  return scheduledTime.getTime();
}

// Store notifications in Cache Storage instead of IndexedDB
async function storeDelayedNotification(notification) {
  const cache = await caches.open("notifications");
  await cache.put(
    `/notifications/delayed/${notification.triggerTime}`,
    new Response(JSON.stringify(notification))
  );
}

async function storePrayerNotification(notification) {
  const cache = await caches.open("notifications");
  await cache.put(
    `/notifications/prayer/${notification.triggerTime}`,
    new Response(JSON.stringify(notification))
  );
}

async function checkAndTriggerNotifications() {
  const cache = await caches.open("notifications");
  const keys = await cache.keys();
  const now = new Date().getTime();

  for (const key of keys) {
    const response = await cache.match(key);
    const notification = await response.json();

    if (notification.triggerTime <= now) {
      await showNotification(notification.title, notification.body);
      await cache.delete(key);
    }
  }
}
