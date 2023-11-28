// Define the prayer times
const prayerTimes = {
  Fajr: "04:47",
  Shuruk: "07:08",
  Dhohr: "11:40",
  Asr: "13:27",
  Maghrib: "16:02",
  Isha: "22:50",
};

// Function to display a notification
function showNotification(title, body) {
  self.registration.showNotification(title, {
    body: body,
  });
}

// Function to schedule notifications
function scheduleNotifications() {
  const now = new Date();
  const currentTime =
    now.getHours() +
    ":" +
    (now.getMinutes() < 10 ? "0" : "") +
    now.getMinutes();

  for (const prayer in prayerTimes) {
    if (prayerTimes[prayer] === currentTime) {
      showNotification(`Time for ${prayer} prayer!`, "It is time to pray.");
    }
  }
}

// Set up a timer to check and send notifications
setInterval(scheduleNotifications, 60000); // Check every minute

// Add an event listener for notification click
self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  // Add your custom action here if needed
});

// Add an event listener for service worker installation
self.addEventListener("install", function (event) {
  // Perform any initial setup here
});

// Add an event listener for service worker activation
self.addEventListener("activate", function (event) {
  // Perform any necessary cleanup here
});
