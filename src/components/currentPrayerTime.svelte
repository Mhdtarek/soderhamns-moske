<script>
  import { onDestroy, onMount } from "svelte";

  let isLoading = true;
  let hasError = false;
  let nextPrayer = "";
  let nextPrayerTime = "";
  /** @type {Date | null} */
  let targetTime = null;
  let countdown = "--:--:--";
  /** @type {ReturnType<typeof setInterval> | undefined} */
  let countdownInterval;
  /** @type {ReturnType<typeof setInterval> | undefined} */
  let refreshInterval;

  /** @param {string} timeString */
  function isValidTimeFormat(timeString) {
    return /^([01]\d|2[0-3]):([0-5]\d)$/.test(timeString);
  }

  /** @param {number} ms */
  function formatCountdown(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  async function loadNextPrayer() {
    isLoading = true;
    hasError = false;

    try {
      const response = await fetch("/api/getNextPrayerTime");
      const data = await response.json();

      if (!isValidTimeFormat(data?.time)) {
        throw new Error("Invalid next prayer time format");
      }

      const now = new Date();
      const [hours, minutes] = data.time.split(":").map(Number);
      const candidate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0, 0);
      if (candidate <= now) candidate.setDate(candidate.getDate() + 1);

      nextPrayer = data.key || "Nästa";
      nextPrayerTime = data.time;
      targetTime = candidate;
      countdown = formatCountdown(targetTime.getTime() - Date.now());
      startCountdown();
    } catch (error) {
      hasError = true;
      countdown = "--:--:--";
      console.error(error);
    } finally {
      isLoading = false;
    }
  }

  function startCountdown() {
    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
      if (!targetTime) return;
      const timeDifference = targetTime.getTime() - Date.now();

      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        loadNextPrayer();
        return;
      }

      countdown = formatCountdown(timeDifference);
    }, 1000);
  }

  onMount(() => {
    loadNextPrayer();
    // Guardrail refresh so next prayer always rolls over even if timer drifts.
    refreshInterval = setInterval(() => {
      loadNextPrayer();
    }, 60 * 1000);
  });

  onDestroy(() => {
    clearInterval(countdownInterval);
    clearInterval(refreshInterval);
  });
</script>

<article class="card green5 next-prayer-card" aria-live="polite">
  <p class="label">Nästa bönetid</p>
  {#if hasError}
    <p class="error">Kunde inte hämta bönetid</p>
  {:else if isLoading}
    <p class="loading">Laddar...</p>
  {:else}
    <p class="name">{nextPrayer}</p>
    <p class="countdown">{countdown}</p>
    <p class="time">Tid: {nextPrayerTime}</p>
  {/if}
</article>

<style>
  .next-prayer-card {
    margin-top: 10px;
    padding: 10px 12px 12px 12px;
    position: relative;
  }

  .label {
    margin: 0;
    position: absolute;
    top: 8px;
    left: 10px;
    font-size: 0.74rem;
    opacity: 0.85;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .name {
    margin: 12px 0 2px 0;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 1.2;
    text-align: center;
  }

  .time {
    margin: 6px 0 0 0;
    font-size: 0.82rem;
    text-align: right;
    opacity: 0.9;
  }

  .countdown {
    margin: 0;
    font-weight: 700;
    font-size: 1.1rem;
    text-align: center;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.02em;
  }

  .error,
  .loading {
    margin: 14px 0 2px 0;
    font-size: 0.9rem;
    text-align: center;
  }
</style>
