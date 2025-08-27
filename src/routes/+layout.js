// @ts-nocheck
import { requestNotificationPermission } from "$lib/prayerutils/notifications";

export const ssr = false;

// Initialize notifications if already granted
if (
  typeof window !== "undefined" &&
  "Notification" in window &&
  Notification.permission === "granted"
) {
  requestNotificationPermission();
}
