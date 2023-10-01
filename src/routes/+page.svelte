<script>
import PrayerTimes from "../components/PrayerTimes.svelte";

export let data = {}
</script>

<svelte:head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Ladda ned Söderhamns Moske app">
  <meta name="keywords" content="Söderhamns Moske, app, ladda ned">
  <meta name="author" content="Söderhamns Islamiska Kultur Förening">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="Söderhamns Moske">
  <meta property="og:description" content="Ladda ned Söderhamns Moske app">
  <meta property="og:image" content="/mosque.png"> <!-- Ersätt med den faktiska bildens URL -->
  <meta property="og:url" content="https://soderhamns-moske.netlify.app">
  <meta property="og:type" content="website">
  <title>Ladda ned Söderhamns Moske Appen</title>
</svelte:head>

<main class="green3">
  <div class="container">
    <main class="responsive">
      <article class="no-padding border primary-container">
        <img class="responsive medium" src="/mosque.png"><!----><!---->
        <div class="absolute bottom left right padding bottom-shadow white-text">
          <nav>
            <h5 style="text-align: center; display: block;">Söderhamns Moské</h5>
            <div class="max"></div>
          </nav>
        </div>
      </article>
      <section style="display: grid; align-items: center; margin-top: 50px">
        <a href="https://play.google.com/store/apps/details?id=mhdtarek.soderhamnmoske" class="button green10 button large">Ladda ned</a>
        <a href="https://soderhamns-moske.netlify.app/privacy-policy" class="underline">integritetspolicy</a>
      </section>
      <PrayerTimes PrayerTimes={data.prayerTimes}/>
    </main>
  </div>
</main>
