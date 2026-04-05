<script>
import { textSize, isLarger } from "$lib/stores";
import { browser } from '$app/environment'; 
import { page } from "$app/stores";

  /** @type {any} */
  export let prayerTimes = {}
  export let header = ""

  let textSizeValue = 100
  let isLargerValue = false

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
<article class="card app-card prayer-times-card" style="overflow: hidden; --text-size: {textSizeValue}%">
  <div class="card-header">
    <p class="header-label">{header || "Bönetider"}</p>
    {#if !isLoading}
      <div class="header-date">
        {#if prayerTimes.hijri?.label}
          <span class="header-hijri">{prayerTimes.hijri.label}</span>
        {/if}
        <span class="header-gregorian">
          {prayerTimes.gregorianLabel ?? `${prayerTimes.Dat}/${prayerTimes.month}`}
        </span>
      </div>
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
    margin-top: 12px;
    padding: 14px 14px 16px;
  }

  .larger {
    font-size: var(--text-size)
  }

  .card-header {
    position: relative;
    min-height: 48px;
    padding: 0 6px 10px 6px;
  }

  .header-label {
    margin: 0;
    position: absolute;
    top: 0;
    left: 6px;
    max-width: calc(50% - 6px);
    font-family: var(--app-font-display, "Cormorant Garamond", serif);
    font-size: 0.875rem;
    font-weight: 600;
    opacity: 0.88;
    letter-spacing: 0.06em;
    color: var(--app-text-muted, #4a463c);
    line-height: 1.25;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .header-date {
    margin: 0;
    position: absolute;
    top: 0;
    right: 6px;
    font-size: 0.82rem;
    line-height: 1.25;
    text-align: right;
    color: var(--app-text-muted, #4a463c);
    opacity: 0.92;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    max-width: calc(48% - 6px);
    min-width: calc(35% - 6px);
    overflow-wrap: anywhere;
    white-space: normal;
  }

  .header-hijri,
  .header-gregorian {
    margin: 0;
    white-space: normal;
  }

  @media (max-width: 520px) {
    .header-label {
      position: static;
      max-width: 100%;
      white-space: normal;
      overflow: visible;
      margin-bottom: 5px;
    }

    .header-date {
      text-align: right;
      align-items: flex-end;
      padding-left: 0;
    }
  }

  @media (max-width: 600px) {
    .header-label {
      max-width: calc(45% - 6px);
    }

    .header-date {
      min-width: calc(40% - 6px);
      max-width: calc(52% - 6px);
    }
  }

  .header-hijri {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--app-accent, #1b6b4a);
    opacity: 0.95;
  }

  .header-gregorian {
    margin: 0;
    font-size: 0.74rem;
    font-weight: 500;
    color: var(--app-text-muted, #4a463c);
    opacity: 0.92;
  }

  .meta-row {
    padding: 0 16px 8px 16px;
  }

  .more-link {
    display: inline-block;
    margin: 12px 4px 0;
    padding: 10px 14px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: var(--app-radius-sm, 12px);
    background: var(--app-accent-soft, #d4ebe0);
    color: var(--app-accent, #1b6b4a) !important;
    text-decoration: none !important;
  }

  .more-link:focus-visible {
    outline: 2px solid var(--app-accent, #1b6b4a);
    outline-offset: 2px;
  }

  :global(.app-shell) .prayer-table :is(th, td) {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
    font-size: 1.05rem;
  }

  :global(.app-shell) .prayer-table thead th {
    font-size: 0.875rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--app-text-muted, #3d5247);
  }

  :global(.app-shell) .prayer-table :is(th, td).larger {
    font-size: var(--text-size);
  }

  .skeleton {
    display: inline-block;
    background: rgba(20, 23, 17, 0.08);
    border-radius: 10px;
  }
  .skeleton-text {
    height: 14px;
    vertical-align: middle;
  }
  :global(.app-shell[data-theme="dark"]) .skeleton {
    background: rgba(233, 239, 233, 0.12);
  }
</style>