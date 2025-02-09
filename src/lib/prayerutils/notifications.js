// @ts-nocheck
let notificationPermission = false;
let serviceWorkerRegistration = null;

export async function initializeServiceWorker() {
  console.log("Initializing service worker...");
  if ("serviceWorker" in navigator) {
    try {
      console.log(
        "Browser supports service workers, attempting to register..."
      );

      // First check if we already have a controller
      if (navigator.serviceWorker.controller) {
        console.log("Service worker already controlling the page");
        serviceWorkerRegistration = await navigator.serviceWorker.ready;
        return true;
      }

      // Register service worker from the static directory
      serviceWorkerRegistration = await navigator.serviceWorker.register(
        "/service-worker.js",
        {
          scope: "/",
          updateViaCache: "none",
        }
      );
      console.log(
        "Service worker registration successful:",
        serviceWorkerRegistration
      );

      // Wait for the service worker to be ready
      const registration = await navigator.serviceWorker.ready;
      serviceWorkerRegistration = registration;
      console.log("Service worker is ready");

      // Wait for the service worker to take control
      if (!navigator.serviceWorker.controller) {
        await new Promise((resolve) => {
          navigator.serviceWorker.addEventListener("controllerchange", () => {
            console.log("Service worker now controlling the page");
            resolve();
          });
        });
      }

      return true;
    } catch (error) {
      console.error("Service Worker registration failed:", error);
      return false;
    }
  }
  console.log("Browser does not support service workers");
  return false;
}

export async function requestNotificationPermission() {
  console.log("Requesting notification permission...");
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications");
    return false;
  }

  try {
    // Check if we already have permission
    if (Notification.permission === "granted") {
      console.log("Notification permission already granted");
      notificationPermission = true;
      await initializeServiceWorker();
      return true;
    }

    if (Notification.permission === "denied") {
      console.log("Notifications are blocked by the browser");
      return false;
    }

    console.log("Asking user for permission...");
    const permission = await Notification.requestPermission();
    console.log("Permission response:", permission);
    notificationPermission = permission === "granted";

    if (notificationPermission) {
      console.log("Permission granted, initializing service worker...");
      await initializeServiceWorker();
      // Send an immediate test notification
      sendTestNotification();
    }

    return notificationPermission;
  } catch (error) {
    console.error("Error requesting notification permission:", error);
    return false;
  }
}

export function sendTestNotification() {
  console.log("Sending test notification...");
  if (!notificationPermission) {
    console.log("Cannot send test notification - permission not granted");
    return;
  }

  if (navigator.serviceWorker.controller) {
    console.log("Sending test message to service worker");
    navigator.serviceWorker.controller.postMessage({
      type: "SEND_TEST_NOTIFICATION",
    });
  } else {
    console.log("Service worker not ready, using regular notification");
    try {
      new Notification("Test Notification", {
        body: "Detta är ett test av aviseringar",
        icon: "/favicon.png",
        requireInteraction: true,
        silent: false,
      });
    } catch (error) {
      console.error("Error sending test notification:", error);
    }
  }
}

export function scheduleNotification(prayerName, prayerTime) {
  if (!notificationPermission) return;

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

  setTimeout(() => {
    new Notification("Prayer Time", {
      body: `It's time for ${prayerName} prayer (${prayerTime})`,
      icon: "/favicon.png", // Make sure you have a favicon
      silent: false,
    });
  }, timeUntilNotification);
}

export function schedulePrayerNotifications(prayerTimes) {
  console.log("Attempting to schedule prayer notifications...", prayerTimes);
  if (!notificationPermission || !navigator.serviceWorker.controller) {
    console.log("Notifications not enabled or service worker not ready");
    console.log("Permission:", notificationPermission);
    console.log(
      "Service Worker Controller:",
      !!navigator.serviceWorker.controller
    );
    return;
  }

  // Filter out non-prayer time fields
  const validPrayerTimes = {};
  ["Fajr", "Shuruk", "Dhohr", "Asr", "Maghrib", "Isha"].forEach((prayer) => {
    if (prayerTimes[prayer]) {
      validPrayerTimes[prayer] = prayerTimes[prayer];
    }
  });

  console.log("Sending prayer times to service worker:", validPrayerTimes);
  navigator.serviceWorker.controller.postMessage({
    type: "SCHEDULE_PRAYER_TIMES",
    prayerTimes: validPrayerTimes,
  });
}
