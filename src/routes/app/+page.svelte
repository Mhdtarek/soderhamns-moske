<script>
  import PrayerTimes from "../../components/PrayerTimes.svelte";
  import CurrentPrayerTime from "../../components/currentPrayerTime.svelte";
  import DailyAyah from "../../components/DailyAyah.svelte";

  /** @type {{ todayPrayerTimes: any; newsPost: any; dailyAyah?: any }} */
  export let data;

  let prayerTimes = data.todayPrayerTimes;
  let post = data.newsPost;
  let dailyAyah = data.dailyAyah ?? null;

  /** @param {string} dateString */
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: false,
      timeZone: "Europe/Stockholm",
    };
    // @ts-ignore
    return date.toLocaleString("sv-SE", options);
  }
</script>

<svelte:head>
  <title>APP | STARTSIDA</title>
</svelte:head>

<main class="responsive app-page">
  <article class="no-padding border primary-container app-hero">
    <img class="responsive medium" src="/mosque.png" alt="" />
    <div
      class="absolute bottom left right padding bottom-shadow white-text app-hero-bar"
    >
      <nav>
        <h5 class="app-hero-title">Söderhamns Moské</h5>
        <div class="max" />
        <a href="/app/kontakt" class="circle transparent app-hero-icon" aria-label="Kontakt">
          <i>phone</i>
        </a>
      </nav>
    </div>
  </article>
  <CurrentPrayerTime />
  <DailyAyah ayah={dailyAyah} />
  <PrayerTimes {prayerTimes} header="Dagens bönetider"></PrayerTimes>
  {#if post?.meta?.title}
    <section class="app-news-block">
      <h3 class="app-section-title">Senaste nyhet</h3>
      <a href={`${post.path}?from=hem`} class="app-link-card">
        <h5>{post.meta.title}</h5>
        <p>{formatDate(post.meta.date)}</p>
      </a>
    </section>
  {/if}
</main>

<style>
  .app-news-block {
    margin-top: 0.5rem;
  }
</style>
