<script>
  import PrayerTimes from "../../components/PrayerTimes.svelte";
  export let data = {}
  let prayerTimes = data.res

</script>

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
    </main>
    <style>
      table {
        overflow-x: scroll;
      }
      h2 {
        text-align: left
      }
    </style>