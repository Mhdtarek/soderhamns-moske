/// <reference lib="webworker" />
// @ts-nocheck

const CACHE_NAME = "prayer-times-cache-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

// Handle scheduling prayer time notifications
self.addEventListener("message", (event) => {
  if (event.data.type === "SCHEDULE_PRAYER_TIMES") {
    const prayerTimes = event.data.prayerTimes;
    schedulePrayerNotifications(prayerTimes);
  }
});

function schedulePrayerNotifications(prayerTimes) {
  Object.entries(prayerTimes).forEach(([prayerName, time]) => {
    if (prayerName !== "month") {
      scheduleNotification(prayerName, time);
    }
  });
}

function scheduleNotification(prayerName, prayerTime) {
  const [hours, minutes] = prayerTime.split(":");
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

  self.registration.showNotification("Prayer Time", {
    body: `It's time for ${prayerName} prayer (${prayerTime})`,
    icon: "/favicon.png",
    badge: "/favicon.png",
    tag: `prayer-${prayerName}-${scheduledTime.getTime()}`,
    renotify: true,
    silent: false,
  });
}
