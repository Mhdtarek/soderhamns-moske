const CACHE_NAME = "prayer-times-cache-v1";

// Valid prayer time fields
const PRAYER_TIMES = ["Fajr", "Shuruk", "Dhohr", "Asr", "Maghrib", "Isha"];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  event.waitUntil(self.skipWaiting());
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");
  event.waitUntil(
    Promise.all([
      clients.claim(),
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
    ])
  );
});

// Handle scheduling prayer time notifications
self.addEventListener("message", (event) => {
  console.log("Service Worker received message:", event.data);

  if (event.data.type === "SCHEDULE_PRAYER_TIMES") {
    const prayerTimes = event.data.prayerTimes;
    schedulePrayerNotifications(prayerTimes);
  } else if (event.data.type === "SEND_TEST_NOTIFICATION") {
    console.log("Sending test notification from service worker");
    // Send notification immediately without waitUntil
    self.registration
      .showNotification("Test Avisering", {
        body: "Om du ser detta meddelande fungerar aviseringar!",
        icon: "/favicon.png",
        badge: "/favicon.png",
        tag: "test-notification",
        renotify: true,
        requireInteraction: true,
        silent: false,
        vibrate: [200, 100, 200],
      })
      .then(() => {
        console.log("Test notification sent successfully");
      })
      .catch((error) => {
        console.error("Error sending test notification:", error);
      });
  }
});

function schedulePrayerNotifications(prayerTimes) {
  console.log("Scheduling notifications for prayer times:", prayerTimes);
  // Send an immediate test notification first
  self.registration.showNotification("Prayer Times Scheduled", {
    body: "Prayer time notifications have been scheduled",
    icon: "/favicon.png",
    badge: "/favicon.png",
    tag: "schedule-confirmation",
    renotify: true,
    requireInteraction: true,
    silent: false,
  });

  Object.entries(prayerTimes).forEach(([prayerName, time]) => {
    if (PRAYER_TIMES.includes(prayerName)) {
      scheduleNotification(prayerName, time);
    }
  });
}

function scheduleNotification(prayerName, prayerTime) {
  try {
    if (typeof prayerTime !== "string") {
      console.error(
        `Invalid prayer time format for ${prayerName}:`,
        prayerTime
      );
      return;
    }

    const [hours, minutes] = prayerTime.split(":");
    if (!hours || !minutes) {
      console.error(`Invalid time format for ${prayerName}: ${prayerTime}`);
      return;
    }

    const now = new Date();
    const scheduledTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      parseInt(hours),
      parseInt(minutes)
    );

    // If the prayer time has already passed today, schedule for tomorrow
    if (scheduledTime < now) {
      scheduledTime.setDate(scheduledTime.getDate() + 1);
    }

    const timeUntilNotification = scheduledTime.getTime() - now.getTime();
    console.log(
      `Scheduling notification for ${prayerName} at ${scheduledTime}`
    );

    // Send a test notification immediately
    self.registration.showNotification("Test Schedule", {
      body: `Scheduled ${prayerName} notification for ${scheduledTime}`,
      icon: "/favicon.png",
      badge: "/favicon.png",
      tag: `schedule-${prayerName}`,
      renotify: true,
      requireInteraction: true,
      silent: false,
    });

    setTimeout(() => {
      self.registration.showNotification("Bönetid", {
        body: `Det är dags för ${prayerName} (${prayerTime})`,
        icon: "/favicon.png",
        badge: "/favicon.png",
        tag: `prayer-${prayerName}-${scheduledTime.getTime()}`,
        renotify: true,
        requireInteraction: true,
        silent: false,
        vibrate: [200, 100, 200],
        data: {
          prayerName,
          prayerTime,
          scheduledTime: scheduledTime.getTime(),
        },
      });
    }, timeUntilNotification);
  } catch (error) {
    console.error(`Error scheduling notification for ${prayerName}:`, error);
  }
}
