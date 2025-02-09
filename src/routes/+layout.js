// @ts-nocheck
import { initializeServiceWorker } from "$lib/prayerutils/notifications";

export const ssr = false;

// Initialize service worker as soon as possible
if (typeof window !== "undefined") {
  initializeServiceWorker();
}
