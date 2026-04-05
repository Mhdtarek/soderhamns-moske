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

<article class="card app-card next-prayer-card" aria-live="polite">
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
    margin-top: 12px;
    padding: 1.25rem 1.125rem 1.125rem;
    position: relative;
    overflow: hidden;
  }

  .next-prayer-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      var(--app-gold, #a67c29),
      var(--app-accent, #134632) 42%,
      var(--app-accent, #134632) 58%,
      var(--app-gold, #a67c29)
    );
    pointer-events: none;
  }

  .label {
    margin: 0;
    position: absolute;
    top: 10px;
    left: 12px;
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--app-text-muted, #3d5247);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .name {
    margin: 1.5rem 0 0.25rem 0;
    font-family: var(--app-font-display, "Cormorant Garamond", serif);
    font-weight: 600;
    font-size: clamp(1.65rem, 4.5vw, 2.15rem);
    line-height: 1.2;
    text-align: center;
    color: var(--app-text, #14221a);
    letter-spacing: 0.03em;
  }

  .time {
    margin: 0.75rem 0 0 0;
    font-size: 1rem;
    text-align: center;
    font-weight: 600;
    color: var(--app-text-muted, #3d5247);
  }

  .countdown {
    margin: 0.25rem 0 0 0;
    font-weight: 700;
    font-size: clamp(1.75rem, 5vw, 2.35rem);
    text-align: center;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.04em;
    color: var(--app-accent, #1b6b4a);
  }

  .error,
  .loading {
    margin: 1.5rem 0 0.25rem 0;
    font-size: 1.05rem;
    text-align: center;
    color: var(--app-text-muted, #3d5247);
  }
</style>
