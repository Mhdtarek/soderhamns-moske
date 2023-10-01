<script>
import PrayerTimes from "../components/PrayerTimes.svelte";

export let data = {}
</script>
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
        <a href="https://soderhamns-moske.netlify.app/privacy-policy">integritetspolicy</a>
      </section>
      <PrayerTimes PrayerTimes={data.prayerTimes}/>
    </main>
  </div>
</main>
