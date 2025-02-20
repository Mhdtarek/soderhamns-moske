// @ts-nocheck
let notificationPermission = false;
let serviceWorkerRegistration = null;

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    console.log("[Notifications] Browser does not support service workers");
    return false;
  }

  try {
    // Check if service worker is already registered
    const registrations = await navigator.serviceWorker.getRegistrations();
    console.log("[Notifications] Existing registrations:", registrations);

    if (registrations.length > 0) {
      // Unregister any existing service workers
      await Promise.all(registrations.map((reg) => reg.unregister()));
      console.log("[Notifications] Unregistered existing service workers");
    }

    // Register new service worker with absolute path
    const swPath = `${window.location.origin}/service-worker.js`;
    console.log("[Notifications] Registering service worker at:", swPath);

    serviceWorkerRegistration = await navigator.serviceWorker.register(swPath, {
      scope: "/",
    });

    console.log(
      "[Notifications] Service worker registered:",
      serviceWorkerRegistration
    );

    // Wait for the service worker to be ready
    const readyRegistration = await navigator.serviceWorker.ready;
    console.log("[Notifications] Service worker is ready:", readyRegistration);

    // Request background sync permission
    try {
      await navigator.permissions.query({ name: "periodic-background-sync" });
      console.log("[Notifications] Background sync is supported");
    } catch (err) {
      console.log("[Notifications] Background sync is not supported:", err);
    }

    // Wait for the service worker to take control
    if (!navigator.serviceWorker.controller) {
      console.log(
        "[Notifications] Waiting for service worker to take control..."
      );
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.log("[Notifications] Service worker control timeout");
          resolve();
        }, 5000);

        navigator.serviceWorker.addEventListener("controllerchange", () => {
          console.log(
            "[Notifications] Service worker now controlling the page"
          );
          clearTimeout(timeout);
          resolve();
        });
      });
    }

    // Test if we can communicate with the service worker
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: "PING" });
      console.log("[Notifications] Sent PING to service worker");
    }

    return true;
  } catch (error) {
    console.error("[Notifications] Service worker registration failed:", error);
    return false;
  }
}

export async function requestNotificationPermission() {
  console.log("[Notifications] Requesting permission...");

  if (!("Notification" in window)) {
    console.log("[Notifications] Browser does not support notifications");
    return false;
  }

  try {
    // Check if already granted
    if (Notification.permission === "granted") {
      console.log("[Notifications] Permission already granted");
      notificationPermission = true;
      await registerServiceWorker();
      return true;
    }

    // Request permission
    const permission = await Notification.requestPermission();
    console.log("[Notifications] Permission response:", permission);
    notificationPermission = permission === "granted";

    if (notificationPermission) {
      await registerServiceWorker();
    }

    return notificationPermission;
  } catch (error) {
    console.error("[Notifications] Error requesting permission:", error);
    return false;
  }
}

export function sendTestNotification() {
  console.log("[Notifications] Sending test notification...");
  if (!notificationPermission) {
    console.log("[Notifications] Cannot send test - permission not granted");
    return;
  }

  try {
    if (navigator.serviceWorker.controller) {
      console.log("[Notifications] Sending test via service worker");
      // Send immediate test notification
      navigator.serviceWorker.controller.postMessage({
        type: "SEND_TEST_NOTIFICATION",
      });

      // Send delayed test notification
      navigator.serviceWorker.controller.postMessage({
        type: "SEND_DELAYED_TEST_NOTIFICATION",
        delay: 15000, // 15 seconds
      });
    } else {
      console.log("[Notifications] Falling back to regular notification");
      new Notification("Test Notification", {
        body: "Detta är ett test av aviseringar",
        icon: "/favicon.png",
        requireInteraction: true,
      });
    }
  } catch (error) {
    console.error("[Notifications] Error sending test notification:", error);
  }
}

export function schedulePrayerNotifications(prayerTimes) {
  console.log("[Notifications] Scheduling prayer times:", prayerTimes);
  if (!notificationPermission) {
    console.log("[Notifications] Cannot schedule - permission not granted");
    return;
  }

  if (!navigator.serviceWorker.controller) {
    console.log("[Notifications] Cannot schedule - service worker not ready");
    return;
  }

  try {
    // Filter out non-prayer time fields
    const validPrayerTimes = {};
    ["Fajr", "Shuruk", "Dhohr", "Asr", "Maghrib", "Isha"].forEach((prayer) => {
      if (prayerTimes[prayer] && typeof prayerTimes[prayer] === "string") {
        validPrayerTimes[prayer] = prayerTimes[prayer];
      }
    });

    console.log(
      "[Notifications] Sending valid prayer times to service worker:",
      validPrayerTimes
    );
    navigator.serviceWorker.controller.postMessage({
      type: "SCHEDULE_PRAYER_TIMES",
      prayerTimes: validPrayerTimes,
    });
  } catch (error) {
    console.error("[Notifications] Error scheduling notifications:", error);
  }
}
