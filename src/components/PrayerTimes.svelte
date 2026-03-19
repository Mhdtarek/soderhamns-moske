<script>
import { size, textSize, isLarger } from "$lib/stores";
import { browser } from '$app/environment'; 
import { page } from "$app/stores";

  /** @type {any} */
  export let prayerTimes = {}
  export let header = ""

  let sizeValue = ""
  let textSizeValue = 100
  let isLargerValue = false

  size.subscribe((value) => {
		sizeValue = value;
	});
  textSize.subscribe((value) => {
		textSizeValue = value;
	});
  isLarger.subscribe((value) => {
		isLargerValue = value;
	});

  // Treat the component as "loading" until we have at least one prayer time field.
  $: isLoading =
    !prayerTimes ||
    typeof prayerTimes !== "object" ||
    !("Fajr" in prayerTimes) ||
    !prayerTimes.Fajr;

  $: isOnBonetiderPage = $page.url.pathname === "/app/bonetider";
</script>
<article class="card green5 prayer-times-card" style="overflow: hidden; --text-size: {textSizeValue}%">
  <div class="card-header">
    <p class="header-label">{header || "Bönetider"}</p>
    {#if !isLoading}
      <p class="header-date">{prayerTimes.month}/{prayerTimes.Dat}</p>
    {/if}
  </div>

  {#if isLoading}
    <div class="meta-row">
      <span class="skeleton skeleton-text" style="width: 40%"></span>
    </div>
    <table class="border large-space center-align prayer-table">
      <thead>
        <tr>
          <th class:larger={isLargerValue}>Bön</th>
          <th class:larger={isLargerValue}>Tid</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class:larger={isLargerValue}><span class="skeleton skeleton-text" style="width: 40%"></span></th>
          <th class:larger={isLargerValue}><span class="skeleton skeleton-text" style="width: 55%"></span></th>
        </tr>
        <tr>
          <th class:larger={isLargerValue}><span class="skeleton skeleton-text" style="width: 45%"></span></th>
          <th class:larger={isLargerValue}><span class="skeleton skeleton-text" style="width: 50%"></span></th>
        </tr>
        <tr>
          <th class:larger={isLargerValue}><span class="skeleton skeleton-text" style="width: 35%"></span></th>
          <th class:larger={isLargerValue}><span class="skeleton skeleton-text" style="width: 60%"></span></th>
        </tr>
        <tr>
          <th class:larger={isLargerValue}><span class="skeleton skeleton-text" style="width: 30%"></span></th>
          <th class:larger={isLargerValue}><span class="skeleton skeleton-text" style="width: 52%"></span></th>
        </tr>
        <tr>
          <th class:larger={isLargerValue}><span class="skeleton skeleton-text" style="width: 50%"></span></th>
          <th class:larger={isLargerValue}><span class="skeleton skeleton-text" style="width: 58%"></span></th>
        </tr>
        <tr>
          <th class:larger={isLargerValue}><span class="skeleton skeleton-text" style="width: 28%"></span></th>
          <th class:larger={isLargerValue}><span class="skeleton skeleton-text" style="width: 48%"></span></th>
        </tr>
      </tbody>
    </table>
  {:else}
    <table class="border large-space center-align prayer-table" style="overflow-x: auto;">
      <thead>
        <tr>
          <th class:larger={isLargerValue}>Bön</th>
          <th class:larger={isLargerValue}>Tid</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class:larger={isLargerValue}>Fajr</th>
          <th class:larger={isLargerValue}>{prayerTimes.Fajr}</th>
        </tr>
        <tr>
          <th class:larger={isLargerValue}>Shuruk</th>
          <th class:larger={isLargerValue}>{prayerTimes.Shuruk}</th>
        </tr>
        <tr>
          <th class:larger={isLargerValue}>Dhohr</th>
          <th class:larger={isLargerValue}>{prayerTimes.Dhohr}</th>
        </tr>
        <tr>
          <th class:larger={isLargerValue}>Asr</th>
          <th class:larger={isLargerValue}>{prayerTimes.Asr}</th>
        </tr>
        <tr>
          <th class:larger={isLargerValue}>Maghrib</th>
          <th class:larger={isLargerValue}>{prayerTimes.Maghrib}</th>
        </tr>
        <tr>
          <th class:larger={isLargerValue}>Isha</th>
          <th class:larger={isLargerValue}>{prayerTimes.Isha}</th>
        </tr>
      </tbody>
    </table>
    {#if !isOnBonetiderPage}
      <a class="more-link" href="/app/bonetider#top">Se mer bönetider</a>
    {/if}
  {/if}
</article>
<style>
  :root {
    --text-size: 100%;
  }
  .prayer-times-card {
    margin-top: 10px;
    padding: 10px 10px 12px 10px;
  }

  .larger {
    font-size: var(--text-size)
  }

  .card-header {
    position: relative;
    min-height: 16px;
    padding: 0 6px 2px 6px;
  }

  .header-label {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.74rem;
    opacity: 0.85;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .header-date {
    margin: 0;
    font-size: 0.82rem;
    text-align: right;
    opacity: 0.9;
  }

  .meta-row {
    padding: 0 16px 8px 16px;
  }

  .more-link {
    display: inline-block;
    margin: 8px 6px 0 6px;
    font-size: 0.9rem;
  }

  /* Lightweight shimmer skeleton (no dependencies) */
  .skeleton {
    display: inline-block;
    background: linear-gradient(90deg, rgba(255,255,255,0.10), rgba(255,255,255,0.22), rgba(255,255,255,0.10));
    background-size: 200% 100%;
    animation: shimmer 1.2s ease-in-out infinite;
    border-radius: 10px;
  }
  .skeleton-text {
    height: 14px;
    vertical-align: middle;
  }
  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
</style>