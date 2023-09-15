<script>
  import { onMount, onDestroy } from "svelte";
  
  let nextTime = {};
  let countdownInterval;
  
  onMount(async () => {
    fetch("/api/getNextPrayerTime")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Ensure that nextTime.time is in HH:MM format
        if (isValidTimeFormat(data.time)) {
          const now = new Date();
          const [hours, minutes] = data.time.split(":");
          const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(hours), parseInt(minutes));

          if (targetTime < now) {
            // If the target time is earlier than the current time, assume it's for the next day
            targetTime.setDate(targetTime.getDate() + 1);
          }

          nextTime = data;
          nextTime.targetTime = targetTime;
          startCountdown();
        } else {
          console.error("Invalid time format for nextTime.time:", data.time);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  // Function to check if a time string is in HH:MM format
  function isValidTimeFormat(timeString) {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(timeString);
  }

  function startCountdown() {
    countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const targetTime = nextTime.targetTime.getTime();

      const timeDifference = targetTime - currentTime;

      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        // Handle the case when the countdown is completed (e.g., show a message).
      } else {
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        nextTime.countdown = `${hours}:${minutes}:${seconds}`;
      }
    }, 1000);
  }

  onDestroy(() => {
    clearInterval(countdownInterval);
  });
</script>

<article class="green5">
  <h6>
    Nästa bönetid
  </h6>
  <h5>{nextTime.key} | {nextTime.countdown}</h5>
  <h7></h7>
</article>

<style>
  h6, h7, h5, p {
    text-align: center;
    display: block;
  }
</style>
