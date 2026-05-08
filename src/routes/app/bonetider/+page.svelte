<script>
  import { onMount } from "svelte";
  import PrayerTimes from "../../../components/PrayerTimes.svelte";

  import { textSize, isLarger } from "$lib/stores";
  import { browser } from '$app/environment'; 

  let textSizeValue = 100
  let isLargerValue = false

  textSize.subscribe((value) => {
		textSizeValue = value;
	});
  isLarger.subscribe((value) => {
		isLargerValue = value;
	});

  let yesterdayPrayerTimes = {}
  let todayPrayerTimes = {}
  let tommorowPrayerTimes = {}
  let isLoadingDaily = true
  let isLoadingMonth = true
  let monthFetchStarted = false
  let showMonthSection = false
  /** @type {HTMLElement | null} */
  let monthSentinel = null
  
  /**
* @type {any[]}
*/
  let monthlyPrayerTimes = []

  async function fetchMonthPrayerTimes() {
    if (monthFetchStarted) return;
    monthFetchStarted = true;
    isLoadingMonth = true;

    await fetch("/api/getMonthsPrayerTime")
      .then((r) => r.json())
      .then((data) => {
        monthlyPrayerTimes = data;
      })
      .catch((error) => console.log(error))
      .finally(() => {
        isLoadingMonth = false;
      });
  }

  onMount(async () => { 
    isLoadingDaily = true;

    const dailyPromise = Promise.all([
      fetch("/api/getYesterdayPrayerTimes").then((r) => r.json()),
      fetch("/api/getTodayPrayerTimes").then((r) => r.json()),
      fetch("/api/getTommorowPrayerTimes").then((r) => r.json()),
    ])
      .then(([y, t, tm]) => {
        yesterdayPrayerTimes = y;
        todayPrayerTimes = t;
        tommorowPrayerTimes = tm;
      })
      .catch((error) => console.log(error))
      .finally(() => {
        isLoadingDaily = false;
      });

    // Lazy-fetch month table only when user scrolls near it.
    if (browser && monthSentinel) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            showMonthSection = true;
            fetchMonthPrayerTimes();
            io.disconnect();
          }
        },
        { root: null, rootMargin: "400px 0px", threshold: 0.01 }
      );
      io.observe(monthSentinel);
    }

    await Promise.allSettled([dailyPromise]);
  }); 
</script>
<svelte:head>
  <title>APP | BÖNETIDER</title>
</svelte:head>
<main class="responsive app-page app-page-wide" id="top">
  <article class="no-padding border primary-container app-hero">
    <img class="responsive medium" src="/prayermosque.png" alt="Moské" />
    <div
      class="absolute bottom left right padding bottom-shadow white-text app-hero-bar"
    >
      <nav>
        <h5 class="app-hero-title">Bönetider</h5>
        <div class="max"></div>
        <a href="/app/kontakt" class="circle transparent app-hero-icon" aria-label="Kontakt">
          <i>phone</i>
        </a>
      </nav>
    </div>
  </article>
  <div class="tabs center-align min">
    <a href="#page1" data-ui="#page1" on:click|preventDefault>Bönetider igår</a>
    <a href="#page2" data-ui="#page2" class="active" on:click|preventDefault>Bönetider idag</a>
    <a href="#page3" data-ui="#page3" on:click|preventDefault>Bönetider imorgon</a>
  </div>
  
  <div class="page" id="page1">
    <PrayerTimes prayerTimes={isLoadingDaily ? {} : yesterdayPrayerTimes} />
  </div>
  <div class="page active" id="page2">
    <PrayerTimes prayerTimes={isLoadingDaily ? {} : todayPrayerTimes} />
  </div>
  <div class="page" id="page3">
    <PrayerTimes prayerTimes={isLoadingDaily ? {} : tommorowPrayerTimes} />
  </div>

  <div bind:this={monthSentinel} style="height: 1px;"></div>
  <h4 class="month-heading">Månadens bönetider</h4>
  <article class="card app-card prayer-month-card">

    {#if !showMonthSection}
      <div class="month-skeleton">
        <div class="skeleton skeleton-text" style="width: 40%"></div>
        <div class="skeleton skeleton-text" style="width: 55%"></div>
        <div class="skeleton skeleton-text" style="width: 50%"></div>
        <div class="skeleton skeleton-text" style="width: 60%"></div>
      </div>
    {:else if isLoadingMonth}
      <div class="month-skeleton">
        <div class="skeleton skeleton-text" style="width: 40%"></div>
        <div class="skeleton skeleton-text" style="width: 55%"></div>
        <div class="skeleton skeleton-text" style="width: 50%"></div>
        <div class="skeleton skeleton-text" style="width: 60%"></div>
        <div class="skeleton skeleton-text" style="width: 45%"></div>
        <div class="skeleton skeleton-text" style="width: 58%"></div>
        <div class="skeleton skeleton-text" style="width: 52%"></div>
        <div class="skeleton skeleton-text" style="width: 48%"></div>
      </div>
    {:else}
      <div class="monthly-table-wrapper">
        <table class="border large-space" style="--text-size: {textSizeValue}%">
          <thead>
        <tr>
          <th class:larger={isLargerValue}>Datum</th>
          <th class:larger={isLargerValue}>Fajr</th>
          <th class:larger={isLargerValue}>Shuruk</th>
          <th class:larger={isLargerValue}>Dhohr</th>
          <th class:larger={isLargerValue}>Asr</th>
          <th class:larger={isLargerValue}>Maghrib</th>
          <th class:larger={isLargerValue}>Isha</th>
        </tr>
      </thead>
      <tbody>
        {#each monthlyPrayerTimes as dailyPrayerTimes}
          <tr>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Dat}
            </th>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Fajr}
            </th>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Shuruk}
            </th>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Dhohr}
            </th>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Asr}
            </th>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Maghrib}
            </th>
            <th class:larger={isLargerValue}>
              {dailyPrayerTimes.Isha}
            </th>
          </tr>
        {/each}
      </tbody>
        </table>
      </div>
    {/if}
  </article>
</main>
<style>
  .month-heading {
    text-align: center;
    display: block;
    margin: 1.5rem 0 0.75rem;
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--app-text-muted, #3d5247);
  }

  .prayer-month-card {
    margin-bottom: 1rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .monthly-table-wrapper {
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-x;
    width: 100%;
  }

  .prayer-month-card {
    overflow-x: auto !important;
    touch-action: pan-x;
  }

  .monthly-table-wrapper table {
    width: 100%;
    min-width: 720px;
    border-collapse: collapse;
  }

  .tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px;
    padding: 0 4px;
    overflow-x: hidden;
  }

  .tabs > a,
  .tabs > a:visited,
  .tabs > a:hover,
  .tabs > a:focus {
    color: inherit;
    text-decoration: none;
  }

  .tabs > a {
    flex: 1 1 calc(33.333% - 8px);
    min-width: 90px;
    padding: 10px 12px !important;
    white-space: normal;
    overflow: visible;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    word-break: break-word;
  }

  @media (max-width: 520px) {
    .tabs > a {
      flex: 1 1 40%;
      font-size: 0.84rem !important;
      padding: 9px 10px !important;
    }
  }

  .larger {
    font-size: var(--text-size);
  }

  .month-skeleton {
    padding: 12px 16px 16px 16px;
    display: grid;
    gap: 10px;
  }

  .skeleton {
    display: inline-block;
    background: rgba(20, 23, 17, 0.08);
    border-radius: 10px;
  }
  .skeleton-text {
    height: 14px;
  }
  :global(.app-shell[data-theme="dark"]) .skeleton {
    background: rgba(233, 239, 233, 0.12);
  }
</style>