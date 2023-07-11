<script>
  import { onMount } from "svelte";

  let prayerTimes = {};

  onMount(async () => {
    fetch("/api/getTodayPrayerTimes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        prayerTimes = data;
      })
      .catch(function (error) {
        console.log(error);
      });
  });
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
    <article class="card green7" style="overflow: scroll;">
      <table class="border large-space" style="overflow-x: scroll;">
        <thead>
          <tr>
            <th>Bön</th>
            <th>Tid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Fajr</th>
            <th>{prayerTimes.Fajr}</th>
          </tr>
          <tr>
            <th>Dhohr</th>
            <th>{prayerTimes.Dhohr}</th>
          </tr>
          <tr>
            <th>Asr</th>
            <th>{prayerTimes.Asr}</th>
          </tr>
          <tr>
            <th>Magrib</th>
            <th>{prayerTimes.Magrib}</th>
          </tr>
          <tr>  
            <th>Isha</th>
            <th>{prayerTimes.Isha}</th>
          </tr>
        </tbody>
      </table>
      <a href="app/bonetider" style="margin-top: 10px;">Se mer tider</a>
    </article>
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