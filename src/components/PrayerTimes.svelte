<script>
import { size, textSize, isLarger } from "$lib/stores";
import { browser } from '$app/environment'; 

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
  console.log(prayerTimes)
</script>
<article class="card green5" style="overflow: scroll; --text-size: {textSizeValue}%">
  <p style="text-align: center; font-size: 4vh">{header}</p>
  Datum: {prayerTimes.month}/{prayerTimes.Dat}
  <table class="border large-space center-align" style="overflow-x: scroll;">
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
      <tr>
        <th class:larger={isLargerValue}>Hijri</th>
        <th class:larger={isLargerValue}>{prayerTimes.HiMo}/{prayerTimes.hiDa}</th>
      </tr>
    </tbody>
  </table>
  <a href="/app/bonetider">Se mer bönetider</a>
</article>
<style>
  :root {
    --text-size: 100%;
  }
  article {
    margin-top: 10px;
  }

  .larger {
    font-size: var(--text-size)
  }
</style>