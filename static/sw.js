// Service Worker Script (sw.js)

// Set the interval to check for prayer times and display notifications (in milliseconds)
const notificationInterval = 1000 * 60 * 15; // 15 minutes

self.addEventListener("install", (event) => {
  event.waitUntil(
    self.skipWaiting() // Activate the new service worker immediately
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    self.clients.claim() // Take control of all pages under this service worker's scope
  );
});

self.addEventListener("push", (event) => {
  // Handle push events if needed
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  // Handle opening the PWA at a specific section (e.g., prayer times page)
  const fullPath = self.location.origin + "/app/prayerTimes";
  clients.openWindow(fullPath);
});

self.addEventListener("notificationclose", (event) => {
  // Handle notification close event if needed
});

// Use a background timer to periodically fetch prayer times and schedule notifications
setInterval(fetchAndSchedulePrayerTimes, notificationInterval);

function fetchAndSchedulePrayerTimes() {
  fetch("/api/getTodayPrayerTimes")
    .then((response) => response.json())
    .then((data) => {
      // Extract prayer time data
      const { Fajr, Shuruk, Dhohr, Asr, Maghrib, Isha } = data;

      // Schedule notifications for each prayer time
      schedulePrayerNotification("Fajr", Fajr);
      schedulePrayerNotification("Shuruk", Shuruk);
      schedulePrayerNotification("Dhohr", Dhohr);
      schedulePrayerNotification("Asr", Asr);
      schedulePrayerNotification("Maghrib", Maghrib);
      schedulePrayerNotification("Isha", Isha);
    })
    .catch((error) => {
      console.error("Error fetching prayer times:", error);
    });
}

function schedulePrayerNotification(prayerName, prayerTime) {
  const title = `${prayerName} Prayer Time`;
  const options = {
    body: `It is time for the ${prayerName} prayer.`,
    icon: "custom-notification-icon.png",
    data: {
      path: "/app/prayerTimes", // Specify the path to open when the notification is clicked
    },
  };

  // Schedule the notification for the given prayer time
  const timeInMilliseconds = new Date(prayerTime).getTime() - Date.now();
  if (timeInMilliseconds > 0) {
    setTimeout(() => {
      self.registration.showNotification(title, options);
    }, timeInMilliseconds);
  }
}
