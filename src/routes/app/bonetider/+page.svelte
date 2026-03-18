<script>
  import { onMount } from "svelte";
  import PrayerTimes from "../../../components/PrayerTimes.svelte";

  import { size, textSize, isLarger } from "$lib/stores";
  import { browser } from '$app/environment'; 

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
<main class="responsive" id="top">
  <article class="no-padding border primary-container">
    <img class="responsive medium" src="/prayermosque.png" alt="Moské"><!----><!---->
    <div class="absolute bottom left right padding bottom-shadow white-text">
      <nav>
        <h5 style="text-align: center; display: block;">Bönetider</h5>
        <div class="max"></div>
        <a href="/app/kontakt" class="circle transparent">
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
  <h4 style="text-align: center; display: block; margin-top: 20px; ">Månadens bönetider</h4>
  <article class="card green5" style="overflow: hidden;">

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
      <table class="border large-space" style="overflow-x: auto; --text-size: {textSizeValue}%">
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
    {/if}
  </article>
</main>
<style>
  
  .tabs>a.active {
    color: rgb(56, 142, 60);
    border-bottom: 0.125rem solid rgb(56, 142, 60)
  }
  /* Force consistent tab colors across desktop/mobile + visited links */
  .tabs > a,
  .tabs > a:visited,
  .tabs > a:hover,
  .tabs > a:focus {
    color: inherit;
    text-decoration: none;
  }
  .tabs > a.active,
  .tabs > a.active:visited,
  .tabs > a.active:hover,
  .tabs > a.active:focus {
    color: rgb(56, 142, 60) !important;
    border-bottom: 0.125rem solid rgb(56, 142, 60) !important;
  }
  .larger {
    font-size: var(--text-size)
  }

  .month-skeleton {
    padding: 12px 16px 16px 16px;
    display: grid;
    gap: 10px;
  }

  .skeleton {
    display: inline-block;
    background: linear-gradient(90deg, rgba(255,255,255,0.10), rgba(255,255,255,0.22), rgba(255,255,255,0.10));
    background-size: 200% 100%;
    animation: shimmer 1.2s ease-in-out infinite;
    border-radius: 10px;
  }
  .skeleton-text {
    height: 14px;
  }
  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
</style>