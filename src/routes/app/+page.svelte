<script>
  import PrayerTimes from "../../components/PrayerTimes.svelte";

  export let data = {}
  let prayerTimes = data.todayPrayerTimes
  let post = data.newsPost

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: false,
    timeZone: "Europe/Stockholm"
  };
  // @ts-ignore
  return date.toLocaleString("sv-SE", options);
}
</script>
<svelte:head>
  <title>APP | STARTSIDA</title>
</svelte:head>
<main class="responsive">
  <article class="no-padding border primary-container">
    <img class="responsive medium" src="/mosque.png"><!----><!---->
    <div class="absolute bottom left right padding bottom-shadow white-text">
      <nav>
        <h5 style="text-align: center; display: block;">Söderhamns Moské</h5>
        <div class="max"></div>
        <a href="/app/kontakt" class="circle transparent">
          <i>phone</i>
        </a>
      </nav>
    </div>
  </article>
    {#if prayerTimes != {}}
      <PrayerTimes PrayerTimes={prayerTimes} ></PrayerTimes>
    {/if}
    <article class="s6" style="margin-top: 0;">
      <h3 style="text-align: center; display: block">Nyaste nyhet</h3>
      <article class="green5" style="text-align: center; ">
        <a href={post.path} style="display: block;">
          <h5 style="display: block">
            {post.meta.title}
          </h5>
          <p style="display:block">
            {formatDate(post.meta.date)}
          </p>
        </a>
      </article>
      </article >    </main>
    <style>
      table {
        overflow-x: scroll;
      }
      h2 {
        text-align: left
      }
    </style>